import './index.css'
$(document).ready(function () {
  let count = 0
  setTimeout(load, 50)

  //один балл

  $('.First-One').click(function load() {
    $('.One').css('display', 'none')
    count += 1
  })
  $('.First-Two').click(function () {
    $('.Two').css('display', 'none')
    count += 1
  })
  $('.First-Three').click(function () {
    $('.Three').css('display', 'none')
    count += 1
  })
  $('.First-Four').click(function () {
    $('.Four').css('display', 'none')
    count += 1
  })
  $('.First-Five').click(function () {
    $('.Five').css('display', 'none')
    count += 1
  })

  //два балла

  $('.Second-One').click(function () {
    $('.One').css('display', 'none')
    count += 2
  })
  $('.Second-Two').click(function () {
    $('.Two').css('display', 'none')
    count += 2
  })
  $('.Second-Three').click(function () {
    $('.Three').css('display', 'none')
    count += 2
  })
  $('.Second-Four').click(function () {
    $('.Four').css('display', 'none')
    count += 2
  })
  $('.Second-Five').click(function () {
    $('.Five').css('display', 'none')
    count += 2
  })

  //три балла

  $('.Third-One').click(function () {
    $('.One').css('display', 'none')
    count += 3
  })
  $('.Third-Two').click(function () {
    $('.Two').css('display', 'none')
    count += 3
  })
  $('.Third-Three').click(function () {
    $('.Three').css('display', 'none')
    count += 3
  })
  $('.Third-Four').click(function () {
    $('.Four').css('display', 'none')
    count += 3
  })
  $('.Third-Five').click(function () {
    $('.Five').css('display', 'none')
    count += 3
  })
  if (count < 10) {
    $('.Result-One').css('display', 'none')
  }
})
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
