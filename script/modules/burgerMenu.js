const body = document.querySelector('body');
const menuList = body.querySelector('.header__menu');
const menuBtn = body.querySelector('.nav-icon__middle');
const menuBtnWrapper = body.querySelector('.nav-btn__wrapper');

menuBtnWrapper.style.cssText = `
width: 35px;
height: 30px;
`;

body.addEventListener('click', ({ target }) => {
  console.log('target: ', target);
  if (target.closest('.nav-btn__wrapper')) {
    menuList.classList.toggle('header__menu_active');
    menuBtn.classList.toggle('active');
  }

  if (
    target.classList.contains('header__link') ||
    (!target.classList.contains('header__menu_active') && !target.closest('.nav-btn__wrapper'))
  ) {
    menuList.classList.remove('header__menu_active');
    menuBtn.classList.remove('active');
  }

});

