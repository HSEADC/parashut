import '../index.css'

//для поиска карточек
function popupSequence() {
  const popups = document.querySelectorAll('.popup') //находим все карточки с классом

  popups.forEach((popup, index) => {
    // const popup = document.querySelector('.popup')
    positionPopup(popup) //запускаем функция для позиционирования карточек
  })
}

//возвращает рандомное число
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

//для позиционирования карточек
function positionPopup(popup) {
  let section = document.querySelector('#cover') //находим по id блок с обложкой страницы
  const screenWidth = section.getBoundingClientRect().width //смотрим его ширину
  const screenHeight = section.getBoundingClientRect().height //и высоту
  const { width, height } = popup.getBoundingClientRect() //смотрим ширину и высоту карточки

  const widthRange = screenWidth - width //считаем макисмальную ширину для карточки
  const heightRange = screenHeight - height //считаем максимальную высоту для карточки

  popup.style.top = getRandomArbitrary(0, heightRange) + 'px' //позиционирем по top
  popup.style.left = getRandomArbitrary(0, widthRange) + 'px' //позиционируем по left
}

//фильтрация по тегам
const multiSelectOptions = []

console.log(multiSelectOptions)

//вывод тегов в список

function initSelect() {
  const optionList = document.querySelector('.Head-tags')
  const selectInput = document.querySelector('.A_')

  multiSelectOptions.forEach((option) => {
    const listItem = document.createElement('button')
    listItem.classList.add('Head-tag', 'A_selectInput', 'A_tag')
    listItem.innerText = option //он кладет внутрь данные массива -- два объекта. но я хз как положить туда текст
    // tagSelect.addEventListener('click', () => {})

    listItem.addEventListener('click', () => {
      const listItems = document.getElementsByClassName('Head-tag')
      for (let index = 0; index < listItems.length; index++) {
        const element = listItems[index]
        element.classList.remove('active')
      }
      listItem.classList.add('active')
      // selectInput.value = option
      // console.log(listItems)
    })
    optionList.appendChild(listItem)
  })
}

function initMultiSelect() {
  getContentCardDataTags().forEach((tag) => {
    multiSelectOptions.push({
      text: tag,
      active: false
    })
  })
}

//код для фильтрации по тегу
function getContentCardDataTags() {
  const contentCards = document.getElementsByClassName('O_article-card')
  const tags = []
  const transformedTags = []
  for (let i = 0; i < contentCards.length; i++) {
    const contentCard = contentCards[i]
    const contentCardTags = contentCard.dataset.tags.split(',')
    tags.push(...contentCardTags)
  }
  tags.forEach((tag) => {
    transformedTags.push(tag.toLowerCase())
  })
  const uniqueTags = [...new Set(transformedTags)]
  // console.log(tags, uniqueTags)
  return uniqueTags
}

//код непосредственно фильтрации
function updateContent() {
  const contentCards = document.querySelectorAll('.O_article-card')
  const selectedTags = []

  multiSelectOptions.forEach((obj) => {
    if (obj.active) {
      selectedTags.push(obj.text)
    }
    console.log(selectedTags)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  popupSequence()
  getContentCardDataTags()
  initMultiSelect()
  initSelect()
})
//фильтрация по тегам

// let filterlist = document.querySelector('#headTags')
// // Получение каждого тега, т.е li элемент
// let filterItem = filterlist.childNodes
// // Получение всех статей
// let newsItem = document.querySelectorAll('.O_article-card')
// // Получение обёртки статей
// // let newsWrapper = document.querySelector('.C_articles')
// filterItem.forEach((event) => {
//   event.addEventListener('click', () => {
//     event.classList.toggle('active')
//     if (event.classList.contains('active')) {
//       // Получение атрибута data tag у li списка
//       let itemAttr =
// event.getAttribute('data-tag')
//       // Поиск статей с таким же классом
//       let resultItem = document.querySelectorAll(`.${itemAttr}`)
//       resultItem.forEach((elem) => {
//         newsItem.forEach((e) => {
//           // Скрываем все статьи
//           e.style.display = 'none'
//           // Нужную статью показываем
//           elem.style.display = 'block'
//         })
//       })
//     } else {
//       newsItem.forEach((e) => {
//         // Убираем все статьи
//         e.style.display = 'none'
//       })
//     }
//   })
// })
