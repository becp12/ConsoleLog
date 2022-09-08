const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /api/games
router.get('/', gamesCtrl.index);

// POST /api/games/collection/:gameid
router.post('/collection/:gameid', gamesCtrl.addToCollection)

// GET /api/games/mycollection
router.get('/mycollection', gamesCtrl.myIndex)

// POST /api/games/search/:searchData
router.post('/search/:searchData', gamesCtrl.searchForGame)

// // POST /api/games/:gameId
// router.post('/:gameId', gamesCtrl.getOneGame)

// POST /api/games/:gameId
router.get('/:gameId', gamesCtrl.show);

module.exports = router;