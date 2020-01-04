const data = [
  {
    img: 'url("./images/image2.1.jpg")',
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
  },
  {
    img: 'url("./images/image3.jpg")',
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
  },
  {
    img: 'url("./images/image2.jpg")',
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
  },
]

let currentIndex = 0

const buttons = document.getElementsByClassName('page2__button')
const circle = document.getElementsByClassName('page2__circle')

function setCurrentParams(index) {
  const img = document.querySelector('.page2__images')
  const city = document.getElementById('city')
  const area = document.getElementById('area')
  const time = document.getElementById('time')
  const cost = document.getElementById('cost')

  for (let i = 0; i < data.length; i++) {
    buttons[i].classList.remove('page2__button--current')
    circle[i].classList.remove('page2__circle--current')
  }
  buttons[index].classList.add('page2__button--current')
  circle[index].classList.add('page2__circle--current')

  img.style.backgroundImage = data[index].img
  area.textContent = data[index].area
  time.textContent = data[index].time
  cost.textContent = data[index].cost
  city.textContent = data[index].city

  currentIndex = index
}
const arrowLeft = document.querySelector('.page2__arrow--left')
arrowLeft.addEventListener('mousedown', e => {
  if (currentIndex == 0) {
    setCurrentParams(data.length - 1)
  } else {
    setCurrentParams(currentIndex - 1)
  }
})

const arrowRight = document.querySelector('.page2__arrow--right')
arrowRight.addEventListener('mousedown', e => {
  if (currentIndex < data.length - 1) {
    setCurrentParams(currentIndex + 1)
  } else {
    setCurrentParams(0)
  }
})

const fistCircle = document.querySelectorAll('.page2__circle')[0]
console.log(fistCircle)
fistCircle.addEventListener('mousedown', function() {
  setCurrentParams(0)
})

const secondCircle = document.querySelectorAll('.page2__circle')[1]
console.log(secondCircle)
secondCircle.addEventListener('mousedown', function() {
  setCurrentParams(1)
})
const thirdCircle = document.querySelectorAll('.page2__circle')[2]
console.log(thirdCircle)
thirdCircle.addEventListener('mousedown', function() {
  setCurrentParams(2)
})

const firstButton = document.querySelectorAll('.page2__button')[0]
firstButton.addEventListener('mousedown', function() {
  setCurrentParams(0)
})

const secondButton = document.querySelectorAll('.page2__button')[1]
secondButton.addEventListener('mousedown', function() {
  setCurrentParams(1)
})

const thirdButton = document.querySelectorAll('.page2__button')[2]
thirdButton.addEventListener('mousedown', function() {
  setCurrentParams(2)
})

/* Именить порядок изменения слайдов при нажатии на стрелочки 
вправо - 1 - 2 - 3 - 1
влево - 1 - 3 - 2 - 1
*/

/*
найти круги по классу
вывести в консоль все круги
взять один круг
повесить на него слушатель события
addEventListener
первый аргумент - название события
второй аргумент - функция, внутри функции то, что должно происходить
проверить
повесить слушатели события на остальные круги
*/
