import { useState } from 'react';
import './GameInfoContainer.css';
import Summary from '../Summary/Summary'
import PlaySessionForm from '../PlaySessionForm/PlaySessionForm';
import PlaySessions from '../PlaySessions/PlaySessions';

export default function GameInfoContainer({ game, collection, setCollection }) {
    const [playSession, setPlaySession] = useState(game?.playSession)

    const platforms = game.platforms.map(p => <li key={p.id}>{p.name}</li>)
    
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
                {collection?.games?.some(g => g.gameId === game.gameId) &&
                <>
                    <div className="tab-pane fade" id="playsessions"><PlaySessions playSession={playSession} setPlaySession={setPlaySession} game={game} /></div>
                    <div className="tab-pane fade" id="addplaysessions"><PlaySessionForm gameObjId={game._id} playSession={playSession} setPlaySession={setPlaySession} /></div>
                </>
                }
            </div>
        </div>
    );
}