// import { useState, useEffect } from 'react';
import './AllGameTiles.css';
import GameTile from '../GameTile/GameTile'

export default function AllGamesPage({ games }) {

  return (
    <div className="all-game-tiles">
        {games.map(game =>
          <GameTile game={game}/>
        )}
    </div>
  );
}
