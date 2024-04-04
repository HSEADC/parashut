/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var stages = [{
  questions: ['Автор мини телевизора'],
  answers: [{
    text: 'Бил Гейтс',
    count: 0
  }, {
    text: 'Альберт Эйнштейн',
    count: 0
  }, {
    text: 'Клайв Синклер',
    count: 1
  }]
}, {
  questions: ['Изобретатель деток в&nbsp;клетке'],
  answers: [{
    text: 'Мария Кюри',
    count: 0
  }, {
    text: 'Шакира',
    count: 0
  }, {
    text: 'Эмма Рич',
    count: 1
  }]
}, {
  questions: ['Моторная доска для серфа'],
  answers: [{
    text: 'Брин Маур',
    count: 1
  }, {
    text: 'Илон Маск',
    count: 0
  }, {
    text: 'Никола Тесла',
    count: 0
  }]
}, {
  questions: ['А парашют?'],
  answers: [{
    text: 'Зязито',
    count: 0
  }, {
    text: 'Оленька',
    count: 0
  }, {
    text: 'Да Винчи',
    count: 1
  }]
}, {
  questions: ['Наши любимые чиндогу'],
  answers: [{
    text: 'Кенджи Каваками',
    count: 1
  }, {
    text: 'Валентин Стрыкало',
    count: 0
  }, {
    text: 'Исаак Ньютон',
    count: 0
  }]
}];
var results = [{
  text1: 'Да ты эксперт!',
  text2: 'Лучший угадыватель!'
}, {
  text1: 'Неплохой результат',
  text2: 'Почти все угадал'
}, {
  text1: 'Ну блин:(',
  text2: 'Старайся лучше!'
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