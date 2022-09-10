import { useState, useEffect } from 'react';
import './MyCollectionPage.css';
import AllGameTiles from '../../components/AllGameTiles/AllGameTiles'
import * as gamesAPI from '../../utilities/games-api';

export default function MyCollectionPage() {
  const [collection, setCollection] = useState([]);

  useEffect(function() {
    async function getAllGames() {
      const collection = await gamesAPI.getMyGames();
      // console.log(games)
      setCollection(collection);
    }
    getAllGames();
  }, []);


  return (
    <div className="my-games-page">
      <h1>My Collection</h1>
      <AllGameTiles collection={collection} setCollection={setCollection} games={collection?.games} />
      {/* {games ?
        games.map(game =>
          <div key={game.gameId}>
            <br />
            <h2>{game.name}</h2>
            <p>{game.summary}</p>
            <br />
            <p>Game available on:
            {game.platforms.map(p =>
              <span key={p.id}> {p.name}, </span>
            )}
            </p>
            <img src={game.coverImage} alt="Cover Art" />
          </div>
        )
        :
          "You have no games in your collection."
        } */}
    </div>
  );
}
