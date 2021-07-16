const menuBtn = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');
const menuBtnIcons = document.querySelectorAll('.icon__menu');

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
	menu.classList.toggle('menu--active');
	menuBtnIcons.forEach(icon => icon.classList.toggle('icon__menu--active'));
}