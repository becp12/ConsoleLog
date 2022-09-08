import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as gamesAPI from '../../utilities/games-api';
import './GameDetailPage.css';

export default function GameDetailPage() {
    const [game, setGame] = useState([]);
    const { gameId } = useParams();

    useEffect(function() {
        async function getGame() {
            const selectedGame = await gamesAPI.getById(gameId);
            console.log(selectedGame);
            setGame(selectedGame);
        }
        getGame();
    }, []);

  return (
    <div>
        <h1>Game Detail Page - {game.name}</h1>
    </div>
  );
}