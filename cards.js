function createDeck(){
    const colors = ['spades', 'hearts', 'diamonds', 'clubs'];
    const names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    let deck = [];
    colors.forEach(color => {
        names.forEach((name, index) => {
            let card = {
                name: name,
                color: color,
                value: index
            }
            deck.push(card)
        });
    });
    return deck;
}

function shuffleDeck(deck){
    deck.sort(() => Math.random() - Math.random());
}

function drawnCards(numberOfCardsToDrawn, deck){
    return numberOfCardsToDrawn <= deck.length ? deck.slice(0, numberOfCardsToDrawn) : undefined
}

function sortDeckByValue(deck) {
    deck.sort((card1, card2) => card1.value - card2.value);
}

function sortDeckByColor(deck) {
    deck.sort((card1, card2) => {
            if (card1.color < card2.color) {
                return -1;
            }
            if (card1.color > card2.color) {
                return 1;
            }
            return 0;
        }
    );
}