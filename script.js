const data = [{
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


  console.log(index)


  img.style.backgroundImage = data[index].img
  area.textContent = data[index].area
  time.textContent = data[index].time
  cost.textContent = data[index].cost
  city.textContent = data[index].city

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