const express = require('express');
const router = express.Router();
const { login, register, current, remove } = require('../controllers/admin');
const { auth } = require('../middleware/auth')

// api/admin/login
router.post('/login', login);

// api/admin/register
router.post('/register', register);


// // api/admin/current
router.get('/current', auth, current);

router.post('/remove', auth, remove);

module.exports = router;
