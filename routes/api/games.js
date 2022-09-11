const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /api/games
router.get('/', gamesCtrl.index);

// POST /api/games/collection/:gameid
router.post('/collection/:gameid', ensureLoggedIn, gamesCtrl.addToCollection)

// DELETE /projects/:id (delete functionality)
router.delete('/collection/:gameId', ensureLoggedIn, gamesCtrl.delete);

// GET /api/games/mycollection
router.get('/mycollection', ensureLoggedIn, gamesCtrl.myIndex)

// POST /api/games/search/:searchData
router.post('/search/:searchData', gamesCtrl.searchForGame)

// GET /api/games/:gameId
router.get('/:gameId', gamesCtrl.show);


module.exports = router;