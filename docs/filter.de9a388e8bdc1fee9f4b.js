/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


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
    if (!active) {
      var listItem = document.createElement('button');
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