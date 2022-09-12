import './GameInfoNav.css';

export default function GameInfoNav({ game, collection, setCollection }) {
    // console.log(collection)
    return (
        <div className="game-info-nav">
            <ul className="nav nav-tabs" id="myTab" >
                <li className="nav-item">
                    <button className="nav-link active" id="summary-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button">Summary</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" id="releaseDate-tab" data-bs-toggle="tab" data-bs-target="#releaseDate" type="button">Release Date</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" id="platforms-tab" data-bs-toggle="tab" data-bs-target="#platforms" type="button">Platforms</button>
                </li>
                {collection?.games?.some(g => g.gameId === game.gameId) &&
                <>
                    <li className="nav-item">
                        <button className="nav-link" id="playsessions-tab" data-bs-toggle="tab" data-bs-target="#playsessions" type="button">Play Sessions</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" id="addplaysessions-tab" data-bs-toggle="tab" data-bs-target="#addplaysessions" type="button">Add Play Session</button>
                    </li>
                </>
                }
            </ul>
        </div>
    );
}

