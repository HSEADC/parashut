/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var stages = [{
  questions: ['Как же звали изобретателя?'],
  answers: [{
    text: 'Льюис Кэррол',
    count: 0
  }, {
    text: 'Клайв Синклер',
    count: 1
  }, {
    text: 'Никола Тесла',
    count: 0
  }]
}, {
  questions: ['Его самая известная работа'],
  answers: [{
    text: 'Наномашина',
    count: 0
  }, {
    text: 'Sinclair C5',
    count: 1
  }, {
    text: 'Super vision',
    count: 0
  }]
}, {
  questions: ['Что больше всего любил наш герой?'],
  answers: [{
    text: 'все миниатюрное',
    count: 1
  }, {
    text: 'хорошо поесть',
    count: 0
  }, {
    text: 'природу',
    count: 0
  }]
}, {
  questions: ['Кто вдохновлялся его работами потом?'],
  answers: [{
    text: 'Бил Гейтс',
    count: 0
  }, {
    text: 'Марк Цукерберг',
    count: 0
  }, {
    text: 'Илон Маск',
    count: 1
  }]
}, {
  questions: ['Почему проект не стал популярным?'],
  answers: [{
    text: 'слишком нестандартный',
    count: 1
  }, {
    text: 'неудобный',
    count: 0
  }, {
    text: 'люди не покупали',
    count: 0
  }]
}];
var results = [{
  text1: 'Да ты эксперт!',
  text2: 'Молниеносные ответы'
}, {
  text1: 'Неплохой результат',
  text2: 'Почти Молния Маквин'
}, {
  text1: 'Ну блин:(',
  text2: 'Бывало и лучше'
}];
document.addEventListener('DOMContentLoaded', function () {
  initTest();
  clickButton();
});
var stageCounter = 0;
var resultCounter = 0;
function initTest() {
  var questionNumber = document.querySelector('#pages');
  var question = document.querySelector('#head');
  var answers = document.querySelectorAll('.A_test-button');
  questionNumber.innerHTML = "".concat(stageCounter + 1, "/").concat(stages.length);
  question.innerHTML = stages[stageCounter].questions;
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[stageCounter].answers[i].text;
    answers[i].dataset.count = stages[stageCounter].answers[i].count;
  }
}
function clickButton() {
  var answers = document.querySelectorAll('.A_test-button');
  answers.forEach(function (button) {
    button.addEventListener('click', function () {
      resultCounter += Number(button.dataset.count);
      console.log(resultCounter);
      setTimeout(function () {
        newStage();
      }, 500);
    });
  });
}
function newStage() {
  if (stageCounter + 1 < stages.length) {
    stageCounter++;
    initTest();
  } else {
    showResult();
  }
}
function showResult() {
  var test = document.querySelector('.O_test-progress-container');
  var score = document.querySelector('.A_test-score');
  var text = document.querySelector('.A_test-text');
  var comment = document.querySelector('.A_test-comment');
  test.style.display = 'none';
  score.innerHTML = resultCounter;
  switch (resultCounter) {
    case 5:
      text.innerHTML = results[0].text1;
      comment.innerHTML = results[0].text2;
      break;
    case 4:
    case 3:
      text.innerHTML = results[1].text1;
      comment.innerHTML = results[1].text2;
      break;
    case 2:
    case 1:
    case 0:
      text.innerHTML = results[2].text1;
      comment.innerHTML = results[2].text2;
      break;
  }
}
/******/ })()
;