import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['Какого проекта не было?'],
    answers: [
      {
        text: 'летающая машина',
        count: 0
      },
      {
        text: 'ИИ',
        count: 0
      },
      {
        text: 'турбо пес',
        count: 1
      }
    ]
  },
  {
    questions: ['Какой проект не прошел испытание?'],
    answers: [
      {
        text: 'турбо автомобиль',
        count: 0
      },
      {
        text: 'умный дом',
        count: 0
      },
      {
        text: 'все прошли',
        count: 1
      }
    ]
  },
  {
    questions: ['Это изобретение можно встретить сейчас?'],
    answers: [
      {
        text: 'водный поезд',
        count: 0
      },
      {
        text: 'турбо машина',
        count: 0
      },
      {
        text: 'умный дом',
        count: 1
      }
    ]
  },
  {
    questions: ['Какой из&nbsp;проектов еще не&nbsp;осуществлен?'],
    answers: [
      {
        text: 'ИИ',
        count: 0
      },
      {
        text: 'умный дом',
        count: 0
      },
      {
        text: 'турбо авто',
        count: 1
      }
    ]
  },
  {
    questions: ['Самый быстрый'],
    answers: [
      {
        text: 'искусственный интеллект',
        count: 1
      },
      {
        text: 'турбо машина',
        count: 0
      },
      {
        text: 'водный поезд',
        count: 0
      }
    ]
  }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Угостишь заливной рыбой?'
  },
  {
    text1: 'Неплохой результат',
    text2: 'Ты — дитя 90х?'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Ох уж эти зумеры'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  initTest(stages)
  clickButton(stages, results)
})
