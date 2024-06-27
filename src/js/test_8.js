import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['Начинаем!'],
    answers: [
      {
        text: 'зонтик для собак',
        count: 1
      },
      {
        text: 'летающее пианино',
        count: 0
      },
      {
        text: 'острая кровать',
        count: 0
      }
    ]
  },
  {
    questions: ['Продолжаем'],
    answers: [
      {
        text: 'огурцовые лыжи',
        count: 0
      },
      {
        text: 'облачный фильтр',
        count: 0
      },
      {
        text: 'железное мыло',
        count: 1
      }
    ]
  },
  {
    questions: ['Уже середина!'],
    answers: [
      {
        text: 'самоходный зонт',
        count: 0
      },
      {
        text: 'противомигренная диадема',
        count: 1
      },
      {
        text: 'умная сковородка',
        count: 0
      }
    ]
  },
  {
    questions: ['Мы уже близко'],
    answers: [
      {
        text: 'очки для чтения лежа',
        count: 1
      },
      {
        text: 'тапочки с подогревом',
        count: 0
      },
      {
        text: 'душ-кофемашина',
        count: 0
      }
    ]
  },
  {
    questions: ['И-и-и финал'],
    answers: [
      {
        text: 'зеркальный телевизор',
        count: 0
      },
      {
        text: 'лапшичный фен',
        count: 1
      },
      {
        text: 'умная тумбочка',
        count: 0
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
