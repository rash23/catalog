const trigger = document.querySelector('.header-nav__trigger');
const nav = document.querySelector('.header-nav');
const overlay = document.querySelector('.header-nav__overlay');
const menu = document.querySelector('.header-nav__menu');

trigger.addEventListener('click', () => {
	nav.classList.add('visible');
	overlay.classList.add('visible');
	menu.classList.remove('hidden-md');
});

overlay.addEventListener('click', ({ target }) => {
	target.classList.remove('visible');
	nav.classList.remove('visible');
	menu.classList.add('hidden-md');
});
