import './GameDetailInfoContainer.css';
import GameInfoNav from '../GameInfoNav/GameInfoNav';
import GameInfoContainer from '../GameInfoContainer/GameInfoContainer';

export default function GameDetailInfoContainer({ game }) {
    return (
        <div className="game-detail-container">
            <GameInfoNav game={game} />
            <GameInfoContainer game={game} />
        </div>
    );
}