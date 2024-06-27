import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['В какой стране придумали этого коня?'],
    answers: [
      {
        text: 'Германия',
        count: 0
      },
      {
        text: 'Нидерланды',
        count: 0
      },
      {
        text: 'Италия',
        count: 1
      }
    ]
  },
  {
    questions: ['Для чего он&nbsp;был предназначен'],
    answers: [
      {
        text: 'обучение',
        count: 1
      },
      {
        text: 'игра',
        count: 0
      },
      {
        text: 'развлечение',
        count: 0
      }
    ]
  },
  {
    questions: ['Кто создал прибор?'],
    answers: [
      {
        text: 'отец для сына',
        count: 1
      },
      {
        text: 'бабушка для внучки',
        count: 0
      },
      {
        text: 'мастер',
        count: 0
      }
    ]
  },
  {
    questions: ['Какого века изобретение?'],
    answers: [
      {
        text: 'начало 20-го ',
        count: 1
      },
      {
        text: '19',
        count: 0
      },
      {
        text: '21',
        count: 0
      }
    ]
  },
  {
    questions: ['Для чего сейчас его используют?'],
    answers: [
      {
        text: 'обучение',
        count: 1
      },
      {
        text: 'езда',
        count: 0
      },
      {
        text: 'туризм',
        count: 1
      }
    ]
  }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Ловишь темп'
  },
  {
    text1: 'Неплохой результат',
    text2: 'Мастерские копыта'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Хватит ржать!'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  initTest(stages)
  clickButton(stages, results)
})
