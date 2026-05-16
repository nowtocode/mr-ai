function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

function highlightActiveNav() {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function(a) {
    a.classList.remove('active');
    var href = a.getAttribute('href').split('/').pop();
    if (href === page) {
      a.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', highlightActiveNav);