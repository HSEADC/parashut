/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var stages = [{
  questions: ['Поехали!'],
  answers: [{
    text: 'параратор',
    count: 1
  }, {
    text: 'волшебная палочка',
    count: 0
  }, {
    text: 'супер газета',
    count: 0
  }]
}, {
  questions: ['Продолжаем'],
  answers: [{
    text: 'нано трубки',
    count: 0
  }, {
    text: 'ракклумба',
    count: 1
  }, {
    text: 'барабашка',
    count: 0
  }]
}, {
  questions: ['Хух, середина'],
  answers: [{
    text: 'лампышка',
    count: 1
  }, {
    text: 'водный насос',
    count: 0
  }, {
    text: 'машинаконь',
    count: 0
  }]
}, {
  questions: ['Почти все'],
  answers: [{
    text: 'утюг',
    count: 0
  }, {
    text: 'бумагалстуг',
    count: 1
  }, {
    text: 'вентилятор лапшичный',
    count: 0
  }]
}, {
  questions: ['Самый сложный и&nbsp;последний вопрос!'],
  answers: [{
    text: 'летающий корабль',
    count: 1
  }, {
    text: 'гаечная дрель',
    count: 0
  }, {
    text: 'утюгушники',
    count: 0
  }]
}];
var results = [{
  text1: 'Да ты эксперт!',
  text2: 'Настоящая лампышка!'
}, {
  text1: 'Неплохой результат',
  text2: 'Тянет на роликоласту'
}, {
  text1: 'Ну блин:(',
  text2: 'Какой-то параратор'
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