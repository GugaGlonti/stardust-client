export type GameMode = 'classical' | 'nines';

export interface CreateJokerGameDto {
  gameID: string;
  gameMode: GameMode;
  roundAmount: number;
  penalty: number;
  players: string;

  betAmount?: number;
}
