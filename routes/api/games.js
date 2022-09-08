const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /api/games
router.get('/', gamesCtrl.index);

// POST /api/games/collection/:gameid
router.post('/collection/:gameid', gamesCtrl.addToCollection)

// POST /api/games/search/:searchData
router.post('/search/:searchData', gamesCtrl.searchForGame)

module.exports = router;