const {Router} = require('express')
const SuperheroController = require('../controllers/SuperheroController')
const {superheroInstance} = require('../midllewares/user.mv')
const {pagination} = require('../midllewares/pagination')

const superheroRouter = Router()

superheroRouter.post('/', SuperheroController.createSuperhero)
superheroRouter.get('/:superheroId',superheroInstance,SuperheroController.findOneByPk)
superheroRouter.get('/',pagination, SuperheroController.getAll)
superheroRouter.delete('/:superheroId', superheroInstance, SuperheroController.deleteOneByPk)
superheroRouter.put('/:superheroId', superheroInstance, SuperheroController.updateOneByPk)

module.exports = superheroRouter