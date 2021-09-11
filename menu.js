const burger = document.getElementsByClassName('header_burger');
const burgerClose = document.getElementsByClassName('header_burger-close');
const subMenu = document.getElementsByClassName('sub_nav');
const burgerSpan = document.getElementsByClassName('burger__span');
let isOpen = false;

function openMenu() {
    if (isOpen == false) {
        subMenu[0].style.left='0%';
        burger[0].style.right='-50px';
        burgerClose[0].style.top='0px';
        isOpen = true
    } else {
        subMenu[0].style.left='100%';
        burger[0].style.right='0px';
        burgerClose[0].style.top='-30px';
        isOpen = false
    }
}


burger[0].addEventListener('click', () => openMenu())
burgerClose[0].addEventListener('click', () => openMenu())
subMenu[0].addEventListener('click', () => openMenu())
