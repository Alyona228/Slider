const data = [{
    img: 'url("./images/image2.1.jpg")',
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
    button: 'Rostov-on-Don, Admiral',
  },
  {
    img: 'url("./images/image3.jpg")',
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
    button: 'Sochi Thieves',
  },
  {
    img: 'url("./images/image2.jpg")',
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
    button: 'Rostov-on-Don Patriotic',
  },
]

let currentIndex = 0

function setCurrentParams(index) {
  const img = document.querySelector('.page2__images')
  const city = document.getElementById('city')
  const area = document.getElementById('area')
  const time = document.getElementById('time')
  const cost = document.getElementById('cost')
  const button = document.querySelector('.page2__button')


  img.style.backgroundImage = data[index].img
  area.textContent = data[index].area
  time.textContent = data[index].time
  cost.textContent = data[index].cost
  city.textContent = data[index].city
  button.style.background = data[index].button

  currentIndex = index
}

const arrowLeft = document.querySelector('.page2__arrow--left')
arrowLeft.addEventListener('mousedown', e => {
  if (currentIndex < data.length - 1) {
    setCurrentParams(currentIndex + 1)
  } else {
    setCurrentParams(0)
  }
})



const arrowRight = document.querySelector('.page2__arrow--right')
arrowRight.addEventListener('mousedown', e => {
  if (currentIndex == 0) {
    setCurrentParams(data.length - 1)
  } else {
    setCurrentParams(currentIndex - 1)
  }
})