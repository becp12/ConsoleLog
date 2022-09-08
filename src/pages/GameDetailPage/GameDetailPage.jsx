import { useState, useEffect } from 'react';
import * as gamesAPI from '../../utilities/games-api';
import './GameDetailPage.css';

export default function GameDetailPage() {
    const [game, setGame] = useState([]);
    
    useEffect(function() {
        async function getGame() {
            const game = await gamesAPI.getById();
            setGame(game);
        }
        getGame();
    }, []);

  return (
    <div>
        <h1>Game Detail Page - {game.title}</h1>
    </div>
  );
}