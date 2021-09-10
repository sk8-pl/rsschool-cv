const burger = document.getElementsByClassName('header_burger');
const subMenu = document.getElementsByClassName('sub_nav');
let isOpen = false;

function openMenu() {
    if (isOpen == false) {
        subMenu[0].style.left='0%';
        isOpen = true
    } else {
        subMenu[0].style.left='100%';
        isOpen = false

    }
}


burger[0].addEventListener('click', () => openMenu())
subMenu[0].addEventListener('click', () => openMenu())
