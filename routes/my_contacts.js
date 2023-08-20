const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth');
const { all, uniqueCont, add, change, remove } = require("../controllers/my_contacts");

//api/my_contacts/
router.get('/', all);

//api/my_contacts/:id
router.get('/:id', uniqueCont);

//api/my_contacts/add
router.post('/add', auth, add);

//api/my_contacts/change/:id
router.put('/change/:id', auth, change);

//api/my_contacts/remove/:id
router.post('/remove/:id', auth, remove);

module.exports = router