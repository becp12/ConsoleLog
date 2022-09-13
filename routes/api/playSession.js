const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../../controllers/api/playSession');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/playsessions/:gameObjId
router.post('/:gameObjId', sessionsCtrl.create);

// DELETE /api/playsessions/:playSessionId
router.delete('/:gameId/:playSessionId', sessionsCtrl.delete);

module.exports = router;