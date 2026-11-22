// This runs automatically when the page2 opens
createParticles();

function createParticles() {
  const particles = document.getElementById('particles');
  const emojis = ['💖', '💕', '💗', '💓', '❤️', '✨', '🌸'];
  const colors = ['#ff6b9d', '#ff8fab', '#ffb3c6', '#ffc2d4', '#ff9a9e', '#fad0c4', '#ffd1dc'];

  // Hearts
  for (let i = 0; i < 45; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-40px';
    heart.style.fontSize = (14 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (3 + Math.random() * 4) + 's';
    heart.style.animationDelay = Math.random() * 1.8 + 's';
    particles.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
  }

  // Confetti
  for (let i = 0; i < 60; i++) {
    const conf = document.createElement('div');
    conf.classList.add('confetti');
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.top = '-20px';
    conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    conf.style.animationDuration = (2.5 + Math.random() * 3.5) + 's';
    conf.style.animationDelay = Math.random() * 1.5 + 's';
    particles.appendChild(conf);
    setTimeout(() => conf.remove(), 8000);
  }
}