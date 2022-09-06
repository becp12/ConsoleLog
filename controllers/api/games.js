const fetch = require('node-fetch');

module.exports = {
    index,
  };

async function index(req, res) {
    const options = { method: 'POST', body:
        'search "Elden Ring"; fields name, platforms.name;'
    }
    options.headers={ 'Content-Type': 'application/json', 'Client-ID': 'x6p34zjkqrccm4g7f0pnq0otnveebl' }
    options.headers.Authorization = 'Bearer '
    const games = await fetch("https://api.igdb.com/v4/games", options)
    // console.log(games.json())
    if (games.ok) {
        const gamesJSON = await games.json();
        console.log(gamesJSON)
        console.log(gamesJSON[0].platforms[0].name)
        res.json(gamesJSON)
    } else {
        throw new Error('Bad Request');
    }
}