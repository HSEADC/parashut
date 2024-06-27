import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['Как звали создателя?'],
    answers: [
      {
        text: 'Альфред Шнитки',
        count: 0
      },
      {
        text: 'Пол Атрейдес',
        count: 0
      },
      {
        text: 'Джон Первес',
        count: 1
      }
    ]
  },
  {
    questions: ['Вы слэй или антислэй'],
    answers: [
      {
        text: 'слэй',
        count: 1
      },
      {
        text: 'антслэй',
        count: 0
      },
      {
        text: 'что это',
        count: 0
      }
    ]
  },
  {
    questions: ['Вес первой модели'],
    answers: [
      {
        text: '1000 кг',
        count: 0
      },
      {
        text: '200 кг',
        count: 0
      },
      {
        text: '450 кг',
        count: 1
      }
    ]
  },
  {
    questions: ['Главный недостаток'],
    answers: [
      {
        text: 'плохая мобильность ',
        count: 1
      },
      {
        text: 'грязь',
        count: 0
      },
      {
        text: 'скорость',
        count: 0
      }
    ]
  },
  {
    questions: ['В каком фильме использовалось?'],
    answers: [
      {
        text: 'Отель Гранд Будапешт',
        count: 0
      },
      {
        text: 'Люди в черном',
        count: 0
      },
      {
        text: 'Дюна',
        count: 1
      }
    ]
  }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Вселяешь уважение'
  },
  {
    text1: 'Неплохой результат',
    text2: 'Мы оценили'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Старайся лучше!'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  initTest(stages)
  clickButton(stages, results)
})
