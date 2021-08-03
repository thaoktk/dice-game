
const diceImg = [
    {
        id: 1,
        img: './assets/img/dice1.png'
    },
    {
        id: 2,
        img: './assets/img/dice2.png'
    },
    {
        id: 3,
        img: './assets/img/dice3.png'
    },
    {
        id: 4,
        img: './assets/img/dice4.png'
    },
    {
        id: 5,
        img: './assets/img/dice5.png'
    },
    {
        id: 6,
        img: './assets/img/dice6.png'
    }
]

const img_1 = document.querySelectorAll('img')[0]
const img_2 = document.querySelectorAll('img')[1]
const winner = document.querySelector('.container h1')

setInterval(() => {
    var randomNumber1 = Math.floor(Math.random() * 6)
    var randomNumber2 = Math.floor(Math.random() * 6)

    img_1.src = diceImg[randomNumber1].img;
    img_2.src = diceImg[randomNumber2].img;

    if (randomNumber1 > randomNumber2) {
        winner.innerText = '🚩Player 1 win! ';
    } else if (randomNumber1 < randomNumber2) {
        winner.innerText = 'Player 2 win!🚩';
    } else {
        winner.innerText = 'Draw!'
    }
}, 5000)



// cách 2
/**
 * var randomNumber1 = Math.floor(Math.random() * 6) + 1
 * var randomNumber2 = Math.floor(Math.random() * 6) + 1
 * 
 * var randomDiceImg = 'dice' + randomNumber1 + '.png'
 * var randomImgSource = './assets/img/' + randomDiceImg
 * 
 * const img_1 = document.querySelectorAll('img')[0]
 * 
 * img.setAttribute('src', randomImgSource)
 */


