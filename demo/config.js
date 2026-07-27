/* Configuration publique d'Overnight.
   Ces deux valeurs sont PUBLIQUES par conception (la clé "anon" Supabase est
   prévue pour tourner côté navigateur). Ne jamais mettre ici la clé service_role.

   Pour activer le mode Online :
     1. Crée un projet sur supabase.com (gratuit)
     2. Settings > API : copie "Project URL" et la clé "anon public"
     3. Colle-les ci-dessous, commit, redéploie.
   Tant que c'est vide, l'app reste 100 % jouable en mode local (un téléphone). */
window.OVERNIGHT_CONFIG = Object.assign({
  supabaseUrl: 'https://jcrtfzlsvnuaxtfzrpvy.supabase.co',
  supabaseAnonKey: 'sb_publishable_nC02vNkb8nrpZfbOHZ5jDw_UMzHUGf4',
  // Optionnel : force l'URL utilisée dans le QR code (sinon déduite de la page courante)
  publicBase: ''
}, window.OVERNIGHT_CONFIG || {});
