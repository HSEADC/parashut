import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['Для кого изначально был прибор?'],
    answers: [
      {
        text: 'для больных',
        count: 1
      },
      {
        text: 'для слабовидящих',
        count: 0
      },
      {
        text: 'для всех',
        count: 0
      }
    ]
  },
  {
    questions: ['Как звали ученого разработчика?'],
    answers: [
      {
        text: 'Мария Кюри',
        count: 0
      },
      {
        text: 'Эндрю МакКай',
        count: 1
      },
      {
        text: 'Эмма Рич',
        count: 0
      }
    ]
  },
  {
    questions: ['Какой угол достигался?'],
    answers: [
      {
        text: '180 градусов',
        count: 0
      },
      {
        text: '90 градусов',
        count: 1
      },
      {
        text: '45 градусов',
        count: 0
      }
    ]
  },
  {
    questions: ['Какая технология применялась?'],
    answers: [
      {
        text: 'преломление ',
        count: 1
      },
      {
        text: 'увеличение',
        count: 0
      },
      {
        text: 'искажение',
        count: 0
      }
    ]
  },
  {
    questions: ['Кому сейчас нужны очки?'],
    answers: [
      {
        text: 'всем на свете',
        count: 0
      },
      {
        text: 'больным',
        count: 0
      },
      {
        text: 'особо ленивым',
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
