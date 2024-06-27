/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/test.js
var stageCounter = 0;
var resultCounter = 0;
function initTest(stages) {
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
function clickButton(stages, results) {
  var answers = document.querySelectorAll('.A_test-button');
  answers.forEach(function (button) {
    button.addEventListener('click', function () {
      resultCounter += Number(button.dataset.count);
      console.log(resultCounter);
      setTimeout(function () {
        newStage(stages, results);
      }, 500);
    });
  });
}
function newStage(stages, results) {
  if (stageCounter + 1 < stages.length) {
    stageCounter++;
    initTest(stages);
  } else {
    showResult(results);
  }
}
function showResult(results) {
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

;// CONCATENATED MODULE: ./src/js/test_11.js


var stages = [{
  questions: ['Как звали создателя?'],
  answers: [{
    text: 'Альфред Шнитки',
    count: 0
  }, {
    text: 'Пол Атрейдес',
    count: 0
  }, {
    text: 'Джон Первес',
    count: 1
  }]
}, {
  questions: ['Вы слэй или антислэй'],
  answers: [{
    text: 'слэй',
    count: 1
  }, {
    text: 'антслэй',
    count: 0
  }, {
    text: 'что это',
    count: 0
  }]
}, {
  questions: ['Вес первой модели'],
  answers: [{
    text: '1000 кг',
    count: 0
  }, {
    text: '200 кг',
    count: 0
  }, {
    text: '450 кг',
    count: 1
  }]
}, {
  questions: ['Главный недостаток'],
  answers: [{
    text: 'плохая мобильность ',
    count: 1
  }, {
    text: 'грязь',
    count: 0
  }, {
    text: 'скорость',
    count: 0
  }]
}, {
  questions: ['В каком фильме использовалось?'],
  answers: [{
    text: 'Отель Гранд Будапешт',
    count: 0
  }, {
    text: 'Люди в черном',
    count: 0
  }, {
    text: 'Дюна',
    count: 1
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
  initTest(stages);
  clickButton(stages, results);
});
/******/ })()
;