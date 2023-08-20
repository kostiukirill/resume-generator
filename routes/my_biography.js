const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { all, uniqueBio, add, change, remove } = require('../controllers/my_biography');

// api/my_biograhy/
router.get('/', all);

// api/my_biograhy/:id
router.get('/:id', uniqueBio);

// api/my_biograhy/add
router.get('/add', auth, add);

// api/my_biograhy/change/:id
router.get('/change/:id', auth, change);

// api/my_biograhy/remove/:id
router.get('/remove:id', auth, remove);


module.exports = router;