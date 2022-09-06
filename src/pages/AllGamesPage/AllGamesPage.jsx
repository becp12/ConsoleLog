import './AllGamesPage.css';
import { useState, useEffect } from 'react';
import * as gamesAPI from '../../utilities/games-api';

export default function AllGamesPage() {
  const [games, setGames] = useState([]);

  useEffect(function() {
    async function getItems() {
      const games = await gamesAPI.getAll();
      setGames(games);
    }
    getItems();
  }, []);

  return (
    <div className="all-games-page">
      <h1>All Games</h1>
      {games.map(game => <div key={game.id}>{game.name},<br /> {game.platforms ? game.platforms.map(platform => <span>{platform.name}, </span>) : ""}</div>)}
    </div>
  );
}
