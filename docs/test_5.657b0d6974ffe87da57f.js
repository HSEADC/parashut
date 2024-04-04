/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var stages = [{
  questions: ['В какой стране придумали этого коня?'],
  answers: [{
    text: 'Германия',
    count: 0
  }, {
    text: 'Нидерланды',
    count: 0
  }, {
    text: 'Италия',
    count: 1
  }]
}, {
  questions: ['Для чего он&nbsp;был предназначен'],
  answers: [{
    text: 'обучение',
    count: 1
  }, {
    text: 'игра',
    count: 0
  }, {
    text: 'развлечение',
    count: 0
  }]
}, {
  questions: ['Кто создал прибор?'],
  answers: [{
    text: 'отец для сына',
    count: 1
  }, {
    text: 'бабушка для внучки',
    count: 0
  }, {
    text: 'мастер',
    count: 0
  }]
}, {
  questions: ['Какого века изобретение?'],
  answers: [{
    text: 'начало 20-го ',
    count: 1
  }, {
    text: '19',
    count: 0
  }, {
    text: '21',
    count: 0
  }]
}, {
  questions: ['Для чего сейчас его используют?'],
  answers: [{
    text: 'обучение',
    count: 1
  }, {
    text: 'езда',
    count: 0
  }, {
    text: 'туризм',
    count: 1
  }]
}];
var results = [{
  text1: 'Да ты эксперт!',
  text2: 'Ловишь темп'
}, {
  text1: 'Неплохой результат',
  text2: 'Мастерские копыта'
}, {
  text1: 'Ну блин:(',
  text2: 'Хватит ржать!'
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