const Game = require('../../models/game')

module.exports = {
    create,
    delete: deleteSession,
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

async function deleteSession(req, res) {
    try {
        const game = await Game.findById(req.params.gameId).populate('playSession');
        const newPlaySessions = game.playSession.filter(p => !p._id.equals(req.params.playSessionId))
        game.playSession = newPlaySessions;
        game.save()
        res.json(newPlaySessions.filter(ps => ps.user.equals(req.user._id)));
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}
    
/* --- HELPER FUNCTIONS --- */