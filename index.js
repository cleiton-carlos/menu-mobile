const menu = document.querySelector('[data-js="navigation"]');

function addClass(element,nameClass) {
  element.classList.add(nameClass);
}

function createElement() {
  const div = document.createElement('div');
  const body = document.querySelector('[data-js="body"]');
  addClass(div,'overlay');
  body.insertAdjacentElement('afterbegin',div);
}

function removeClass() {
  const overlay = document.querySelector('.overlay');
  overlay.addEventListener('click',() => {
    overlay.remove();
    menu.classList.remove('navigation__opened');
  })
}

function menuMobile() {
  addClass(menu,'navigation__opened');
  createElement();
  removeClass();
}

document.querySelector('[data-js="menu"]').addEventListener('click', menuMobile);