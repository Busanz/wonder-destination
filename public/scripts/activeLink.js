const navLinks = document.querySelectorAll('.header_link');

navLinks.forEach((link) => {
  if (link.getAttribute('href') === window.location.pathname) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
