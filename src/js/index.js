import '../index.css'

document.addEventListener('DOMContentLoaded', () => {
  popupSequence()
})

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
