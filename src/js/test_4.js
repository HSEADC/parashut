import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['Поехали!'],
    answers: [
      {
        text: 'параратор',
        count: 1
      },
      {
        text: 'волшебная палочка',
        count: 0
      },
      {
        text: 'супер газета',
        count: 0
      }
    ]
  },
  {
    questions: ['Продолжаем'],
    answers: [
      {
        text: 'нано трубки',
        count: 0
      },
      {
        text: 'ракклумба',
        count: 1
      },
      {
        text: 'барабашка',
        count: 0
      }
    ]
  },
  {
    questions: ['Хух, середина'],
    answers: [
      {
        text: 'лампышка',
        count: 1
      },
      {
        text: 'водный насос',
        count: 0
      },
      {
        text: 'машинаконь',
        count: 0
      }
    ]
  },
  {
    questions: ['Почти все'],
    answers: [
      {
        text: 'утюг',
        count: 0
      },
      {
        text: 'бумагалстуг',
        count: 1
      },
      {
        text: 'вентилятор лапшичный',
        count: 0
      }
    ]
  },
  {
    questions: ['Самый сложный и&nbsp;последний вопрос!'],
    answers: [
      {
        text: 'летающий корабль',
        count: 1
      },
      {
        text: 'гаечная дрель',
        count: 0
      },
      {
        text: 'утюгушники',
        count: 0
      }
    ]
  }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Настоящая лампышка!'
  },
  {
    text1: 'Неплохой результат',
    text2: 'Тянет на роликоласту'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Какой-то параратор'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  initTest(stages)
  clickButton(stages, results)
})
