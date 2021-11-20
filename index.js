const btn = document.querySelector('.btn')
const input = document.querySelectorAll('input[type=number]')
const head = document.querySelector('.head')
const headtext = document.querySelector('.head__text')



document.querySelector(".input").addEventListener("keypress", function (evt) {
  if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
    evt.preventDefault();
  }
});


Array.from(input).forEach(input => {
    const min = +input.min;
    const max = +input.max;

    input.addEventListener('input', (e) => {
        const value = +input.value;
        if (value > max) { 
          input.value = max 
        }
        else if (value < min) { 
          input.value = min 
        }
    })
})


btn.addEventListener('click', function() {
  document.querySelectorAll('li').forEach((e)=> {
    e.remove()
  })
  let value = document.querySelector('.input').value
  function prime(newValue) {
    for(let i = 2; i <= newValue/2; i++){
      if(newValue%i === 0){
        document.querySelector("body").classList.remove('green')
        document.querySelector("body").classList.add('red')

        document.querySelector(".answer").innerHTML = "No 😔"

        return false
      }
    }
    document.querySelector("body").classList.remove('red')
    document.querySelector("body").classList.add('green')

    
    document.querySelector(".answer").innerHTML = "Yes 😎"

    return true
  }

  for(let i = 2; i <= value; i++) {
    if(prime(i)){
      const li = document.createElement("li")
      const valueList = document.querySelector('.list')
      valueList.appendChild(li)
      li.innerHTML = `${i}` + ",&nbsp;"
    }
  }
  const LIST = document.querySelectorAll('li')
  const LIST_LENGTH = LIST.length-1

  LIST[LIST_LENGTH].remove()

  LIST[LIST_LENGTH-1].innerHTML = LIST[LIST_LENGTH-1].innerText.replace(',','.')
  document.querySelector('.list-value').innerHTML = `There are ${document.querySelectorAll('li').length} prime numbers in your number:`
})


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  if(document.querySelectorAll('.head__text').length > 1) {
    document.querySelectorAll('.head__text')[0].remove()
  }

  const p = document.createElement("p")
  head.appendChild(p)
  p.classList.add('head__text')
  p.innerHTML = Math.floor(Math.random() * (max - min + 1) + min) + "&nbsp;?"
}

setInterval(function() { 
  getRandomIntInclusive(1, 999999)
  
  document.querySelectorAll('.head__text')[0].animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(999px)' }
  ], {
    duration: 1000
  })

  document.querySelectorAll('.head__text')[1].animate([
    { transform: 'translateX(-999px)' },
    { transform: 'translateX(0)' }
  ], {
    duration: 1000
  })
  
}, 2000)

