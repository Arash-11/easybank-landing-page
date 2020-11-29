const hamburgerIcon = document.querySelector('.header__nav__mobile-menu');
const mobileNavLinks = document.querySelector('.header__nav__links');
const iconImg = document.querySelector('.header__nav__mobile-menu__img');
const overlay = document.querySelector('.overlay');

function toggleNavModal () {
    if (mobileNavLinks.style.display === 'none' || mobileNavLinks.style.display === '') {
        mobileNavLinks.style.display = 'block';
        iconImg.src = './images/icon-close.svg';
    } else {
        mobileNavLinks.style.display = 'none';
        iconImg.src = './images/icon-hamburger.svg';
    }

    if (overlay.style.display === 'none' || overlay.style.display === '') {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

hamburgerIcon.addEventListener('click', toggleNavModal);