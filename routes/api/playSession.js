const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../../controllers/api/playSession');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/playsessions
router.post('/:gameObjId', sessionsCtrl.create);

module.exports = router;