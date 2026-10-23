document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const links = document.getElementById('links');

  if (menuBtn && links) {
    menuBtn.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
});