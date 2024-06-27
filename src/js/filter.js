import '../index.css'

//фильтрация по тегам
const multiSelectOptions = []

console.log(multiSelectOptions)

function updateSelectData(option) {
  multiSelectOptions.forEach((o) => {
    if (o.text === option.text) {
      o.active = !option.active
    }
  })
}

function updateSelectOptionList() {
  const optionList = document.querySelector('.Head-tags')

  multiSelectOptions.forEach((option) => {
    const { text, active } = option
    const listItem = document.createElement('button')
    if (!active) {
      listItem.classList.add('Head-tag', 'A_selectInput', 'A_tag')
      listItem.innerText = text

      listItem.addEventListener('click', () => {
        // const listItems = document.getElementsByClassName('Head-tag')
        // for (let index = 0; index < listItems.length; index++) {
        //   const element = listItems[index]
        //   element.classList.remove('active')
        // }
        listItem.classList.add('active')
        updateSelectData(option)
        updateContent()
        console.log(option)
      })

      optionList.appendChild(listItem)
    }
  })
}

function initMultiSelect() {
  //добавляем инфу в тег
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
  })
  console.log(selectedTags)

  for (let i = 0; i < contentCards.length; i++) {
    const contentCard = contentCards[i]
    const contentCardTags = contentCard.dataset.tags.split(',')
    const transformedTags = []

    contentCardTags.forEach((tag) => {
      transformedTags.push(tag.toLowerCase())
    })

    contentCard.classList.remove('hidden')

    selectedTags.forEach((tag) => {
      if (!transformedTags.includes(tag)) {
        contentCard.classList.add('hidden')
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getContentCardDataTags()
  initMultiSelect()
  updateSelectOptionList()

  // initSelect()
})
