const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const {all, uniquePost, add, change, remove} = require('../controllers/my_blog')

//api/my_blog/
router.get('/', all);

//api/my_blog/:id
router.get('/:id', uniquePost);

//api/my_blog/add
router.post('/add', auth, add);

//api/my_blog/change/:id
router.put('/change/:id', auth, change);

//api/my_blog/remove/:id
router.post('/remove/:id', auth, remove);

module.exports = router;