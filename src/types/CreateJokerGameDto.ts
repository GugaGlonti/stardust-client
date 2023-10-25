export type GameMode = 'classical' | 'nines';

export interface CreateJokerGameDto {
  gameID: string;
  gameMode: GameMode;
  roundCount: number;
  penalty: number;
  players: string;

  betAmount?: number;
}
