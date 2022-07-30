const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name:'chessburger',
        img: 'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name:'chessburger',
        img: 'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    }, 
    {
        name:'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random()) // compara 2 valori si le sorteaza

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []


function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'image/blank.pnk')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optioneOneId = cardsChosenIds[0]
    const optioneTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if(optioneOneId == optioneTwoId) {
        alert('You have clicked the same image!')
    }
 
    if(cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optioneOneId].setAttribute('src', 'images/white.png') 
        cards[optioneTwoId].setAttribute('src', 'images/white.png') 
        cards[optioneOneId].removeEventListener('click', flipCard)
        cards[optioneTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optioneOneId].setAttribute('src', 'images/blank.png') 
        cards[optioneTwoId].setAttribute('src', 'images/blank.png') 

    }
    cardsChosen = [] 
    cardsChosenIds = [] 

}

function flipCard(){ 
    const cardId =  this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)       
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }

}

console.log(grid)









