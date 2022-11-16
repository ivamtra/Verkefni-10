console.log('Hello')

const square = document.getElementById('square')

square.addEventListener('dragstart', e => {
    console.log(e)
    console.log(e.target)
})

square.addEventListener('drop', e => {
    console.log(e)
})

const canvas = document.getElementById('canvas')