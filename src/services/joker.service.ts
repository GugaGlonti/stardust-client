export class JokerService {
  static getSuit(id: string) {
    return id.split('')[0];
  }

  static getNumber(id: string) {
    return parseInt(id.split('')[1]);
  }

  static getCardName(id: string) {
    if (id === '__') return 'Flipped Card';
    if (id === '_0' || id === '_1') return 'Joker';

    const number = this.getNumber(id);
    let computedNumber;

    // prettier-ignore
    switch (number) {
      case 11:  computedNumber = 'Jack';  break;
      case 12:  computedNumber = 'Queen'; break;
      case 13:  computedNumber = 'King';  break;
      case 14:  computedNumber = 'Ace';   break;
      default:    computedNumber = number;
    }

    const suit = this.getSuit(id);
    let computedSuit;

    // prettier-ignore
    switch (suit) {
      case 'c': computedSuit = 'Clubs';     break;
      case 'd': computedSuit = 'Diamonds';  break;
      case 'h': computedSuit = 'Hearts';    break;
      case 's': computedSuit = 'Spades';    break;
      default:  computedSuit = 'INVALID CARD';
    }

    return `${computedNumber} of ${computedSuit} `;
  }
}
