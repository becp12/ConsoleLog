import './GameInfoContainer.css';
import Summary from '../Summary/Summary'
import PlaySessionForm from '../PlaySessionForm/PlaySessionForm';

export default function GameInfoContainer({ game }) {
    console.log(game)
    const platforms = game.platforms.map(p => <li>{p.name}</li>)
    return (
        <div className='game-info-container'>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="summary"><Summary game={game} /></div>
                <div className="tab-pane fade" id="releaseDate">{game.releaseDate}</div>
                <div className="tab-pane fade" id="platforms">
                    <ul className="platform-list">
                        {platforms}
                    </ul>
                </div>
                <div className="tab-pane fade" id="playsessions">PLAY SESSION COMPONENT</div>
                <div className="tab-pane fade" id="addplaysessions"><PlaySessionForm /></div>
                
            </div>
        </div>
    );
}