
console.log('Hello')

const callButton = document.getElementById('callButton')

const onClick = async () => {
    const audio = new Audio("./public/heyheyhey (mp3cut.net).mp3")

    setTimeout(() => {
        audio.play()


    },500)

}

callButton.addEventListener('click', onClick)

