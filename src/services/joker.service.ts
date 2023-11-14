import { CardID } from '../assets/cards/__card.dictionary';
import { CreateJokerGameDto } from '../types/CreateJokerGameDto';
import SocketService, { socket } from './socket.service';

import axiosService from './axios.instance';
import { JokerGame } from '../modules/Joker/JokerGame';

const url = 'http://localhost:3000/api/joker/';

export default class JokerService {
  static async getGame() {
    try {
      const gameID = localStorage.getItem('joker-gameID') as string;
      if (!gameID) return null;
      return (await axiosService.get(url + 'game', { params: { gameID } })).data as JokerGame;
    } catch (error) {
      return null;
    }
  }

  static async startGame(dto: CreateJokerGameDto) {
    try {
      localStorage.setItem('joker-status', 'inGame');
      socket.emit('joker-start', dto);
    } catch (error) {}
  }

  static async createGame(username: string) {
    try {
      const gameID = Date.now().toString();
      await SocketService.createJoker(gameID, username);
      localStorage.setItem('joker-gameID', gameID);
      localStorage.setItem('joker-status', 'lobby');
      return gameID;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async joinLobby(gameID: string, username: string) {
    try {
      await SocketService.joinJoker(gameID, username);
      localStorage.setItem('joker-gameID', gameID);
      localStorage.setItem('joker-status', 'lobby');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async leaveLobby(username: string) {
    try {
      const gameID = localStorage.getItem('joker-gameID') as string;
      await SocketService.leaveJoker(gameID, username);
      localStorage.removeItem('joker-gameID');
      localStorage.removeItem('joker-status');
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async playCard(cardID: CardID, username: string) {
    try {
      const gameID = localStorage.getItem('joker-gameID') as string;
      await SocketService.playCard(gameID, cardID, username);
    } catch (error) {
      console.error(error);
    }
  }

  // when game has started
  static async leaveGame(gameID: string) {}

  static async deleteGame(gameID: string) {}

  static async getLobbyFriends(gameID: string) {
    try {
      return (await axiosService.get(url + 'players', { params: { gameID } })).data as string[];
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static getSuit(id: CardID) {
    return id.split('')[0];
  }

  static getNumber(id: CardID) {
    return parseInt(id.split('')[1]);
  }

  static getCardName(id: CardID) {
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
