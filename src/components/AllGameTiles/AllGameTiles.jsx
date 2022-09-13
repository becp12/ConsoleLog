import './AllGameTiles.css';
import GameTile from '../GameTile/GameTile'

export default function AllGameTiles({ games, collection, setCollection }) {

  return (
    <div className="all-game-tiles">
        {games?.map(game =>
          <GameTile collection={collection} game={game} setCollection={setCollection}/>
        )}
    </div>
  );
}
