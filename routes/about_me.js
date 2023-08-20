const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { all, add, infoAboutId, change, remove } = require('../controllers/about_me')

// api/about_me
router.get('/', all);

// api/about_me/:id
router.get('/:id', infoAboutId);

// api/about_me/add
router.post('/add', auth, add);

// api/about_me/change
router.put('/change/:id', auth, change);

// api/about_me/remove
router.post('/remove/:id', auth, remove);

module.exports = router