const openBtnEl = document.querySelector('[data-class="burger-btn"]');
const closeBtnEl = document.querySelector('[data-type="mobile-menu-closeBtn"]');
const burgerMenuEl = document.querySelector('[data-type="mobile-menu-overlay"]');

openBtnEl.addEventListener('click', e => {
    burgerMenuEl.dataset.action = 'isOpen';
    document.documentElement.dataset.scrollLock = true;

});

closeBtnEl.addEventListener('click', e => {
    burgerMenuEl.dataset.action = 'isClose';
    document.documentElement.dataset.scrollLock = false;
});
