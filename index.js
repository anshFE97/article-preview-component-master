const back = document.querySelector('.back')
const front = document.querySelector('.front')
const visible = document.querySelector('.appear')
const hidden =document.querySelector('.hidden')
const newButton = document.querySelector('.new-button')

function show() {
    back.classList.remove('active')
    front.classList.add('active')
}

visible.addEventListener('click', show)

function hide() {
    front.classList.remove('active')
    back.classList.add('active')
}

hidden.addEventListener('click', hide)


function option() {
    back.classList.toggle('active')
    
}


newButton.addEventListener('click', option)