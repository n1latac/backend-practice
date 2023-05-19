const {Superpower} = require('../models')
const {Superhero} = require('../models')

module.exports.createSuperpower = async (req, res, next) => {
    try {
        const {body} = req
        const createdSuperpower = await Superpower.create(body)
        return res.status(200).send(createdSuperpower)
    } catch (error) {
        next(error)
    }
}
module.exports.getSuperpowerWithSuperhero = async (req, res, next) =>{
    try {
        const {params:{superpowerId}} = req
        console.log(superpowerId)
        const result = await Superpower.findByPk(superpowerId,{
            include:[{
                model: Superhero
            }]
        })
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

