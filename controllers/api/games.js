const TwitchAPI = require('../../src/utilities/send-request-twitch');
const Game = require('../../models/game')
const Collection = require('../../models/collection')

module.exports = {
    index,
    addToCollection,
  };

async function index(req, res) {
    const gamesJson = await TwitchAPI.sendRequestTwitch(
        "https://api.igdb.com/v4/games",
        'POST',
        'search "Elden Ring"; fields name, platforms.name, summary, cover.image_id;'
    )
    const gamesData = gamesJson.map(mapGameData)
    //console.log(JSON.stringify(gamesData, null, 2))
    res.json(gamesData)
}

const mapGameData = (g) => ({
    gameId: g.id,
    name: g.name,
    platforms: g.platforms ? g.platforms?.map(p => ({id: p.id, name: p.name})) : [{id: '-1', name: "Platform list not available"}],
    summary: g.summary ?? "***",
    coverImage: g.cover ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${g.cover.image_id}.jpg` : "https://i.imgur.com/IvuLea5.png"
});

async function addToCollection(req, res) {
    const gameId = req.params.gameid;
    // check database for game
    let game = await Game.findOne({gameId: gameId})
    // will bring back game object or undefined
    // if game does not exist (undefined) - then create
    if (!game) {
        // fetch infomation from the API
        const gamesJson = await TwitchAPI.sendRequestTwitch(
            "https://api.igdb.com/v4/games",
            'POST',
            `fields name, platforms.name, summary, cover.image_id; where id = ${gameId};`
            );
        const gameData = gamesJson.map(mapGameData)[0]
        // console.log(JSON.stringify(gameData, null, 2))
        game = new Game(gameData);
        // save to database
        game.save(function(err) {
            // console.log(game);
            // console.log(err);
            if (err) return res.status(400).json(err);
        })
    }

    // save to user collection (req.user._id)
    const collection = await Collection.addGameToCollection(req.user._id, game._id);

    console.log(collection);

}

/* --- HELPER FUNCTIONS --- */