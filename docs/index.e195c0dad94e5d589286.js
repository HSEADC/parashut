/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


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

document.addEventListener('DOMContentLoaded', function () {
  popupSequence();
});
/******/ })()
;