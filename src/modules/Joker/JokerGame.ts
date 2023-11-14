import { CardID } from '../../assets/cards/__card.dictionary';

export class JokerGame {
  gameID!: string;

  /** @static */
  started!: boolean;

  /** ========== @Options ========== */

  /** @static */
  gameMode!: string;

  /** @static */
  penalty!: number;

  /** =========== @Clock =========== */

  /** @static */
  roundAmount!: number;

  /** @static */
  roundCount!: number;

  /** @static */
  roundSequence!: string;

  /** @static */
  playerTurnOrder!: string;

  round!: number;

  turn!: number;

  currentPlayer!: string;

  /** =========== @Admin =========== */
  p0!: string;

  p0cards!: string;

  /** ========== @Player2 ========== */
  p1!: string;

  p1cards!: string;

  /** ========== @Player3 ========== */
  p2!: string;

  p2cards!: string;

  /** ========== @Player4 ========== */
  p3!: string;

  p3cards!: string;

  /** ========== @Scores ========== */

  trump!: CardID;

  table!: string;

  /** ========== @Scores ========== */

  p0points!: number;

  p1points!: number;

  p2points!: number;

  p3points!: number;

  /** ====== @ScoresHistory ======= */
}
