import './index.css'

const eventListeners = []

const messageGroups = [
  {
    questions: ['какое ты изобретение?'],
    answers: ['шаролет', 'лампышка', 'роликоласта']
  },
  {
    questions: ['сколько тебе лет'],
    answers: ['10', '18', '20']
  },
  {
    questions: ['почему ты интересуешься изобретениями?'],
    answers: ['это классно', 'я гик', 'мне пофиг']
  },
  {
    questions: ['я люблю кушать'],
    answers: ['картошку', 'мясо', 'котлеты']
  },
  {
    questions: ['меня зовут'],
    answers: ['даша', 'маша', 'костя']
  }
]

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function showQuestions() {
  const wrapper = document.createElement('div')
  wrapper.classList.add('W_test-header')
  document.body.appendChild(wrapper)

  let timeout = 2000
  const messageGroup = sample(messageGroups)

  messageGroup.questions.forEach((question, i) => {
    if (i == 0) {
      showQuestion(wrapper, question)
    } else if (i + 1 == messageGroup.questions.length) {
      setTimeout(() => {
        showQuestion(wrapper, question)
        showAnswers(messageGroup.answers)
      }, timeout)
    } else {
      setTimeout(() => {
        showQuestion(wrapper, question)
      }, timeout)

      // timeout = timeout + 2000;
      timeout += 2000
    }
  })
}

function showQuestion(wrapper, question) {
  removeListenerFromAnswer()

  const element = document.createElement('div')
  element.innerText = question
  element.classList.add('A_question-text')
  wrapper.appendChild(element)
}

function showAnswers(answers) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('C_test-variants')
  document.body.appendChild(wrapper)

  answers.forEach((answer, i) => {
    const element = document.createElement('div')
    element.innerText = answer
    element.classList.add('A_test-button')

    element.addEventListener('click', showQuestions)
    eventListeners.push(element)

    wrapper.appendChild(element)
  })
}

function removeListenerFromAnswer() {
  eventListeners.forEach((element, i) => {
    element.removeEventListener('click', showQuestions)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  showQuestions()
})
// class Quiz {
//   constructor(type, questions, results) {
//     this.type = 1

//     //Массив с вопросами
//     this.questions = questions

//     //Массив с возможными результатами
//     this.results = results

//     //Количество набранных очков
//     this.score = 0

//     //Номер результата из массива
//     this.result = 0

//     //Номер текущего вопроса
//     this.current = 0
//   }

//   Click(index) {
//     //Добавляем очки
//     let value = this.questions[this.current].Click(index)
//     this.score += value

//     let correct = -1

//     //Если было добавлено хотя бы одно очко, то считаем, что ответ верный
//     if (value >= 1) {
//       correct = index
//     } else {
//       //Иначе ищем, какой ответ может быть правильным
//       for (let i = 0; i < this.questions[this.current].answers.length; i++) {
//         if (this.questions[this.current].answers[i].value >= 1) {
//           correct = i
//           break
//         }
//       }
//     }

//     this.Next()

//     return correct
//   }

//   //Переход к следующему вопросу
//   Next() {
//     this.current++

//     if (this.current >= this.questions.length) {
//       this.End()
//     }
//   }

//   //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
//   End() {
//     for (let i = 0; i < this.results.length; i++) {
//       if (this.results[i].Check(this.score)) {
//         this.result = i
//       }
//     }
//   }
// }

// //Класс, представляющий вопрос
// class Question {
//   constructor(text, answers) {
//     this.text = text
//     this.answers = answers
//   }

//   Click(index) {
//     return this.answers[index].value
//   }
// }

// //Класс, представляющий ответ
// class Answer {
//   constructor(text, value) {
//     this.text = text
//     this.value = value
//   }
// }

// //Класс, представляющий результат
// class Result {
//   constructor(text, value) {
//     this.text = text
//     this.value = value
//   }

//   //Этот метод проверяет, достаточно ли очков набрал пользователь
//   Check(value) {
//     if (this.value <= value) {
//       return true
//     } else {
//       return false
//     }
//   }
// }
// const results = [
//   new Result('Вам многому нужно научиться', 0),
//   new Result('Вы уже неплохо разбираетесь', 1),
//   new Result('Ваш уровень выше среднего', 2)
// ]

// //Массив с вопросами
// const questions = [
//   new Question('example', [
//     new Answer('собака', 0),
//     new Answer('кошка', 1),
//     new Answer('крокодил', 2)
//   ]),
//   new Question('пример', [
//     new Answer('собака', 0),
//     new Answer('кошка', 1),
//     new Answer('крокодил', 2)
//   ]),
//   new Question('example', [
//     new Answer('собака', 0),
//     new Answer('кошка', 1),
//     new Answer('крокодил', 2)
//   ])
// ]

// //Сам тест
// const quiz = new Quiz(1, questions, results)

// Update()

// //Обновление теста
// function Update() {
//   // const headElem = document.querySelector('A_question-text')
//   // const buttonsElem = document.querySelector('A_test-button')
//   const headElem = document.getElementById('head')
//   const buttonsElem = document.getElementById('buttons')
//   const pagesElem = document.getElementById('pages')

//   //Проверяем, есть ли ещё вопросы
//   if (quiz.current < quiz.questions.length) {
//     //Если есть, меняем вопрос в заголовке
//     headElem.innerHTML = quiz.questions[quiz.current].text

//     //Удаляем старые варианты ответов
//     buttonsElem.innerHTML = ''

//     //Создаём кнопки для новых вариантов ответов
//     for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
//       let btn = document.createElement('A_test-button')
//       btn.className = 'A_test-button'

//       btn.innerHTML = quiz.questions[quiz.current].answers[i].text

//       btn.setAttribute('index', i)

//       buttonsElem.appendChild(btn)
//     }

//     //Выводим номер текущего вопроса

//     pagesElem.innerHTML = quiz.current + 1 + ' / ' + quiz.questions.length

//     //Вызываем функцию, которая прикрепит события к новым кнопкам
//     Init()
//   } else {
//     //Если это конец, то выводим результат
//     buttonsElem.innerHTML = ''
//     headElem.innerHTML = quiz.results[quiz.result].text
//     pagesElem.innerHTML = 'Очки: ' + quiz.score
//   }
// }

// function Init() {
//   //Находим все кнопки
//   let btns = document.getElementsByClassName('A_test-button')

//   for (let i = 0; i < btns.length; i++) {
//     //Прикрепляем событие для каждой отдельной кнопки
//     //При нажатии на кнопку будет вызываться функция Click()
//     btns[i].addEventListener('click', function (e) {
//       Click(e.target.getAttribute('index'))
//     })
//   }
// }

// function Click(index) {
//   //Получаем номер правильного ответа
//   let correct = quiz.Click(index)

//   //Находим все кнопки
//   let btns = document.getElementsByClassName('A_test-button')

//   //Делаем кнопки серыми
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].classList.add('Correct')
//   }

//   //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
//   if (quiz.type == 1) {
//     if (correct >= 0) {
//       btns[index].classList.add('Correct')
//     }

//     if (index != correct) {
//       btns[index].classList.add('Wrong')
//     }
//   } else {
//     //Иначе просто подсвечиваем зелёным ответ пользователя
//     btns[index].classList.add('Correct')
//   }

//   //Ждём секунду и обновляем тест
//   setTimeout(Update, 1000)
// }

// $(document).ready(function () {
//   let count = 0

//   //один балл

//   $('.First-One').click(function () {
//     setTimeout(function () {
//       $('.One').css('display', 'none')
//     }, 800)

//     count += 1
//   })
//   $('.First-Two').click(function () {
//     $('.Two').css('display', 'none')
//     count += 1
//   })
//   $('.First-Three').click(function () {
//     $('.Three').css('display', 'none')
//     count += 1
//   })
//   $('.First-Four').click(function () {
//     $('.Four').css('display', 'none')
//     count += 1
//   })
//   $('.First-Five').click(function () {
//     $('.Five').css('display', 'none')
//     count += 1
//   })

//   //два балла

//   $('.Second-One').click(function () {
//     $('.One').css('display', 'none')
//     count += 2
//   })
//   $('.Second-Two').click(function () {
//     $('.Two').css('display', 'none')
//     count += 2
//   })
//   $('.Second-Three').click(function () {
//     $('.Three').css('display', 'none')
//     count += 2
//   })
//   $('.Second-Four').click(function () {
//     $('.Four').css('display', 'none')
//     count += 2
//   })
//   $('.Second-Five').click(function () {
//     $('.Five').css('display', 'none')
//     count += 2
//   })

//   //три балла

//   $('.Third-One').click(function () {
//     $('.One').css('display', 'none')
//     count += 3
//   })
//   $('.Third-Two').click(function () {
//     $('.Two').css('display', 'none')
//     count += 3
//   })
//   $('.Third-Three').click(function () {
//     $('.Three').css('display', 'none')
//     count += 3
//   })
//   $('.Third-Four').click(function () {
//     $('.Four').css('display', 'none')
//     count += 3
//   })
//   $('.Third-Five').click(function () {
//     $('.Five').css('display', 'none')
//     count += 3
//   })
//   if (count < 10) {
//     $('.Result-One').css('display', 'none')
//   }
// })
// $(document).ready(function () {
//   $('.star_green').click(function () {
//     $('.image_green').css('opacity', '1')
//     $('.image_blue').css('opacity', '0')
//     $('.image_yellow').css('opacity', '0')
//     $('.image_red').css('opacity', '0')
//   })
//   $('.star_red').click(function () {
//     $('.image_red').css('opacity', '1')
//     $('.image_blue').css('opacity', '0')
//     $('.image_yellow').css('opacity', '0')
//     $('.image_hreen').css('opacity', '0')
//   })
//   $('.star_blue').click(function () {
//     $('.image_blue').css('opacity', '1')
//     $('.image_green').css('opacity', '0')
//     $('.image_yellow').css('opacity', '0')
//     $('.image_red').css('opacity', '0')
//   })
//   $('.star_yellow').click(function () {
//     $('.image_yellow').css('opacity', '1')
//     $('.image_blue').css('opacity', '0')
//     $('.image_green').css('opacity', '0')
//     $('.image_red').css('opacity', '0')
//   })

//   var form = document.getElementById('my-form')

//   async function handleSubmit(event) {
//     event.preventDefault()
//     var status = document.getElementById('my-form-status')
//     var data = new FormData(event.target)
//     fetch(event.target.action, {
//       method: form.method,
//       body: data,
//       headers: {
//         Accept: 'application/json'
//       }
//     })
//       .then((response) => {
//         if (response.ok) {
//           status.innerHTML = '⠀'
//           form.reset()
//         } else {
//           response.json().then((data) => {
//             if (Object.hasOwn(data, 'errors')) {
//               status.innerHTML = data['errors']
//                 .map((error) => error['message'])
//                 .join(', ')
//             } else {
//               status.innerHTML = '⠀'
//             }
//           })
//         }
//       })
//       .catch((error) => {
//         status.innerHTML = '⠀'
//       })
//   }
//   form.addEventListener('submit', handleSubmit)
// })
