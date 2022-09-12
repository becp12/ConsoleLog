import './GameTile.css';
import { Link } from "react-router-dom";
import * as gamesAPI from '../../utilities/games-api';

export default function GameTile({ game, collection, setCollection }) {

  async function handleAddToCollection(gameId) {
    const collection = await gamesAPI.addToCollection(gameId);
    setCollection(collection);
  }

  async function handleRemoveFromCollection(gameId) {
    const collection = await gamesAPI.removeFromCollection(gameId);
    setCollection(collection);
  }

  return (
    <div className="game-tile" key={game.gameId}>
      <Link to={`/games/${game.gameId}`} >
        <h2>{game.name}</h2>
        <h4>Release Date: {game.releaseDate}</h4>
        <div>
          <img src={game.coverImage} alt="Game cover" />
        </div>
      </Link>
      {collection?.games?.some((g) => g.gameId === game.gameId) ?
        <button onClick={
          () => handleRemoveFromCollection(game.gameId)}
        >
          Remove From Collection
        </button>
        :
        <button onClick={
          () => handleAddToCollection(game.gameId)}
        >
          Add to My Collection
        </button>
      }
    </div>
  );
}
