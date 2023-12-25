import { useEffect, useState } from 'react';
import TheirCards from '../TheirCards/TheirCards';
import YourCards from '../YourCards/YourCards';
import ProfilePicture from '../../../components/ProfilePicture';
import Table from './Table';
import JokerService from '../../../services/joker.service';
import { JokerGame } from '../JokerGame';
import useCurrentUser from '../../../hooks/useCurrentUser';
import { CardID } from '../../../assets/cards/__card.dictionary';
import TimeBar from '../TimeBar';
import { useLoaderData, useNavigate } from 'react-router';
import { socket } from '../../../socket';

export default function GameLayout() {
  const navigate = useNavigate();

  const [playerTop, setPlayerTop] = useState<string>('');
  const [playerTopCards, setPlayerTopCards] = useState<CardID[]>([]);

  const [playerLeft, setPlayerLeft] = useState<string>('');
  const [playerLeftCards, setPlayerLeftCards] = useState<CardID[]>([]);

  const [playerRight, setPlayerRight] = useState<string>('');
  const [playerRightCards, setPlayerRightCards] = useState<CardID[]>([]);

  const [playerBottom, setPlayerBottom] = useState<string>('');
  const [playerBottomCards, setPlayerBottomCards] = useState<CardID[]>([]);

  const [game, setGame] = useState<JokerGame>(useLoaderData() as JokerGame);

  useEffect(() => {
    socket.on('joker-start', () => {
      console.log('JOKER_START');
      navigate(`/joker/${game.gameID}/game`);
    });

    socket.on('joker-update', async () => {
      const game = (await JokerService.getGame()) as JokerGame;
      setGame(game);
      console.log('JOKER_UPDATE');
    });
  }, []);

  console.log('game', game);

  const { username } = useCurrentUser();

  useEffect(() => {
    const players = [game?.p0, game?.p1, game?.p2, game?.p3];

    const thisPlayerPosition = players.findIndex(player => player === username);

    const playerLeftIndex = (thisPlayerPosition + 1) % 4;
    setPlayerLeft(players[playerLeftIndex]);

    const playerTopIndex = (thisPlayerPosition + 2) % 4;
    setPlayerTop(players[playerTopIndex]);

    const playerRightIndex = (thisPlayerPosition + 3) % 4;
    setPlayerRight(players[playerRightIndex]);

    const playerBottomIndex = (thisPlayerPosition + 4) % 4;
    setPlayerBottom(players[playerBottomIndex]);

    switch (playerBottomIndex) {
      case 0:
        setPlayerBottomCards((game?.p0cards?.split(',') as CardID[]) || []);
        setPlayerLeftCards((game?.p1cards?.split(',') as CardID[]) || []);
        setPlayerTopCards((game?.p2cards?.split(',') as CardID[]) || []);
        setPlayerRightCards((game?.p3cards?.split(',') as CardID[]) || []);
        break;
      case 1:
        setPlayerBottomCards((game?.p1cards?.split(',') as CardID[]) || []);
        setPlayerLeftCards((game?.p2cards?.split(',') as CardID[]) || []);
        setPlayerTopCards((game?.p3cards?.split(',') as CardID[]) || []);
        setPlayerRightCards((game?.p0cards?.split(',') as CardID[]) || []);
        break;
      case 2:
        setPlayerBottomCards((game?.p2cards?.split(',') as CardID[]) || []);
        setPlayerLeftCards((game?.p3cards?.split(',') as CardID[]) || []);
        setPlayerTopCards((game?.p0cards?.split(',') as CardID[]) || []);
        setPlayerRightCards((game?.p1cards?.split(',') as CardID[]) || []);
        break;
      case 3:
        setPlayerBottomCards((game?.p3cards?.split(',') as CardID[]) || []);
        setPlayerLeftCards((game?.p0cards?.split(',') as CardID[]) || []);
        setPlayerTopCards((game?.p1cards?.split(',') as CardID[]) || []);
        setPlayerRightCards((game?.p2cards?.split(',') as CardID[]) || []);
        break;
    }
  }, [game, username]);

  const tableCards = (game?.table?.split(',') as unknown as CardID[]) || [];

  const outerImageClasses = `flex justify-center items-center`;
  const imageClasses = `bg-window h-3/4 aspect-square rounded-full overflow-hidden border-4 border-gold-dark absolute`;

  return (
    <div className='grid grid-cols-12 grid-rows-6 h-full w-full overflow-hidden'>
      {/** ========== // ========== @Top Player ========== // ========== */}
      <div className={`${outerImageClasses} flex justify-center col-start-6 col-span-2 row-start-1 z-30 relative`}>
        <div className={`${imageClasses}`}>
          <ProfilePicture username={playerTop} />
        </div>
      </div>
      <TheirCards
        className={`col-start-6 col-span-1 row-start-1 -translate-y-32`}
        count={playerTopCards?.length || 0}
      />

      {/** ========== // ========== @Left Player ========== // ========== */}
      <div className={`${outerImageClasses} col-start-1 row-start-3 z-30 relative`}>
        <div className={`${imageClasses}`}>
          <ProfilePicture username={playerLeft} />
        </div>
      </div>
      <TheirCards
        className={`col-start-1 row-start-3 -translate-x-16 -translate-y-20`}
        count={playerLeftCards?.length || 0}
        rotatedRight
      />

      {/** ========== // ========== @Right Player ========== // ========== */}
      <div className={`${outerImageClasses} col-start-12 row-start-3 z-30 relative`}>
        <div className={`${imageClasses}`}>
          <ProfilePicture username={playerRight} />
        </div>
      </div>
      <TheirCards
        className={`col-start-12 row-start-3 translate-x-16 translate-y-20`}
        count={playerRightCards?.length || 0}
        rotatedLeft
      />

      {/** ========== // =========== // @Table // =========== // ========== */}
      <Table
        trump={game?.trump}
        cards={tableCards}
        className='bg-window col-start-3 col-span-8 row-start-2 row-span-3'
      />

      {/** ========== // ========== / @YourCards / ========== // ========== */}
      <div className='bg-window row-start-6 col-span-full relative'>
        <TimeBar className='-top-2 h-2' />
      </div>

      <YourCards
        className={`col-start-6 col-span-2 row-start-6 z-10`}
        cardIds={playerBottomCards}
      />
    </div>
  );
}

export const GameLoader = () => {
  return JokerService.getGame();
};
