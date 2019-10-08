const colors = ['spades', 'hearts', 'diamonds', 'clubs'];
const names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

export function createDeck() {
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

export function shuffleDeck(deck) {
    deck.sort(() => Math.random() - Math.random());
}

export function drawnCards(numberOfCardsToDrawn, deck) {
    return numberOfCardsToDrawn <= deck.length ? deck.splice(0, numberOfCardsToDrawn) : undefined
}

export function sortDeckByValue(deck) {
    deck.sort((card1, card2) => card1.value - card2.value);
}

export function sortDeckByColor(deck) {
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

export function doubleSort(deck) {
    let result = [];
    createDeck.colors.forEach(color => {
        singleColorDeck = deck.filter(card => card.color === color);
        sortDeckByValue(singleColorDeck);
        result = result.concat(singleColorDeck);
    });
    return result;
}
