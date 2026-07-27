/* ============================================================================
   Overnight — couche réseau (salons / lobbys)
   ----------------------------------------------------------------------------
   Modèle : "hôte autoritaire".
     - L'hôte (celui qui crée le salon) fait tourner la logique de jeu et diffuse
       l'état complet à tout le monde.
     - Les autres joueurs envoient des INTENTIONS (actions) à l'hôte.
     - L'hôte applique l'action s'il la juge légitime (c'est bien son tour), puis
       rediffuse l'état. Personne d'autre ne peut faire avancer la partie.

   Reconnexion (le "système de flag" demandé) :
     - Chaque joueur possède un pid stable stocké en localStorage.
     - La présence Supabase marque online/offline en temps réel.
     - Un joueur qui rafraîchit revient avec le même pid : il retrouve sa place,
       son avatar et son tour. La partie n'est jamais bloquée par une absence :
       on peut sauter un joueur déconnecté (skipDisconnected).

   Transport : adaptateur enfichable.
     - LocalTransport  : un seul téléphone (pass-the-phone). Zéro réseau.
     - SupabaseTransport : Realtime (broadcast + presence). Aucune table SQL,
       tout est éphémère — rien à administrer, rien à nettoyer.
   ========================================================================== */
(function (root) {
  'use strict';

  // Lecture LIVE de la config : elle peut être définie ou modifiée après le chargement
  // du script (config.js, injection à l'exécution, page de réglages…).
  function cfg() { return root.OVERNIGHT_CONFIG || {}; }

  /* ---------- utilitaires ---------- */
  function uid() {
    return 'p' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  }
  // Code salon lisible : pas de I/O/0/1 pour éviter les confusions à l'oral
  var ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  function roomCode(n) {
    var s = '';
    for (var i = 0; i < (n || 4); i++) s += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    return s;
  }
  function store(k, v) {
    try { if (v === undefined) return JSON.parse(localStorage.getItem('overnight.' + k) || 'null');
          localStorage.setItem('overnight.' + k, JSON.stringify(v)); } catch (e) { return null; }
  }

  /* ---------- Transport local (1 téléphone) ---------- */
  function LocalTransport() {
    this.mode = 'local';
  }
  LocalTransport.prototype.connect = function () { return Promise.resolve(); };
  LocalTransport.prototype.broadcast = function () { };
  LocalTransport.prototype.send = function () { };
  LocalTransport.prototype.leave = function () { return Promise.resolve(); };

  /* ---------- Transport Supabase Realtime ---------- */
  function SupabaseTransport(url, key) {
    this.mode = 'online';
    this.url = url; this.key = key;
    this.client = null; this.channel = null;
  }
  // Chargement de la librairie Supabase avec CDN de secours : un bloqueur de pub
  // ou une coupure d'un CDN ne doit pas suffire à tuer le mode Online.
  var LIB_CDNS = [
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js',
    'https://unpkg.com/@supabase/supabase-js@2/dist/umd/supabase.js'
  ];
  SupabaseTransport.prototype._lib = function () {
    if (root.supabase && root.supabase.createClient) return Promise.resolve(root.supabase);
    if (root.__sbLibPromise) return root.__sbLibPromise;   // un seul chargement partagé
    root.__sbLibPromise = new Promise(function (resolve, reject) {
      var i = 0;
      (function next() {
        if (i >= LIB_CDNS.length) {
          root.__sbLibPromise = null;
          return reject(new Error('librairie Supabase injoignable (réseau ou bloqueur ?)'));
        }
        var s = document.createElement('script');
        s.src = LIB_CDNS[i++];
        s.onload = function () {
          if (root.supabase && root.supabase.createClient) resolve(root.supabase);
          else next();
        };
        s.onerror = next;
        document.head.appendChild(s);
      })();
    });
    return root.__sbLibPromise;
  };
  SupabaseTransport.prototype.connect = function (opts) {
    var self = this;
    return this._lib().then(function (sb) {
      self.client = sb.createClient(self.url, self.key, { realtime: { params: { eventsPerSecond: 20 } } });
      self.channel = self.client.channel('room:' + opts.code, {
        config: { broadcast: { self: false }, presence: { key: opts.me.pid } }
      });
      self.channel
        .on('broadcast', { event: 'state' }, function (p) { opts.onState && opts.onState(p.payload); })
        .on('broadcast', { event: 'action' }, function (p) { opts.onAction && opts.onAction(p.payload); })
        .on('broadcast', { event: 'hello' }, function (p) { opts.onHello && opts.onHello(p.payload); })
        .on('broadcast', { event: 'rollcall' }, function () { opts.onRollcall && opts.onRollcall(); })
        .on('presence', { event: 'sync' }, function () {
          var st = self.channel.presenceState(), online = {};
          Object.keys(st).forEach(function (k) { online[k] = true; });
          opts.onPresence && opts.onPresence(online);
        });
      return new Promise(function (resolve, reject) {
        var settled = false;
        var timer = setTimeout(function () {
          if (!settled) { settled = true; reject(new Error('Connexion au salon trop longue')); }
        }, 12000);
        self.channel.subscribe(function (status) {
          if (status === 'SUBSCRIBED') {
            self.channel.track({ pid: opts.me.pid, name: opts.me.name, at: Date.now() });
            if (!settled) { settled = true; clearTimeout(timer); resolve(); }
          } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
            if (!settled) { settled = true; clearTimeout(timer); reject(new Error('Salon injoignable')); }
          }
        });
      });
    });
  };
  SupabaseTransport.prototype.broadcast = function (event, payload) {
    if (!this.channel) return;
    this.channel.send({ type: 'broadcast', event: event, payload: payload });
  };
  SupabaseTransport.prototype.leave = function () {
    var c = this.channel; this.channel = null;
    return c ? c.unsubscribe() : Promise.resolve();
  };

  /* ---------- Room : l'API utilisée par le jeu ---------- */
  var Room = {
    active: false,
    code: null,
    isHost: false,
    me: null,              // {pid, name, avatar}
    players: [],           // [{pid, name, avatar, online, gorgees}]
    transport: new LocalTransport(),
    onUpdate: null,        // callback re-render
    _stateVersion: 0,

    configured: function () { var c = cfg(); return !!(c.supabaseUrl && c.supabaseAnonKey); },

    identity: function () {
      var id = store('identity');
      if (!id || !id.pid) { id = { pid: uid(), name: '', avatar: null }; store('identity', id); }
      this.me = id; return id;
    },
    saveIdentity: function (patch) {
      var id = this.identity();
      Object.keys(patch || {}).forEach(function (k) { id[k] = patch[k]; });
      store('identity', id); this.me = id; return id;
    },

    /* --- créer un salon (on devient hôte) --- */
    host: function (opts) {
      var self = this;
      this.identity();
      this.code = (opts && opts.code) || roomCode(4);
      this.isHost = true;
      this.players.length = 0;
      this.players.push({ pid: this.me.pid, name: this.me.name, avatar: this.me.avatar, online: true, gorgees: 0 });
      return this._open().then(function () {
        self.active = true;
        store('session', { code: self.code, isHost: true });
        // si c'est une reconnexion, les autres sont déjà là : qu'ils se signalent
        self.transport.broadcast('rollcall', { at: Date.now() });
        return self.code;
      });
    },

    /* --- rejoindre un salon existant --- */
    join: function (code) {
      var self = this;
      this.identity();
      this.code = String(code || '').toUpperCase().trim();
      this.isHost = false;
      this.players.length = 0;
      return this._open().then(function () {
        self.active = true;
        store('session', { code: self.code, isHost: false });
        // on se présente : l'hôte ajoutera/retrouvera ce joueur puis rediffusera l'état
        self.transport.broadcast('hello', { pid: self.me.pid, name: self.me.name, avatar: self.me.avatar });
        return self.code;
      });
    },

    _open: function () {
      var self = this;
      if (!this.configured()) {
        this.transport = new LocalTransport();
        return Promise.reject(new Error('CONFIG_MANQUANTE'));
      }
      this.transport = new SupabaseTransport(cfg().supabaseUrl, cfg().supabaseAnonKey);
      return this.transport.connect({
        code: this.code,
        me: this.me,
        onState: function (s) { self._applyState(s); },
        onAction: function (a) { self._onAction(a); },
        onHello: function (h) { self._onHello(h); },
        // Un hôte reconnecté ne connaît plus personne : chaque invité se re-signale.
        onRollcall: function () {
          if (self.isHost) return;
          self.transport.broadcast('hello', { pid: self.me.pid, name: self.me.name, avatar: self.me.avatar });
        },
        onPresence: function (online) { self._onPresence(online); }
      });
    },

    /* --- côté hôte : un joueur se présente --- */
    _onHello: function (h) {
      if (!this.isHost) return;
      var found = null;
      for (var i = 0; i < this.players.length; i++) if (this.players[i].pid === h.pid) found = this.players[i];
      if (found) {                       // reconnexion : on garde son score et sa place
        found.name = h.name || found.name;
        found.avatar = h.avatar || found.avatar;
        found.online = true;
      } else {
        this.players.push({ pid: h.pid, name: h.name || 'Invité', avatar: h.avatar, online: true, gorgees: 0 });
      }
      if (root.clampTurn) root.clampTurn();
      this.pushState();
    },

    /* --- présence : qui est réellement connecté --- */
    _onPresence: function (online) {
      var changed = false;
      this.players.forEach(function (p) {
        var on = !!online[p.pid];
        if (p.online !== on) { p.online = on; changed = true; }
      });
      if (changed) { if (this.isHost) this.pushState(); else this.onUpdate && this.onUpdate(); }
    },

    /* --- l'hôte diffuse l'état complet --- */
    pushState: function () {
      if (!this.isHost) return;
      this._stateVersion++;
      var snap = this.snapshot ? this.snapshot() : {};
      snap.__v = this._stateVersion;
      snap.__players = this.players;
      snap.__code = this.code;
      this.transport.broadcast('state', snap);
      this.onUpdate && this.onUpdate();
    },

    /* --- un invité reçoit l'état --- */
    _applyState: function (s) {
      if (this.isHost) return;                       // l'hôte est la source de vérité
      if (s.__v && s.__v <= this._stateVersion) return;  // ignore les paquets en retard
      this._stateVersion = s.__v || 0;
      // IMPORTANT : on modifie le tableau en place. Le jeu garde une référence
      // (S.players === Room.players) ; le réassigner casserait ce lien.
      this.players.length = 0;
      (s.__players || []).forEach(function (p) { this.players.push(p); }, this);
      this.applyState && this.applyState(s);
      this.onUpdate && this.onUpdate();
    },

    /* --- un invité demande une action ; seul l'hôte l'exécute --- */
    act: function (type, payload) {
      if (this.isHost) { this._onAction({ pid: this.me.pid, type: type, payload: payload }); return; }
      this.transport.broadcast('action', { pid: this.me.pid, type: type, payload: payload });
    },
    _onAction: function (a) {
      if (!this.isHost) return;
      this.handleAction && this.handleAction(a);
    },

    leave: function () {
      var self = this;
      var t = this.transport;
      this.active = false; this.code = null; this.isHost = false; this.players.length = 0;
      this.transport = new LocalTransport();
      store('session', null);
      return t.leave ? t.leave() : Promise.resolve();
    },

    /* --- lien d'invitation --- */
    inviteURL: function () {
      var base = location.origin + location.pathname.replace(/\/[^/]*$/, '/');
      if (cfg().publicBase) base = cfg().publicBase.replace(/\/$/, '') + '/';
      return base + '?r=' + this.code;
    }
  };

  Room.identity();          // Room.me est disponible dès le chargement (jamais null)
  root.Room = Room;
  root.roomCode = roomCode;
})(typeof window !== 'undefined' ? window : globalThis);
