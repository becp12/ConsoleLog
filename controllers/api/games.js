const TwitchAPI = require('../../src/utilities/send-request-twitch');
const Game = require('../../models/game')
const Collection = require('../../models/collection')

const SearchFields = 'name, platforms.name, summary, cover.image_id, first_release_date'

module.exports = {
    index,
    addToCollection,
    // myIndex,
  };

async function index(req, res) {
    const gamesJson = await TwitchAPI.sendRequestTwitch(
        "https://api.igdb.com/v4/games",
        'POST',
        `search "Pokemon"; fields ${SearchFields}; limit 500;`
    )
    const gamesData = gamesJson.map(mapGameData)
    //console.log(JSON.stringify(gamesData, null, 2))
    res.json(gamesData)
}

// async function myIndex(req, res) {
//     const games = await Collection.findOne({ user: req.user._id });
//     // console.log(games);
//     res.json(games);
// }

const mapGameData = (g) => ({
    gameId: g.id,
    name: g.name,
    platforms: g.platforms ? g.platforms?.map(p => ({id: p.id, name: p.name})) : [{id: '-1', name: "Platform list not available"}],
    summary: g.summary ?? "***",
    coverImage: g.cover ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${g.cover.image_id}.jpg` : "https://i.imgur.com/HnK8wNo.png",
    releaseDate: g.first_release_date ? new Date(g.first_release_date * 1000).toUTCString().substring(0, 16) : "Not listed",
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
            `fields ${SearchFields}; where id = ${gameId}; limit 1;`
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