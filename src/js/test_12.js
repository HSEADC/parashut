import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['Как называлось изобретение?'],
    answers: [
      {
        text: 'изолятор',
        count: 0
      },
      {
        text: 'анти-отвлекашка',
        count: 0
      },
      {
        text: 'умный шлем',
        count: 1
      }
    ]
  },
  {
    questions: ['Что НЕ закрывает шлем?'],
    answers: [
      {
        text: 'уши',
        count: 0
      },
      {
        text: 'глаза',
        count: 0
      },
      {
        text: 'руки',
        count: 1
      }
    ]
  },
  {
    questions: ['Что подается через баллон?'],
    answers: [
      {
        text: 'веселящий газ',
        count: 0
      },
      {
        text: 'кофеин',
        count: 0
      },
      {
        text: 'кислород',
        count: 1
      }
    ]
  },
  {
    questions: ['Когда изобрели этот чудо-шлем?'],
    answers: [
      {
        text: '18 век',
        count: 0
      },
      {
        text: '20 век',
        count: 1
      },
      {
        text: 'вчера',
        count: 0
      }
    ]
  },
  {
    questions: ['Что поглощает этот прибор?'],
    answers: [
      {
        text: 'свет',
        count: 0
      },
      {
        text: 'внешний шум',
        count: 1
      },
      {
        text: 'магнитные волны',
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
