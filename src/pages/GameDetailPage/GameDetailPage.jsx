import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as gamesAPI from '../../utilities/games-api';
import GameDetail from '../../components/GameDetail/GameDetail'
import './GameDetailPage.css';

export default function GameDetailPage() {
    const [game, setGame] = useState([]);
    const { gameId } = useParams();

    useEffect(function() {
        async function getGame() {
            const selectedGame = await gamesAPI.getById(gameId);
            setGame(selectedGame);
        }
        getGame();
    }, [gameId]);

    // console.log(game);

  return (
    <div className="game-detail-page">
        <h1>{game.name}</h1>
        <GameDetail game={game} />
    </div>
  );
}