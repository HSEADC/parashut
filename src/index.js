import './index.css'

//Класс, который представляет сам тест
class Quiz {
  constructor(type, questions, results) {
    //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
    this.type = 1

    //Массив с вопросами
    this.questions = questions

    //Массив с возможными результатами
    this.results = results

    //Количество набранных очков
    this.score = 0

    //Номер результата из массива
    this.result = 0

    //Номер текущего вопроса
    this.current = 0
  }

  Click(index) {
    //Добавляем очки
    let value = this.questions[this.current].Click(index)
    this.score += value

    let correct = -1

    //Если было добавлено хотя бы одно очко, то считаем, что ответ верный
    if (value >= 1) {
      correct = index
    } else {
      //Иначе ищем, какой ответ может быть правильным
      for (let i = 0; i < this.questions[this.current].answers.length; i++) {
        if (this.questions[this.current].answers[i].value >= 1) {
          correct = i
          break
        }
      }
    }

    this.Next()

    return correct
  }

  //Переход к следующему вопросу
  Next() {
    this.current++

    if (this.current >= this.questions.length) {
      this.End()
    }
  }

  //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
  End() {
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].Check(this.score)) {
        this.result = i
      }
    }
  }
}

//Класс, представляющий вопрос
class Question {
  constructor(text, answers) {
    this.text = text
    this.answers = answers
  }

  Click(index) {
    return this.answers[index].value
  }
}

//Класс, представляющий ответ
class Answer {
  constructor(text, value) {
    this.text = text
    this.value = value
  }
}

//Класс, представляющий результат
class Result {
  constructor(text, value) {
    this.text = text
    this.value = value
  }

  //Этот метод проверяет, достаточно ли очков набрал пользователь
  Check(value) {
    if (this.value <= value) {
      return true
    } else {
      return false
    }
  }
}
const results = [
  new Result('Вам многому нужно научиться', 0),
  new Result('Вы уже неплохо разбираетесь', 1),
  new Result('Ваш уровень выше среднего', 2)
]

//Массив с вопросами
const questions = [
  new Question('example', [
    new Answer('собака', 0),
    new Answer('кошка', 1),
    new Answer('крокодил', 2)
  ]),
  new Question('пример', [
    new Answer('собака', 0),
    new Answer('кошка', 1),
    new Answer('крокодил', 2)
  ]),
  new Question('example', [
    new Answer('собака', 0),
    new Answer('кошка', 1),
    new Answer('крокодил', 2)
  ])
]

//Сам тест
const quiz = new Quiz(1, questions, results)

Update()

//Обновление теста
function Update() {
  // const headElem = document.querySelector('A_question-text')
  // const buttonsElem = document.querySelector('A_test-button')
  const headElem = document.getElementById('head')
  const buttonsElem = document.getElementById('buttons')
  const pagesElem = document.getElementById('pages')

  //Проверяем, есть ли ещё вопросы
  if (quiz.current < quiz.questions.length) {
    //Если есть, меняем вопрос в заголовке
    headElem.innerHTML = quiz.questions[quiz.current].text

    //Удаляем старые варианты ответов
    buttonsElem.innerHTML = ''

    //Создаём кнопки для новых вариантов ответов
    for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
      let btn = document.createElement('A_test-button')
      btn.className = 'A_test-button'

      btn.innerHTML = quiz.questions[quiz.current].answers[i].text

      btn.setAttribute('index', i)

      buttonsElem.appendChild(btn)
    }

    //Выводим номер текущего вопроса

    pagesElem.innerHTML = quiz.current + 1 + ' / ' + quiz.questions.length

    //Вызываем функцию, которая прикрепит события к новым кнопкам
    Init()
  } else {
    //Если это конец, то выводим результат
    buttonsElem.innerHTML = ''
    headElem.innerHTML = quiz.results[quiz.result].text
    pagesElem.innerHTML = 'Очки: ' + quiz.score
  }
}

function Init() {
  //Находим все кнопки
  let btns = document.getElementsByClassName('A_test-button')

  for (let i = 0; i < btns.length; i++) {
    //Прикрепляем событие для каждой отдельной кнопки
    //При нажатии на кнопку будет вызываться функция Click()
    btns[i].addEventListener('click', function (e) {
      Click(e.target.getAttribute('index'))
    })
  }
}

function Click(index) {
  //Получаем номер правильного ответа
  let correct = quiz.Click(index)

  //Находим все кнопки
  let btns = document.getElementsByClassName('A_test-button')

  //Делаем кнопки серыми
  for (let i = 0; i < btns.length; i++) {
    btns[i].className = 'A_test-button'
  }

  //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
  if (quiz.type == 1) {
    if (correct >= 0) {
      btns[correct].className = 'A_test-button Correct'
    }

    if (index != correct) {
      btns[index].className = 'A_test-button Wrong'
    }
  } else {
    //Иначе просто подсвечиваем зелёным ответ пользователя
    btns[index].className = 'A_test-button Correct'
  }

  //Ждём секунду и обновляем тест
  setTimeout(Update, 1000)
}

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
