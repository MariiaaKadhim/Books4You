var express = require('express')
var router = express.Router()
const adminCtrl = require('../controllers/admins')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// router.get('/', adminCtrl.index)
router.get('/', adminCtrl.index)

router.get('/new', ensureLoggedIn, adminCtrl.new)

router.post('/', ensureLoggedIn, adminCtrl.create)

router.get('/:id', ensureLoggedIn, adminCtrl.show)
router.get('/:id/edit', ensureLoggedIn, adminCtrl.edit)
router.put('/:id', ensureLoggedIn, adminCtrl.update)
router.delete(
  '/:id',
  // ensureLoggedIn,
  adminCtrl.delete
)
module.exports = router
//router.get('/update', adminCtrl.new)
// router.get('/index', adminCtrl.index)
// router.get('/:id', adminCtrl.show)
// router.get('/new', adminCtrl.new)
