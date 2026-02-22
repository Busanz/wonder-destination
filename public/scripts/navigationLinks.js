const hamburgerBtn = document.querySelector('.mobile_hamberger');
const closeBtn = document.querySelector('.mobile_close');
const nav = document.querySelector('.header_nav');
const navLinks = document.querySelectorAll('.header_link');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.add('menu_open');
  closeBtn.classList.add('menu_open');
  nav.classList.add('menu_open');
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
  hamburgerBtn.classList.remove('menu_open');
  closeBtn.classList.remove('menu_open');
  nav.classList.remove('menu_open');
  document.body.classList.remove('no-scroll');
});

navLinks.forEach((link) => {
  console.log(link.getAttribute('href'), window.location.pathname);
  if (link.getAttribute('href') === window.location.pathname) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
