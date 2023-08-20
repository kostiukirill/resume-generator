const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { all, uniqueProject, add, change, remove } = require('../controllers/my_project');

// api/my_project/all
router.get('/', all);

// api/my_project/my_project/id
router.get('/:id', uniqueProject);

// api/my_project/add
router.post('/add', auth, add);

// api/my_project/change/:id
router.put('/change/:id', auth, change);

// api/my_project/remove/:id
router.post('/remove/:id', auth, remove);

module.exports =router