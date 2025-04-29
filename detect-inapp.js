(function() {
  const ua = navigator.userAgent || '';
  // Signatures courantes de WebView in-app
  const inAppSigs = ['TikTok', 'FBAN', 'FBAV', 'Instagram', 'Snapchat', 'Twitter'];
  const isInApp = inAppSigs.some(sig => ua.includes(sig));

  const overlay = document.getElementById('overlay');
  const btn = document.getElementById('open-btn');

  if (isInApp) {
    // Affiche l’overlay avec la flèche et les instructions
    overlay.classList.remove('hidden');

    // Lorsque l’utilisateur touche l’écran, on présume qu’il a suivi la consigne
    overlay.addEventListener('click', () => {
      // Redirige vers Discord dans le navigateur par défaut
      window.location.href = 'https://discord.gg/northsidewl';
    });
  } else {
    // Navigateur normal : redirige directement
    window.location.replace('https://discord.gg/northsidewl');
  }
})();