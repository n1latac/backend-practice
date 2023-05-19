const {Superhero} = require('../models')
const {Superpower} = require('../models')

module.exports.createSuperhero = async (req, res, next)=>{
    try {
        const {body} = req
        const createdSuperhero = await Superhero.create(body)
        return res.status(201).send(createdSuperhero)
    } catch (error) {
        next(error)
    }
}
module.exports.findOneByPk = async (req, res, next) => {
    try {
        const {superheroInstance} = req
        return res.status(201).send(superheroInstance)
    } catch (error) {
        next(error)
    }
}
module.exports.getAll = async (req, res, next) => {
    try {
        const {pagination} = req
        const superheroes = await Superhero.findAll({
            ...pagination
        })
        return res.status(200).send(superheroes)
    } catch (error) {
        next(error)
    }
}
module.exports.deleteOneByPk = async (req, res, next) => {
    try {
        const {superheroInstance} = req
        const deletedSuperhero = await superheroInstance.destroy()
        if(deletedSuperhero) {
            res.status(200).send(deletedSuperhero)
        }else{
            res.status(204).send('cancel delete')
        }
         
    } catch (error) {
        next(error)
    }
}
module.exports.updateOneByPk = async (req, res, next) => {
    try {
        const {superheroInstance,body} = req
        console.log(superheroInstance)
        const updatedSuperhero = await superheroInstance.update(body)
        return res.status(200).send(updatedSuperhero)
    } catch (error) {
        next(error)
    }
}

module.exports.addSuperpowerToSuperhero = async (req, res, next) => {
    try {
        const {params: {superpowerId}, superheroInstance} = req
        const superpowerInstance = await Superpower.findByPk(superpowerId)
        const superheroWithSuperpower = await superheroInstance.addSuperpower(superpowerInstance)
        return res.status(201).send(superheroWithSuperpower)
    } catch (error) {
        next(error)
    }
}