const fetch = require('node-fetch');

module.exports = {
    index,
  };

async function index(req, res) {
    const options = { method: 'POST', body:
        'search "Elden Ring"; fields name, platforms.name, summary, cover.image_id;'
    }
    options.headers={ 'Content-Type': 'application/json', 'Client-ID': process.env.CLIENT_ID }
    options.headers.Authorization = `Bearer ${process.env.IGDB_BEARER}`
    const games = await fetch("https://api.igdb.com/v4/games", options)
    if (games.ok) {
        const gamesJSON = await games.json();
        
        // console.log(gamesJSON)
        const gamesData = gamesJSON.map(g => ({
                id: g.id,
                name: g.name,
                platforms: g.platforms ? g.platforms?.map(p => ({id: p.id, name: p.name})) : [{id: '-1', name: "Platform list not available"}],
                summary: g.summary ?? "***",
                coverImage: g.cover ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${g.cover.image_id}.jpg` : "https://i.imgur.com/IvuLea5.png"
            }))
        console.log(JSON.stringify(gamesData, null, 2))
        res.json(gamesData)
    } else {
        throw new Error('Bad Request');
    }
}