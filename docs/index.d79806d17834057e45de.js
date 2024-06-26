/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


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
var multiSelectOptions = [];
console.log(multiSelectOptions);

//вывод тегов в список

function initSelect() {
  var optionList = document.querySelector('.Head-tags');
  var selectInput = document.querySelector('.A_');
  multiSelectOptions.forEach(function (option) {
    var listItem = document.createElement('button');
    listItem.classList.add('Head-tag', 'A_selectInput', 'A_tag');
    listItem.innerText = option; //он кладет внутрь данные массива -- два объекта. но я хз как положить туда текст
    // tagSelect.addEventListener('click', () => {})

    listItem.addEventListener('click', function () {
      var listItems = document.getElementsByClassName('Head-tag');
      for (var index = 0; index < listItems.length; index++) {
        var element = listItems[index];
        element.classList.remove('active');
      }
      listItem.classList.add('active');
      // selectInput.value = option
      // console.log(listItems)
    });
    optionList.appendChild(listItem);
  });
}
function initMultiSelect() {
  getContentCardDataTags().forEach(function (tag) {
    multiSelectOptions.push({
      text: tag,
      active: false
    });
  });
}

//код для фильтрации по тегу
function getContentCardDataTags() {
  var contentCards = document.getElementsByClassName('O_article-card');
  var tags = [];
  var transformedTags = [];
  for (var i = 0; i < contentCards.length; i++) {
    var contentCard = contentCards[i];
    var contentCardTags = contentCard.dataset.tags.split(',');
    tags.push.apply(tags, _toConsumableArray(contentCardTags));
  }
  tags.forEach(function (tag) {
    transformedTags.push(tag.toLowerCase());
  });
  var uniqueTags = _toConsumableArray(new Set(transformedTags));
  // console.log(tags, uniqueTags)
  return uniqueTags;
}

//код непосредственно фильтрации
function updateContent() {
  var contentCards = document.querySelectorAll('.O_article-card');
  var selectedTags = [];
  multiSelectOptions.forEach(function (obj) {
    if (obj.active) {
      selectedTags.push(obj.text);
    }
    console.log(selectedTags);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  popupSequence();
  getContentCardDataTags();
  initMultiSelect();
  initSelect();
});
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
//       let itemAttr =
// event.getAttribute('data-tag')
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