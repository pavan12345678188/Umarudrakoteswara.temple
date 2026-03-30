// 🔥 HAMBURGER
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');

  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

// 🔥 CLOSE MENU AFTER CLICK
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks')?.classList.remove('open');
      document.getElementById('hamburger')?.classList.remove('open');
    });
  });

  // 🔥 DROPDOWN CLICK (MOBILE)
  document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function(e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('open');
      }
    });
  });

});