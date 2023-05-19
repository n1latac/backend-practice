const {Router} = require('express')
const SuperpowerController = require('../controllers/SuperpowerController')
const superpowerRouter = Router()

superpowerRouter.post('/', SuperpowerController.createSuperpower)
superpowerRouter.get('/withSuperhero/:superpowerId', SuperpowerController.getSuperpowerWithSuperhero)

module.exports = superpowerRouter
