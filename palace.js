const pile = [];
let counter = 1;
var hidden;


class Card {
  constructor (suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }

  clearPile () {
    return pile.length = 0;
  }

   select () {
    if (this.value === 7) counter = 1;
    if (this.value === 2) counter = 2;
    counter = this.value;
  }

//   getArea () {
//     return Math.PI * (this.radius ** 2);
//   }

//   changeColor (newColor) {
//     return this.color = newColor;
//   }
}

class Player {
  constructor (name, order) {
    this.name = name;
    this.order = order;
    this.hand = [];
  }

  clearPile () {
    return pile.length = 0;
  }

   select () {
    if (this.value === 7) counter = 1;
    if (this.value === 2) counter = 2;
    counter = this.value;
  }

//   getArea () {
//     return Math.PI * (this.radius ** 2);
//   }

//   changeColor (newColor) {
//     return this.color = newColor;
//   }
}


const twoSpades = new Card ('spades', 'two', 2);
const threeSpades = new Card ('spades', 'three', 3);
const fourSpades = new Card ('spades', 'four', 4);
const fiveSpades = new Card ('spades', 'five', 5);
const sixSpades = new Card ('spades', 'six', 6);
const sevenSpades = new Card ('spades', 'seven', 7);
const eightSpades = new Card ('spades', 'eight', 8);
const nineSpades = new Card ('spades', 'nine', 9);
const tenSpades = new Card ('spades', 'ten', 10);
const jackSpades = new Card ('spades', 'jack', 11);
const queenSpades = new Card ('spades', 'queen', 12);
const kingSpades= new Card ('spades', 'king', 13);
const aceSpades = new Card ('spades', 'ace', 14);
const twoHearts = new Card ('hearts', 'two', 2);
const threeHearts = new Card ('hearts', 'three', 3);
const fourHearts = new Card ('hearts', 'four', 4);
const fiveHearts = new Card ('hearts', 'five', 5);
const sixHearts = new Card ('hearts', 'six', 6);
const sevenHearts = new Card ('hearts', 'seven', 7);
const eightHearts = new Card ('hearts', 'eight', 8);
const nineHearts = new Card ('hearts', 'nine', 9);
const tenHearts = new Card ('hearts', 'ten', 10);
const jackHearts = new Card ('hearts', 'jack', 11);
const queenHearts = new Card ('hearts', 'queen', 12);
const kingHearts = new Card ('hearts', 'king', 13);
const aceHearts = new Card ('hearts', 'ace', 14);
const twoDiamonds = new Card ('diamonds', 'two', 2);
const threeDiamonds = new Card ('diamonds', 'three', 3);
const fourDiamonds = new Card ('diamonds', 'four', 4);
const fiveDiamonds = new Card ('diamonds', 'five', 5);
const sixDiamonds = new Card ('diamonds', 'six', 6);
const sevenDiamonds = new Card ('diamonds', 'seven', 7);
const eightDiamonds = new Card ('diamonds', 'eight', 8);
const nineDiamonds = new Card ('diamonds', 'nine', 9);
const tenDiamonds = new Card ('diamonds', 'ten', 10);
const jackDiamonds = new Card ('diamonds', 'jack', 11);
const queenDiamonds = new Card ('diamonds', 'queen', 12);
const kingDiamonds= new Card ('diamonds', 'king', 13);
const aceDiamonds = new Card ('diamonds', 'ace', 14);
const twoClubs = new Card ('clubs', 'two', 2);
const threeClubs = new Card ('clubs', 'three', 3);
const fourClubs = new Card ('clubs', 'four', 4);
const fiveClubs = new Card ('clubs', 'five', 5);
const sixClubs = new Card ('clubs', 'six', 6);
const sevenClubs = new Card ('clubs', 'seven', 7);
const eightClubs = new Card ('clubs', 'eight', 8);
const nineClubs = new Card ('clubs', 'nine', 9);
const tenClubs = new Card ('clubs', 'ten', 10);
const jackClubs = new Card ('clubs', 'jack', 11);
const queenClubs = new Card ('clubs', 'queen', 12);
const kingClubs = new Card ('clubs', 'king', 13);
const aceClubs = new Card ('clubs', 'ace', 14);
const deck = [twoSpades, threeSpades, fourSpades, fiveSpades, sixSpades, sevenSpades, eightSpades, nineSpades, tenSpades, jackSpades, queenSpades, kingSpades, aceSpades, twoHearts, threeHearts, fourHearts, fiveHearts, sixHearts, sevenHearts, eightHearts, nineHearts, tenHearts, jackHearts, queenHearts, kingHearts, aceHearts, twoDiamonds, threeDiamonds, fourDiamonds, fiveDiamonds, sixDiamonds, sevenDiamonds, eightDiamonds, nineDiamonds, tenDiamonds, jackDiamonds, queenDiamonds, kingDiamonds, aceDiamonds, twoClubs, threeClubs, fourClubs, fiveClubs, sixClubs, sevenClubs, eightClubs, nineClubs, tenClubs, jackClubs, queenClubs, kingClubs, aceClubs]

function shuffle(array) {
  const newArray = [...array]
  const length = newArray.length

  for (let start = 0; start < length; start++) {
    const randomPosition = Math.floor((newArray.length - start) * Math.random())
    const randomItem = newArray.splice(randomPosition, 1)

    newArray.push(...randomItem)
  }

  return newArray
}
console.log(shuffle(deck))


window.onload = function() {
  const newDeck = shuffle(deck);
  startGame();
}

function StartGame () {
  
}






