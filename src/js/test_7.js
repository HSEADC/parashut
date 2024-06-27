import '../index.css'
import { initTest, clickButton } from './test.js'

const stages = [
  {
    questions: ['За что цепляется зонтик?'],
    answers: [
      {
        text: 'ухо',
        count: 0
      },
      {
        text: 'поводок',
        count: 1
      },
      {
        text: 'хвост',
        count: 0
      }
    ]
  },
  {
    questions: ['Это изобретение является'],
    answers: [
      {
        text: 'чиндогу',
        count: 1
      },
      {
        text: 'советской разработкой',
        count: 0
      },
      {
        text: 'государственной тайной',
        count: 0
      }
    ]
  },
  {
    questions: ['Оказалось&nbsp;ли оно полезным?'],
    answers: [
      {
        text: 'еще как!',
        count: 0
      },
      {
        text: 'вполне',
        count: 0
      },
      {
        text: 'совсем нет',
        count: 1
      }
    ]
  },
  {
    questions: ['Но&nbsp;было&nbsp;ли оно смешным?'],
    answers: [
      {
        text: 'безмерно!! ',
        count: 1
      },
      {
        text: 'не слишком',
        count: 0
      },
      {
        text: 'было забавно',
        count: 0
      }
    ]
  },
  {
    questions: ['На каких собачек расчитан зонтик?'],
    answers: [
      {
        text: 'больших',
        count: 0
      },
      {
        text: 'средних',
        count: 0
      },
      {
        text: 'маленьких',
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
    text2: 'Собачки оценили'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Собачкам на смех'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  initTest(stages)
  clickButton(stages, results)
})
