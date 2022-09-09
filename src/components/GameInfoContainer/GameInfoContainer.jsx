import './GameInfoContainer.css';
import Summary from '../Summary/Summary'

export default function GameInfoContainer({ game }) {
    return (
        <div className='game-info-container'>
            <Summary game={game}/>
        </div>
    );
}