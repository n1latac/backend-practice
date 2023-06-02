const {Router} = require('express')
const superheroRouter = require('./superhero')
const superpowerRouter = require('./superpower')
const imageRouter = require('./image')
const router = Router()

router.use('/superhero', superheroRouter)
router.use('/superpower', superpowerRouter)
router.use('/image', imageRouter)

module.exports = router