import './GameDetail.css';
import GameDetailInfoContainer from '../GameDetailInfoContainer/GameDetailInfoContainer'

export default function GameDetail({ game }) {
    console.log(game)
    return (
        <div className="game-detail">
            <div className="image-div">
                <img src={game.coverImageLarge} alt="Game cover"/>
            </div>
            <GameDetailInfoContainer game={game} />
        </div>
    );
}