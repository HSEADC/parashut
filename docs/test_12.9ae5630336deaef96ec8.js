/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var stages = [{
  questions: ['Как называлось изобретение?'],
  answers: [{
    text: 'изолятор',
    count: 0
  }, {
    text: 'анти-отвлекашка',
    count: 0
  }, {
    text: 'умный шлем',
    count: 1
  }]
}, {
  questions: ['Что НЕ закрывает шлем?'],
  answers: [{
    text: 'уши',
    count: 0
  }, {
    text: 'глаза',
    count: 0
  }, {
    text: 'руки',
    count: 1
  }]
}, {
  questions: ['Что подается через баллон?'],
  answers: [{
    text: 'веселящий газ',
    count: 0
  }, {
    text: 'кофеин',
    count: 0
  }, {
    text: 'кислород',
    count: 1
  }]
}, {
  questions: ['Когда изобрели этот чудо-шлем?'],
  answers: [{
    text: '18 век',
    count: 0
  }, {
    text: '20 век',
    count: 1
  }, {
    text: 'вчера',
    count: 0
  }]
}, {
  questions: ['Что поглощает этот прибор?'],
  answers: [{
    text: 'свет',
    count: 0
  }, {
    text: 'внешний шум',
    count: 1
  }, {
    text: 'магнитные волны',
    count: 0
  }]
}];
var results = [{
  text1: 'Да ты эксперт!',
  text2: 'Вселяешь уважение'
}, {
  text1: 'Неплохой результат',
  text2: 'Мы оценили'
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