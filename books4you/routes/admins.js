var express = require('express')
var router = express.Router()

const adminCtrl = require('../controllers/admins')
router.get('/', adminCtrl.index)
router.get('/new', adminCtrl.index)
// router.get('/index', adminCtrl.index)
// router.get('/new', adminCtrl.new)
module.exports = router
