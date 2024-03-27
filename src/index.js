import './index.css'

const stages = [
  {
    questions: ['example'],
    answers: [
      {
        text: 'собака',
        count: 1
      },
      {
        text: 'кошка',
        count: 0
      },
      {
        text: 'крокодил',
        count: 0
      }
    ]
  },
  {
    questions: ['какое ты изобретение?'],
    answers: [
      {
        text: 'шаролет',
        count: 1
      },
      {
        text: 'лампышка',
        count: 0
      },
      {
        text: 'роликоласта',
        count: 0
      }
    ]
  },
  {
    questions: ['сколько тебе лет'],
    answers: [
      {
        text: '10',
        count: 0
      },
      {
        text: '18',
        count: 1
      },
      {
        text: '20',
        count: 0
      }
    ]
  },
  {
    questions: ['почему ты интересуешься изобретениями?'],
    answers: [
      {
        text: 'это классно',
        count: 0
      },
      {
        text: 'я гик',
        count: 0
      },
      {
        text: 'мне пофиг',
        count: 1
      }
    ]
  },
  {
    questions: ['я люблю кушать'],
    answers: [
      {
        text: 'картошку',
        count: 0
      },
      {
        text: 'мясо',
        count: 1
      },
      {
        text: 'котлеты',
        count: 0
      }
    ]
  },
  {
    questions: ['меня зовут'],
    answers: [
      {
        text: 'даша',
        count: 1
      },
      {
        text: 'маша',
        count: 0
      },
      {
        text: 'костя',
        count: 0
      }
    ]
  }
]

const results = [
  {
    text1: 'первый ответ',
    text2: 'первый ответ'
  },
  {
    text1: 'второй ответ',
    text2: 'второй ответ'
  },
  {
    text1: 'третий ответ',
    text2: 'третий ответ'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  initTest()
  clickButton()
})

let stageCounter = 0
let resultCounter = 0

function initTest() {
  const questionNumber = document.querySelector('#pages')
  const question = document.querySelector('#head')
  const answers = document.querySelectorAll('.A_test-button')

  questionNumber.innerHTML = `${stageCounter + 1}/${stages.length}`
  question.innerHTML = stages[stageCounter].questions

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[stageCounter].answers[i].text
    answers[i].dataset.count = stages[stageCounter].answers[i].count
  }
}

function clickButton() {
  const answers = document.querySelectorAll('.A_test-button')

  answers.forEach((button) => {
    button.addEventListener('click', () => {
      resultCounter += Number(button.dataset.count)
      console.log(resultCounter)
      setTimeout(() => {
        newStage()
      }, 500)
    })
  })
}

function newStage() {
  if (stageCounter + 1 < stages.length) {
    stageCounter++
    initTest()
  } else {
    showResult()
  }
}

function showResult() {
  const test = document.querySelector('.O_test-progress-container')
  const score = document.querySelector('.A_test-score')
  const text = document.querySelector('.A_test-text')
  const comment = document.querySelector('.A_test-comment')

  test.style.display = 'none'
  score.innerHTML = resultCounter

  switch (resultCounter) {
    case 5:
      text.innerHTML = results[0].text1
      comment.innerHTML = results[0].text2
      break
    case 4:
    case 3:
      text.innerHTML = results[1].text1
      comment.innerHTML = results[1].text2
      break
    case 2:
    case 1:
    case 0:
      text.innerHTML = results[2].text1
      comment.innerHTML = results[2].text2
      break
  }
}
