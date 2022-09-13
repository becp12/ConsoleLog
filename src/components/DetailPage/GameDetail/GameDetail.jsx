import './GameDetail.css';
import GameDetailInfoContainer from '../GameDetailInfoContainer/GameDetailInfoContainer'
import * as gamesAPI from '../../../utilities/games-api';

export default function GameDetail({ game, collection, setCollection }) {
       
    async function handleAddToCollection(gameId) {
        const collection = await gamesAPI.addToCollection(gameId);
        setCollection(collection);
    }

    async function handleRemoveFromCollection(gameId) {
        const collection = await gamesAPI.removeFromCollection(gameId);
        setCollection(collection);
    }

    return (
        <div className="game-detail">
            <div className="image-div">
                <img src={game.coverImageLarge} alt="Game cover"/>
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
            <GameDetailInfoContainer game={game} collection={collection} setCollection={setCollection} />

        </div>
    );
}