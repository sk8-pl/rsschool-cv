const burger = document.getElementsByClassName('header_burger');
const burgerClose = document.getElementsByClassName('header_burger-close');
const subMenu = document.getElementsByClassName('sub_nav');
const burgerSpan = document.getElementsByClassName('burger__span');
let isOpen = false;

console.log('Self-esteem: 160/160')
console.log('вёрстка валидная +10')
console.log('вёрстка семантическая +20 (header,main, nav, aside, figure, section, ,footer, h1-4)')
console.log('для оформления СV используются css-стили +10')
console.log('контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы +10')
console.log('вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10')
console.log('есть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10')
console.log('на странице СV присутствует изображение - фото автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10')
console.log('контакты для связи и перечень навыков оформлены в виде списка ul > li +10')
console.log('CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10')
console.log('CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. (Rainbow) +10')
console.log('CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке +10')
console.log('CV выполнено на английском языке +10')
console.log('выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10')
console.log('есть видеорезюме автора CV на английском языке. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена его транскрипция на английском языке +10 (Никогда не сдавайся, позорься до конца!)')
console.log('качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10')


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
