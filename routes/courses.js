const express = require('express')
const router = express.Router();
const {auth} = require('../middleware/auth')
const {all, uniqueCourse, add, change, remove} = require('../controllers/courses')

//api/my_biography/courses/
router.get('/', all);

//api/my_biography/courses/:id
router.get('/:id', uniqueCourse);

//api/my_biography/courses/add
router.post('/add', auth, add);

//api/my_biography/courses/
router.put('/change/:id', auth, change);

//api/my_biography/courses/remove/:id
router.post('/remove/:id', auth, remove);

module.exports = router