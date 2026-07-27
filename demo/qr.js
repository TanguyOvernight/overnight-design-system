/* Encodeur QR minimal et autonome (mode octet, niveau de correction M, versions 1→10).
   Aucune dépendance externe : le jeu doit marcher hors-ligne et sous CSP stricte.
   Usage : QR.svg("https://…", {size:220, dark:'#1A0B55', light:'#fff'}) -> chaîne SVG */
(function (root) {
  'use strict';

  /* --- Galois field GF(256) pour Reed-Solomon --- */
  var EXP = new Uint8Array(512), LOG = new Uint8Array(256);
  (function () {
    var x = 1;
    for (var i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 0x100) x ^= 0x11d; }
    for (var j = 255; j < 512; j++) EXP[j] = EXP[j - 255];
  })();
  function gmul(a, b) { return (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]]; }

  function rsGenerator(deg) {
    var poly = [1];
    for (var i = 0; i < deg; i++) {
      var next = new Array(poly.length + 1).fill(0);
      for (var j = 0; j < poly.length; j++) {
        next[j] ^= poly[j];
        next[j + 1] ^= gmul(poly[j], EXP[i]);
      }
      poly = next;
    }
    return poly;
  }
  function rsEncode(data, ecLen) {
    var gen = rsGenerator(ecLen), res = new Array(ecLen).fill(0);
    for (var i = 0; i < data.length; i++) {
      var factor = data[i] ^ res[0];
      res.shift(); res.push(0);
      for (var j = 0; j < ecLen; j++) res[j] ^= gmul(gen[j + 1], factor);
    }
    return res;
  }

  /* --- Tables par version (1→10), niveau M --- */
  // [nb total de codewords data, nb EC codewords par bloc, nb blocs groupe1, nb blocs groupe2]
  var VER = {
    1:  [16, 10, 1, 0], 2: [28, 16, 1, 0], 3: [44, 26, 1, 0], 4: [64, 18, 2, 0],
    5:  [86, 24, 2, 0], 6: [108, 16, 4, 0], 7: [124, 18, 4, 0], 8: [154, 22, 2, 2],
    9:  [182, 22, 3, 2], 10: [216, 24, 4, 1]
  };
  var ALIGN = {
    1: [], 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30],
    6: [6, 34], 7: [6, 22, 38], 8: [6, 24, 42], 9: [6, 26, 46], 10: [6, 28, 50]
  };
  // Informations de format pré-calculées (niveau M = 00), masques 0→7
  var FORMAT_M = [0x5412, 0x5125, 0x5E7C, 0x5B4B, 0x45F9, 0x40CE, 0x4F97, 0x4AA0];
  // Informations de version (versions ≥ 7)
  var VERSION_INFO = { 7: 0x07C94, 8: 0x085BC, 9: 0x09A99, 10: 0x0A4D3 };

  function utf8(str) {
    var out = [], s = encodeURIComponent(str);
    for (var i = 0; i < s.length; i++) {
      if (s[i] === '%') { out.push(parseInt(s.substr(i + 1, 2), 16)); i += 2; }
      else out.push(s.charCodeAt(i));
    }
    return out;
  }

  function pickVersion(len) {
    for (var v = 1; v <= 10; v++) {
      var cap = VER[v][0];
      var lenBits = v < 10 ? 8 : 16;             // mode octet : 8 bits jusqu'à v9
      var need = Math.ceil((4 + lenBits + len * 8) / 8);
      if (need <= cap) return v;
    }
    throw new Error('QR: contenu trop long (max ~216 octets)');
  }

  function buildData(bytes, version) {
    var cap = VER[version][0], lenBits = version < 10 ? 8 : 16;
    var bits = [];
    function push(val, n) { for (var i = n - 1; i >= 0; i--) bits.push((val >> i) & 1); }
    push(4, 4);                       // mode octet
    push(bytes.length, lenBits);
    for (var i = 0; i < bytes.length; i++) push(bytes[i], 8);
    var capBits = cap * 8;
    for (var t = 0; t < 4 && bits.length < capBits; t++) bits.push(0);   // terminateur
    while (bits.length % 8) bits.push(0);
    var data = [];
    for (var b = 0; b < bits.length; b += 8) {
      var v = 0; for (var k = 0; k < 8; k++) v = (v << 1) | bits[b + k];
      data.push(v);
    }
    var pad = [0xEC, 0x11], p = 0;
    while (data.length < cap) data.push(pad[p++ % 2]);
    return data;
  }

  function interleave(data, version) {
    var ecLen = VER[version][1], g1 = VER[version][2], g2 = VER[version][3];
    var total = g1 + g2;
    var short = Math.floor(data.length / total), long = short + 1;
    var blocks = [], ec = [], pos = 0;
    for (var i = 0; i < total; i++) {
      var size = i < g1 ? short : long;
      var blk = data.slice(pos, pos + size); pos += size;
      blocks.push(blk); ec.push(rsEncode(blk, ecLen));
    }
    var out = [], maxLen = long;
    for (var c = 0; c < maxLen; c++)
      for (var b = 0; b < total; b++) if (c < blocks[b].length) out.push(blocks[b][c]);
    for (var e = 0; e < ecLen; e++)
      for (var b2 = 0; b2 < total; b2++) out.push(ec[b2][e]);
    return out;
  }

  function makeMatrix(version) {
    var size = version * 4 + 17;
    var m = [], reserved = [];
    for (var i = 0; i < size; i++) { m.push(new Array(size).fill(0)); reserved.push(new Array(size).fill(0)); }

    function finder(r, c) {
      for (var dr = -1; dr <= 7; dr++) for (var dc = -1; dc <= 7; dc++) {
        var rr = r + dr, cc = c + dc;
        if (rr < 0 || cc < 0 || rr >= size || cc >= size) continue;
        var on = (dr >= 0 && dr <= 6 && (dc === 0 || dc === 6)) ||
                 (dc >= 0 && dc <= 6 && (dr === 0 || dr === 6)) ||
                 (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4);
        m[rr][cc] = on ? 1 : 0; reserved[rr][cc] = 1;
      }
    }
    finder(0, 0); finder(0, size - 7); finder(size - 7, 0);

    // motifs d'alignement
    var al = ALIGN[version];
    for (var a = 0; a < al.length; a++) for (var b = 0; b < al.length; b++) {
      var r0 = al[a], c0 = al[b];
      if (reserved[r0][c0]) continue;
      for (var dr2 = -2; dr2 <= 2; dr2++) for (var dc2 = -2; dc2 <= 2; dc2++) {
        var on2 = Math.max(Math.abs(dr2), Math.abs(dc2)) !== 1;
        m[r0 + dr2][c0 + dc2] = on2 ? 1 : 0; reserved[r0 + dr2][c0 + dc2] = 1;
      }
    }
    // timing
    for (var t = 8; t < size - 8; t++) {
      if (!reserved[6][t]) { m[6][t] = t % 2 === 0 ? 1 : 0; reserved[6][t] = 1; }
      if (!reserved[t][6]) { m[t][6] = t % 2 === 0 ? 1 : 0; reserved[t][6] = 1; }
    }
    m[size - 8][8] = 1; reserved[size - 8][8] = 1;           // module noir fixe
    // zones réservées format
    for (var i2 = 0; i2 <= 8; i2++) {
      if (!reserved[8][i2]) reserved[8][i2] = 2;
      if (!reserved[i2][8]) reserved[i2][8] = 2;
    }
    for (var j2 = 0; j2 < 8; j2++) {
      if (!reserved[8][size - 1 - j2]) reserved[8][size - 1 - j2] = 2;
      if (!reserved[size - 1 - j2][8]) reserved[size - 1 - j2][8] = 2;
    }
    if (version >= 7) {
      for (var v1 = 0; v1 < 6; v1++) for (var v2 = 0; v2 < 3; v2++) {
        reserved[size - 11 + v2][v1] = 2; reserved[v1][size - 11 + v2] = 2;
      }
    }
    return { m: m, reserved: reserved, size: size };
  }

  function placeData(grid, codewords) {
    var m = grid.m, reserved = grid.reserved, size = grid.size;
    var bitIdx = 0, total = codewords.length * 8;
    function bitAt(i) { return i < total ? (codewords[i >> 3] >> (7 - (i & 7))) & 1 : 0; }
    var up = true;
    for (var col = size - 1; col > 0; col -= 2) {
      if (col === 6) col--;                       // saute la colonne de timing
      for (var i = 0; i < size; i++) {
        var row = up ? size - 1 - i : i;
        for (var c = 0; c < 2; c++) {
          var cc = col - c;
          if (reserved[row][cc]) continue;
          m[row][cc] = bitAt(bitIdx++);
        }
      }
      up = !up;
    }
  }

  function applyMask(grid, mask) {
    var m = grid.m, reserved = grid.reserved, size = grid.size;
    var f = [
      function (r, c) { return (r + c) % 2 === 0; },
      function (r) { return r % 2 === 0; },
      function (r, c) { return c % 3 === 0; },
      function (r, c) { return (r + c) % 3 === 0; },
      function (r, c) { return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0; },
      function (r, c) { return ((r * c) % 2) + ((r * c) % 3) === 0; },
      function (r, c) { return (((r * c) % 2) + ((r * c) % 3)) % 2 === 0; },
      function (r, c) { return (((r + c) % 2) + ((r * c) % 3)) % 2 === 0; }
    ][mask];
    for (var r = 0; r < size; r++) for (var c = 0; c < size; c++)
      if (!reserved[r][c] && f(r, c)) m[r][c] ^= 1;
  }

  function placeFormat(grid, mask) {
    var m = grid.m, size = grid.size, fmt = FORMAT_M[mask];
    for (var i = 0; i < 15; i++) {
      var bit = (fmt >> i) & 1;
      // copie verticale (colonne 8, autour du finder haut-gauche puis bas-gauche)
      if (i < 6) m[i][8] = bit;
      else if (i < 8) m[i + 1][8] = bit;
      else m[size - 15 + i][8] = bit;
      // copie horizontale (ligne 8)
      if (i < 8) m[8][size - 1 - i] = bit;
      else if (i < 9) m[8][15 - i] = bit;
      else m[8][14 - i] = bit;
    }
    m[size - 8][8] = 1;   // module noir fixe
    if (VERSION_INFO[grid.version]) {
      var vi = VERSION_INFO[grid.version];
      for (var j = 0; j < 18; j++) {
        var b = (vi >> j) & 1, r = Math.floor(j / 3), c = j % 3;
        m[size - 11 + c][r] = b; m[r][size - 11 + c] = b;
      }
    }
  }

  function penalty(grid) {
    var m = grid.m, size = grid.size, score = 0, r, c, i, run, dark = 0;
    for (r = 0; r < size; r++) {
      run = 1;
      for (c = 1; c < size; c++) {
        if (m[r][c] === m[r][c - 1]) { run++; } else { if (run >= 5) score += 3 + (run - 5); run = 1; }
      }
      if (run >= 5) score += 3 + (run - 5);
    }
    for (c = 0; c < size; c++) {
      run = 1;
      for (r = 1; r < size; r++) {
        if (m[r][c] === m[r - 1][c]) { run++; } else { if (run >= 5) score += 3 + (run - 5); run = 1; }
      }
      if (run >= 5) score += 3 + (run - 5);
    }
    for (r = 0; r < size - 1; r++) for (c = 0; c < size - 1; c++) {
      var s = m[r][c] + m[r][c + 1] + m[r + 1][c] + m[r + 1][c + 1];
      if (s === 0 || s === 4) score += 3;
    }
    for (r = 0; r < size; r++) for (c = 0; c < size; c++) dark += m[r][c];
    var pct = (dark * 100) / (size * size);
    score += Math.floor(Math.abs(pct - 50) / 5) * 10;
    return score;
  }

  function encode(text) {
    var bytes = utf8(text), version = pickVersion(bytes.length);
    var data = buildData(bytes, version), codewords = interleave(data, version);
    var best = null, bestScore = Infinity;
    for (var mask = 0; mask < 8; mask++) {
      var grid = makeMatrix(version); grid.version = version;
      placeData(grid, codewords); applyMask(grid, mask); placeFormat(grid, mask);
      var sc = penalty(grid);
      if (sc < bestScore) { bestScore = sc; best = grid; }
    }
    return best;
  }

  function svg(text, opt) {
    opt = opt || {};
    var grid = encode(text), size = grid.size, quiet = opt.quiet == null ? 2 : opt.quiet;
    var total = size + quiet * 2, px = opt.size || 200;
    var dark = opt.dark || '#14083F', light = opt.light || '#FFFFFF';
    var d = '';
    for (var r = 0; r < size; r++) for (var c = 0; c < size; c++)
      if (grid.m[r][c]) d += 'M' + (c + quiet) + ' ' + (r + quiet) + 'h1v1h-1z';
    var radius = opt.radius == null ? 4 : opt.radius;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + px + '" height="' + px +
      '" viewBox="0 0 ' + total + ' ' + total + '" shape-rendering="crispEdges" style="border-radius:' + radius + 'px;display:block;">' +
      '<rect width="' + total + '" height="' + total + '" fill="' + light + '"/>' +
      '<path d="' + d + '" fill="' + dark + '"/></svg>';
  }

  root.QR = { svg: svg, encode: encode };
})(typeof window !== 'undefined' ? window : globalThis);
