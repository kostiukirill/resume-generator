const express =  require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { all, uniqueExp, add, change, remove } = require('../controllers/my_experience');

// api/my_experience/
router.get('/', all);

//api/my_experience/:id
router.get('/:id', uniqueExp);

// api/my_experience/add
router.post('/add', auth, add);

// api/my_experience/change/:id
router.put('/change/:id', auth, change);

// api/my_experience/remove/:id
router.get('/remove/:id', auth, remove);

module.exports = router;