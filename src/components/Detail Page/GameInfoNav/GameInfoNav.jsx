// import { Link, NavLink, useParams } from 'react-router-dom'
import './GameInfoNav.css';

export default function GameInfoNav({ game }) {
    return (
        <div className="game-info-nav">
            <ul className="nav nav-tabs nav-fill" id="myTab" >
                <li className="nav-item">
                    <button className="nav-link active" id="summary-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button">Summary</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" id="releaseDate-tab" data-bs-toggle="tab" data-bs-target="#releaseDate" type="button">Release Date</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" id="platforms-tab" data-bs-toggle="tab" data-bs-target="#platforms" type="button">Platforms</button>
                </li>
            </ul>
        </div>
    );
}

