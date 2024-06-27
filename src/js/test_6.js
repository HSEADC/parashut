import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['Как же звали изобретателя?'],
    answers: [
      {
        text: 'Льюис Кэррол',
        count: 0
      },
      {
        text: 'Клайв Синклер',
        count: 1
      },
      {
        text: 'Никола Тесла',
        count: 0
      }
    ]
  },
  {
    questions: ['Его самая известная работа'],
    answers: [
      {
        text: 'Наномашина',
        count: 0
      },
      {
        text: 'Sinclair C5',
        count: 1
      },
      {
        text: 'Super vision',
        count: 0
      }
    ]
  },
  {
    questions: ['Что больше всего любил наш герой?'],
    answers: [
      {
        text: 'все миниатюрное',
        count: 1
      },
      {
        text: 'хорошо поесть',
        count: 0
      },
      {
        text: 'природу',
        count: 0
      }
    ]
  },
  {
    questions: ['Кто вдохновлялся его работами потом?'],
    answers: [
      {
        text: 'Бил Гейтс',
        count: 0
      },
      {
        text: 'Марк Цукерберг',
        count: 0
      },
      {
        text: 'Илон Маск',
        count: 1
      }
    ]
  },
  {
    questions: ['Почему проект не стал популярным?'],
    answers: [
      {
        text: 'слишком нестандартный',
        count: 1
      },
      {
        text: 'неудобный',
        count: 0
      },
      {
        text: 'люди не покупали',
        count: 0
      }
    ]
  }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Молниеносные ответы'
  },
  {
    text1: 'Неплохой результат',
    text2: 'Почти Молния Маквин'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Бывало и лучше'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  initTest(stages)
  clickButton(stages, results)
})
