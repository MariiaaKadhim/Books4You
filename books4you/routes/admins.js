var express = require('express')
var router = express.Router()
const adminCtrl = require('../controllers/admins')

router.get('/index', adminCtrl.index)

router.get('/new', adminCtrl.new)

router.post('/', adminCtrl.create)

router.get('/edit/:id', admitCtrl.update)

//router.get('/:id', adminCtrl.show)
//router.get('/update', adminCtrl.new)
//router.get('/:id/update', adminCtrl.update)
// router.get('/index', adminCtrl.index)
// router.get('/new', adminCtrl.new)
module.exports = router
