//const { where } = require('sequelize');
const {Image} = require('../models')

module.exports.createImage = async (req, res, next) => {
    try {
        const {superheroInstance, file: {filename}, body} = req;
        const image = await superheroInstance.createImage({
            name: body.name,
            imagePath: filename
        })
        return res.status(201).send(image)
    } catch (error) {
        next(error)
    }
}