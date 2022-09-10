const Game = require('../../models/game')

module.exports = {
    create,
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

/* --- HELPER FUNCTIONS --- */