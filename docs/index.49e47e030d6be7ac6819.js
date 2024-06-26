/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function () {
  popupSequence();
  getContentCardDataTags();
});

//для поиска карточек
function popupSequence() {
  var popups = document.querySelectorAll('.popup'); //находим все карточки с классом

  popups.forEach(function (popup, index) {
    // const popup = document.querySelector('.popup')
    positionPopup(popup); //запускаем функция для позиционирования карточек
  });
}

//возвращает рандомное число
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//для позиционирования карточек
function positionPopup(popup) {
  var section = document.querySelector('#cover'); //находим по id блок с обложкой страницы
  var screenWidth = section.getBoundingClientRect().width; //смотрим его ширину
  var screenHeight = section.getBoundingClientRect().height; //и высоту
  var _popup$getBoundingCli = popup.getBoundingClientRect(),
    width = _popup$getBoundingCli.width,
    height = _popup$getBoundingCli.height; //смотрим ширину и высоту карточки

  var widthRange = screenWidth - width; //считаем макисмальную ширину для карточки
  var heightRange = screenHeight - height; //считаем максимальную высоту для карточки

  popup.style.top = getRandomArbitrary(0, heightRange) + 'px'; //позиционирем по top
  popup.style.left = getRandomArbitrary(0, widthRange) + 'px'; //позиционируем по left
}

//фильтрация по тегам

function getContentCardDataTags() {
  var contentCards = document.getElementsByClassName('O_article-card');
  var tags = [];
  for (var i = 0; i < contentCards.length; i++) {
    var contentCard = contentCards[i];
    var contentCardTags = contentCard.dataset.tags.split(',');
    console.log(contentCardTags);
    contentCardTags.forEach(function (item) {
      tags.push(item);
      console.log(item);
    });
    console.log(item);
  }
}

//фильтрация по тегам

// let filterlist = document.querySelector('#headTags')
// // Получение каждого тега, т.е li элемент
// let filterItem = filterlist.childNodes
// // Получение всех статей
// let newsItem = document.querySelectorAll('.O_article-card')
// // Получение обёртки статей
// // let newsWrapper = document.querySelector('.C_articles')
// filterItem.forEach((event) => {
//   event.addEventListener('click', () => {
//     event.classList.toggle('active')
//     if (event.classList.contains('active')) {
//       // Получение атрибута data tag у li списка
//       let itemAttr = event.getAttribute('data-tag')
//       // Поиск статей с таким же классом
//       let resultItem = document.querySelectorAll(`.${itemAttr}`)
//       resultItem.forEach((elem) => {
//         newsItem.forEach((e) => {
//           // Скрываем все статьи
//           e.style.display = 'none'
//           // Нужную статью показываем
//           elem.style.display = 'block'
//         })
//       })
//     } else {
//       newsItem.forEach((e) => {
//         // Убираем все статьи
//         e.style.display = 'none'
//       })
//     }
//   })
// })
/******/ })()
;