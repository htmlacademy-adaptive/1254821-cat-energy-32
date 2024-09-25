const navMain = document.querySelector('.menu');
const navToggle = document.querySelector('.item-icon__button');
//const navBody = document.querySelector('.bg-cat');

//navToggle.classList.remove('item-icon__button--not-js');
//navMain.classList.remove('menu--not-js');
//navBody.classList.remove('bg-cat--not-js');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('menu--close')) {
    navMain.classList.remove('menu--close');
    navMain.classList.add('menu--open');
    navToggle.classList.remove('item-icon__button--close');
    navToggle.classList.add('item-icon__button--open');
  } else {
    navMain.classList.add('menu--close');
    navMain.classList.remove('menu--open');
    navToggle.classList.add('item-icon__button--close');
    navToggle.classList.remove('item-icon__button--open');
  }
});
