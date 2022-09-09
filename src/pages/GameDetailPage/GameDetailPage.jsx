import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as gamesAPI from '../../utilities/games-api';
import GameDetail from '../../components/Detail Page/GameDetail/GameDetail'
import './GameDetailPage.css';
import PacmanLoader from "react-spinners/PacmanLoader";

export default function GameDetailPage() {
  const [game, setGame] = useState([]);
  const { gameId } = useParams();

  useEffect(function () {
    async function getGame() {
      const selectedGame = await gamesAPI.getById(gameId);
      setGame(selectedGame);
    }
    getGame();
  }, [gameId]);

  // console.log(game);

  return (
    <>
      {!game.name
        ?
        <div className='pacman-loader'>
          <PacmanLoader
            color="#f5e742"
            size={50}
            speedMultiplier={3}
          />
        </div>
        :
        <div className="game-detail-page">
          <h1>{game.name}</h1>
          <GameDetail game={game} />
        </div>}
    </>
  );
}