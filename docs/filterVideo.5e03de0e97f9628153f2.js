/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


//фильтрация по тегам
var multiSelectOptions = [];
console.log(multiSelectOptions);
function updateSelectData(option) {
  multiSelectOptions.forEach(function (o) {
    if (o.text === option.text) {
      o.active = !option.active;
    }
  });
}
function updateSelectOptionList() {
  var optionList = document.querySelector('.Head-tags');
  multiSelectOptions.forEach(function (option) {
    var text = option.text,
      active = option.active;
    var listItem = document.createElement('button');
    if (!active) {
      listItem.classList.add('Head-tag', 'A_selectInput', 'A_tag');
      listItem.innerText = text;
      listItem.addEventListener('click', function () {
        // const listItems = document.getElementsByClassName('Head-tag')
        // for (let index = 0; index < listItems.length; index++) {
        //   const element = listItems[index]
        //   element.classList.remove('active')
        // }
        listItem.classList.add('active');
        updateSelectData(option);
        updateContent();
        console.log(option);
      });
      optionList.appendChild(listItem);
    }
  });
}
function initMultiSelect() {
  //добавляем инфу в тег
  getContentCardDataTags().forEach(function (tag) {
    multiSelectOptions.push({
      text: tag,
      active: false
    });
  });
}

//код для фильтрации по тегу
function getContentCardDataTags() {
  var contentCards = document.getElementsByClassName('O_video-card');
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
  var contentCards = document.querySelectorAll('.O_video-card');
  var selectedTags = [];
  multiSelectOptions.forEach(function (obj) {
    if (obj.active) {
      selectedTags.push(obj.text);
    }
  });
  console.log(selectedTags);
  var _loop = function _loop() {
    var contentCard = contentCards[i];
    var contentCardTags = contentCard.dataset.tags.split(',');
    var transformedTags = [];
    contentCardTags.forEach(function (tag) {
      transformedTags.push(tag.toLowerCase());
    });
    contentCard.classList.remove('hidden');
    selectedTags.forEach(function (tag) {
      if (!transformedTags.includes(tag)) {
        contentCard.classList.add('hidden');
      }
    });
  };
  for (var i = 0; i < contentCards.length; i++) {
    _loop();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  getContentCardDataTags();
  initMultiSelect();
  updateSelectOptionList();

  // initSelect()
});
/******/ })()
;