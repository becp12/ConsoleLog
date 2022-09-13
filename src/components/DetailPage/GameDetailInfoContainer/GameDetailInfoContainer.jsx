import './GameDetailInfoContainer.css';
import GameInfoNav from '../GameInfoNav/GameInfoNav';
import GameInfoContainer from '../GameInfoContainer/GameInfoContainer';

export default function GameDetailInfoContainer({ game, collection, setCollection }) {

    return (
        <div className="game-detail-container">
            <GameInfoNav game={game} collection={collection} setCollection="setCollection" />
            <GameInfoContainer game={game} collection={collection} setCollection="setCollection" />
        </div>
    );
}