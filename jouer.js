import * as deckOperations from './cards';

rami = deckOperations.createDeck();
deckOperations.shuffleDeck(rami);
combinaison = deckOperations.drawnCards(8, rami);
deckOperations.doubleSort(combinaison);