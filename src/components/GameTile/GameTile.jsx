// import { useState, useEffect } from 'react';
import './GameTile.css';
import { Link } from "react-router-dom";
import * as gamesAPI from '../../utilities/games-api';

export default function AllGamesPage({ game }) {

  async function handleAddToCollection(gameId) {
    await gamesAPI.addToCollection(gameId);
  }

  return (
    <div className="game-tile" key={game.gameId}>
      <Link to={`/games/${game.gameId}`} >
          <h2>{game.name}</h2>
          <h4>Release Date: {game.releaseDate}</h4>
          <div>
            <img src={game.coverImage} alt="Game cover"/>
          </div>
          <button onClick={() => handleAddToCollection(game.gameId)}>Add to My Collection</button>
      </Link>
    </div>
  );
}
