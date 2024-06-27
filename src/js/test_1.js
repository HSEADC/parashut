import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['В каком кино была звуковая отвёртка?'],
    answers: [
      {
        text: 'Доктор Кто',
        count: 1
      },
      {
        text: 'Звездные войны',
        count: 0
      },
      {
        text: 'Солярис',
        count: 0
      }
    ]
  },
  {
    questions: ['А где нам попадался нейрализатор?'],
    answers: [
      {
        text: 'Люди Икс',
        count: 0
      },
      {
        text: 'Люди в черном',
        count: 1
      },
      {
        text: 'Бэтмен',
        count: 0
      }
    ]
  },
  {
    questions: ['Что на счет голограммы?'],
    answers: [
      {
        text: 'Звездные войны',
        count: 1
      },
      {
        text: 'Годзилла',
        count: 0
      },
      {
        text: 'Атлантида',
        count: 0
      }
    ]
  },
  {
    questions: ['Прототип чипа Илона Маска?'],
    answers: [
      {
        text: 'Бегущий по лезвию',
        count: 0
      },
      {
        text: 'Апгрей',
        count: 1
      },
      {
        text: 'Атлантида',
        count: 0
      }
    ]
  },
  {
    questions: ['Ну а наши любимые дроны?'],
    answers: [
      {
        text: 'Звездные войны',
        count: 0
      },
      {
        text: 'Назад в будущее 2',
        count: 1
      },
      {
        text: 'Люди Икс',
        count: 0
      }
    ]
  }
  // {
  //   questions: ['меня зовут'],
  //   answers: [
  //     {
  //       text: 'даша',
  //       count: 1
  //     },
  //     {
  //       text: 'маша',
  //       count: 0
  //     },
  //     {
  //       text: 'костя',
  //       count: 0
  //     }
  //   ]
  // }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Когда своя короткометражка?'
  },
  {
    text1: 'Неплохой результат',
    text2: 'вНе думал пересмотреть «Солярис»?'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Ну-ка бегом читать наши статьи!'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  initTest(stages)
  clickButton(stages, results)
})
