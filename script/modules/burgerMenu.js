const body = document.querySelector('body');
const menuList = body.querySelector('.header__menu');

body.addEventListener('click', ({ target }) => {
  console.log('target: ', target);
  target.matches('.header__menu-button')
    ? menuList.classList.toggle('header__menu_active')
    : '';

	if (
    target.classList.contains('header__menu') ||
    target.classList.contains('header__link') ||
    (target.className != 'header__menu' &&
      !target.matches('.header__menu-button'))
  ) {
    menuList.classList.remove('header__menu_active');
  }

});
