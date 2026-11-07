// Cosmic Stars & Storybook Controller
(function() {
  // 1. Initialise Cosmic Canvas background
  function initCosmicCanvas() {
    const canvas = document.getElementById('cosmic-bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const stars = [];
    const numStars = 140;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        color: Math.random() > 0.3 ? '#FFEBB7' : '#C5DEFF'
      });
    }

    // Occasional shooting star
    let shootingStar = null;
    function spawnShootingStar() {
      if (!shootingStar && Math.random() < 0.015) {
        shootingStar = {
          x: Math.random() * width,
          y: Math.random() * (height * 0.5),
          len: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
          alpha: 1
        };
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      for (let s of stars) {
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha >= 1) { s.alpha = 1; s.twinkleDir = -1; }
        else if (s.alpha <= 0.2) { s.alpha = 0.2; s.twinkleDir = 1; }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.shadowBlur = s.radius * 4;
        ctx.shadowColor = s.color;
        ctx.fill();
      }

      // Draw shooting star
      spawnShootingStar();
      if (shootingStar) {
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        const endX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.len;
        const endY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.len;
        ctx.lineTo(endX, endY);
        const grad = ctx.createLinearGradient(shootingStar.x, shootingStar.y, endX, endY);
        grad.addColorStop(0, `rgba(255, 235, 183, ${shootingStar.alpha})`);
        grad.addColorStop(1, 'rgba(255, 235, 183, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFDF88';
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha -= 0.02;
        if (shootingStar.alpha <= 0) shootingStar = null;
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }
    animate();
  }

  // 2. Table of Contents Toggle
  window.toggleTOC = function() {
    const toc = document.getElementById('storybook-toc');
    if (toc) {
      toc.classList.toggle('active');
    }
  };

  // 3. Touch Swiping for mobile book turn
  function initMobileSwipe() {
    const book = document.getElementById('active-storybook');
    if (!book) return;

    let touchStartX = 0;
    let touchEndX = 0;

    book.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    book.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, {passive: true});

    function handleSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) {
          // Swiped left -> Next page
          const nextBtn = document.querySelector('.btn-book-nav.btn-next');
          if (nextBtn) nextBtn.click();
        } else {
          // Swiped right -> Previous page
          const prevBtn = document.querySelector('.btn-book-nav.btn-prev');
          if (prevBtn) prevBtn.click();
        }
      }
    }
  }

  // 4. Keyboard Arrow Page Turning
  document.addEventListener('keydown', e => {
    // If inside an input or textarea, don't trigger page turn
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight') {
      const nextBtn = document.querySelector('.btn-book-nav.btn-next');
      if (nextBtn) nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
      const prevBtn = document.querySelector('.btn-book-nav.btn-prev');
      if (prevBtn) prevBtn.click();
    } else if (e.key === 'Escape') {
      const toc = document.getElementById('storybook-toc');
      if (toc && toc.classList.contains('active')) {
        toc.classList.remove('active');
      }
    }
  });

  // Lock book action
  window.lockStorybook = function() {
    sessionStorage.removeItem('storybookUnlocked');
    window.location.href = 'index.html';
  };

  document.addEventListener('DOMContentLoaded', () => {
    initCosmicCanvas();
    initMobileSwipe();
  });
})();
