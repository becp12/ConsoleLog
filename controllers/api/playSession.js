const Game = require('../../models/game')

module.exports = {
    create,
    // getAll,
  };

async function create(req, res) {
    try {
        const game = await Game.findById(req.params.gameObjId)
        req.body.user = req.user._id;
        game.playSession.push(req.body);
        await game.save();
        const playSession = game.playSession.at(-1)
        res.json(playSession);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}

// async function getAll(req, res) {
//     const game = await Game.findOne({ gameId: req.params.gameId }).populate('playSession');
//     console.log(game.playSession)
//     if (!game.playSession) return;
//     res.json(game.playSession);
// }
    
/* --- HELPER FUNCTIONS --- */