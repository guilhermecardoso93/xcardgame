document.addEventListener('DOMContentLoaded', () => {
  //Criation of Cards
  const cardArray = [
    {
      name: 'storm',
      img: 'images/1.png'
    },
    {
      name: 'storm',
      img: 'images/1.png'
    },
    {
      name: 'jeangrey',
      img: './images/2.png'
    },
    {
      name: 'jeangrey',
      img: './images/2.png'
    },
    {
      name: 'wolverine',
      img: './images/3.png'
    },
    {
      name: 'wolverine',
      img: './images/3.png'
    },
    {
      name: 'ciplope',
      img: './images/4.png'
    },
    {
      name: 'ciclope',
      img: './images/4.png'
    },
    {
      name: 'psylocke',
      img: './images/5.png'
    },
    {
      name: 'psylocke',
      img: './images/5.png'
    },
    {
      name: 'emma',
      img: './images/6.png'
    },
    {
      name: 'emma',
      img: './images/6.png'
    },
    {
      name: 'colossus',
      img: './images/7.png'
    },
    {
      name: 'colossus',
      img: './images/7.png'
    },
    {
      name: 'gambit',
      img: './images/8.png'
    },
    {
      name: 'gambit',
      img: './images/8.png'
    },
    {
      name: 'xavier',
      img: './images/9.png'
    },
    {
      name: 'xavier',
      img: './images/9.png'
    },
    {
      name: 'wanda',
      img: './images/10.png'
    },
    {
      name: 'wanda',
      img: './images/10.png'
    },
    {
      name: 'magia',
      img: './images/11.png'
    },
    {
      name: 'magia',
      img: './images/11.png'
    },
    {
      name: 'vampira',
      img: './images/12.png'
    },
    {
      name: 'vampira',
      img: './images/12.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')

	const resultDisplay = document.querySelector('#result')
	var cardsChosen = []
	var cardsChosenId = []
	var pairs = []

  //Create Board Game
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
			card.setAttribute('src', 'images/card1.png')
			card.setAttribute('data-id',i)
			card.addEventListener('click',flipCard)
			grid.appendChild(card)
    }
  }

  //Ckeking pairs

  function checkforMatch() {
    var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]

    //Double clink in the same card
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/card1.png')
      cards[optionTwoId].setAttribute('src', 'images/card1.png')
      alert('Você clicou na mesma imagem')
    } else if (cardsChosen[0] == cardsChosen[1]) {
      // Made a pair
      alert('Você conseguiu um par!')
      cards[optionOneId].setAttribute('src', 'images/par.png')
      cards[optionTwoId].setAttribute('src', 'images/par.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      pairs.push(cardsChosen)
    } else {
      //Not a pair
      cards[optionOneId].setAttribute('src', 'images/card1.png')
      cards[optionTwoId].setAttribute('src', 'images/card1.png')
      alert('Jogue Novamente')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = pairs.length

    if (pairs.length == cardArray.length / 2) {
      resultDisplay.textContent = 'Parabéns! Você encontrou todos os pares!'
    }
  }

  //Flip cards
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2) {
      setTimeout(checkforMatch, 500)
    }
  }

  createBoard()
})
