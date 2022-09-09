import { Link, NavLink, useParams } from 'react-router-dom'
import './GameInfoNav.css';

export default function GameInfoNav({ game }) {
    const { baseLink } = useParams();
    return (
        <div className="game-info-nav">
            <div className="info-nav-links">
                <NavLink to="games/:gameId/summary">Summary</NavLink>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to='games/:gameId/releasedate'>Release Date</NavLink>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to='games/:gameId/platforms'>Platforms</NavLink>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to='games/:gameId/playsessions'>Play Sessions</NavLink>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to='games/:gameId/addplaysessions'>Add Play Sessions</NavLink>
            </div>
        </div>
    );
}

