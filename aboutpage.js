const hamburger = document.querySelector('.navbars');
const mobileMenu = document.querySelector('.mobilemenu');
const mobileMenuItems = document.querySelectorAll('.item');
const closeButton = document.querySelector('.xbutton');
const bars = document.querySelector('.navbars');

mobileMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';

  bars.style.display = 'none';
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  bars.style.display = 'flex';
  document.body.style.overflow = 'scroll';
});
