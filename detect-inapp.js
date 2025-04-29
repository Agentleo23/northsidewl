(function() {
  const ua = navigator.userAgent || '';
  // Signatures des navigateurs « classiques »
  const browsers = [
    'Safari',      // Safari iOS
    'Chrome',      // Chrome Android/desktop
    'CriOS',       // Chrome iOS
    'Edge',        // Edge
    'EdgA', 'EdgiOS',
    'Firefox',     // Firefox
    'FxiOS',
    'OPR',         // Opera
    'Arc',         // Arc browser
    'Brave'        // Brave
  ];

  // Si on trouve **au moins** l’une des signatures, on est dans un vrai navigateur
  const isNormalBrowser = browsers.some(sig => ua.includes(sig));

  const overlay = document.getElementById('overlay');
  const openBtn = document.getElementById('open-btn');

  if (!isNormalBrowser) {
    // On n'est pas dans Safari/Chrome/Edge/etc. : on affiche les instructions
    overlay.classList.remove('hidden');
    openBtn.classList.add('hidden');
  } else {
    // Navigateur « normal » : on redirige directement vers Discord
    window.location.replace('https://discord.gg/northsidewl');
  }

  // Cliquer sur l'overlay redirige dans le navigateur par défaut
  overlay.addEventListener('click', () => {
    window.location.href = 'https://discord.gg/northsidewl';
  });
})();