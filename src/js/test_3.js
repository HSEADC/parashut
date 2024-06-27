import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['Автор мини телевизора'],
    answers: [
      {
        text: 'Бил Гейтс',
        count: 0
      },
      {
        text: 'Альберт Эйнштейн',
        count: 0
      },
      {
        text: 'Клайв Синклер',
        count: 1
      }
    ]
  },
  {
    questions: ['Изобретатель деток в&nbsp;клетке'],
    answers: [
      {
        text: 'Мария Кюри',
        count: 0
      },
      {
        text: 'Шакира',
        count: 0
      },
      {
        text: 'Эмма Рич',
        count: 1
      }
    ]
  },
  {
    questions: ['Моторная доска для серфа'],
    answers: [
      {
        text: 'Брин Маур',
        count: 1
      },
      {
        text: 'Илон Маск',
        count: 0
      },
      {
        text: 'Никола Тесла',
        count: 0
      }
    ]
  },
  {
    questions: ['А парашют?'],
    answers: [
      {
        text: 'Зязито',
        count: 0
      },
      {
        text: 'Оленька',
        count: 0
      },
      {
        text: 'Да Винчи',
        count: 1
      }
    ]
  },
  {
    questions: ['Наши любимые чиндогу'],
    answers: [
      {
        text: 'Кенджи Каваками',
        count: 1
      },
      {
        text: 'Валентин Стрыкало',
        count: 0
      },
      {
        text: 'Исаак Ньютон',
        count: 0
      }
    ]
  }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Лучший угадыватель!'
  },
  {
    text1: 'Неплохой результат',
    text2: 'Почти все угадал'
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
