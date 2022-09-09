import './GameInfoContainer.css';
import Summary from '../Summary/Summary'

export default function GameInfoContainer({ game }) {
    console.log(game)
    const platforms = game.platforms.map(p => <li>{p.name}</li>)
    return (
        <div className='game-info-container'>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="summary"><Summary game={game} /></div>
                <div class="tab-pane fade" id="releaseDate">{game.releaseDate}</div>
                <div class="tab-pane fade" id="platforms">
                    <ul>
                        {platforms}
                    </ul>
                </div>
            </div>
        </div>
    );
}