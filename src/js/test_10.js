import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['Кто придумал чиндогу?'],
    answers: [
      {
        text: 'Илон Маск',
        count: 0
      },
      {
        text: 'Кенджи Каваками',
        count: 1
      },
      {
        text: 'Никола Тесла',
        count: 0
      }
    ]
  },
  {
    questions: ['Самое известное чиндогу'],
    answers: [
      {
        text: 'селфи-палка',
        count: 1
      },
      {
        text: 'носочес',
        count: 0
      },
      {
        text: 'помомен',
        count: 0
      }
    ]
  },
  {
    questions: ['А&nbsp;какое было в&nbsp;статье?'],
    answers: [
      {
        text: 'Щетка для лапок',
        count: 1
      },
      {
        text: 'Маска для льда',
        count: 0
      },
      {
        text: 'Скейторолик',
        count: 0
      }
    ]
  },
  {
    questions: ['В какой стране зародилось?'],
    answers: [
      {
        text: 'Ямайка',
        count: 0
      },
      {
        text: 'Аргентина',
        count: 0
      },
      {
        text: 'Япония',
        count: 1
      }
    ]
  },
  {
    questions: ['Где работал создатель?'],
    answers: [
      {
        text: 'кафе',
        count: 0
      },
      {
        text: 'больница',
        count: 0
      },
      {
        text: 'магазин на диване',
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
