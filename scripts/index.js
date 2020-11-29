const hamburgerIcon = document.querySelector('.header__nav__mobile-menu');

function toggleNavModal () {
    const mobileNav = document.querySelector('.header__nav__links');
    const overlay = document.querySelector('.overlay');
    const iconImg = document.querySelector('.header__nav__mobile-menu__img');

    mobileNav.style.display = (mobileNav.style.display === 'none') ? 'block' : 'none';

    overlay.style.display = (overlay.style.display === 'none') ? 'block' : 'none';

    if (iconImg.src === './images/icon-hamburger.svg') {
        iconImg.src = './images/icon-close.svg';
    } else {
        iconImg.src = './images/icon-hamburger.svg';
    }
}

hamburgerIcon.addEventListener('click', toggleNavModal);