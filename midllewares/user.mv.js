const {Superhero} = require('../models')

module.exports.superheroInstance = async (req, res, next) => {
    try {
        const {params:{superheroId}} = req
        const result = await Superhero.findByPk(superheroId)
        req.superheroInstance = result
        next()
    } catch (error) {
        next(error)
    }
}