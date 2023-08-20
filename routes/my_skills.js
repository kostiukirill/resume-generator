const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { all, uniqueSkill, add, change, remove } = require('../controllers/my_skills')

// api/my_skills/
router.get('/', all);

// api/my_skills/:id
router.get('/:id', uniqueSkill);

// api/my_skills/add
router.post('/add', auth, add);

// api/my_skills/change/:id
router.put('/change/:id', auth, change);

// api/my_skills/remove/:id
router.post('/remove/:id', auth, remove);

module.exports = router