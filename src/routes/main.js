const router = require('express').Router();
const {index, not_Entry,admin} = require('../controllers/indexControllers');

const accessAdmin = require('../middlewares/accessAdmin');


router.get('/', index)
router.get('/admin',accessAdmin ,admin)




module.exports = router;