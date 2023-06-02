const {Router} = require('express')
const ImageController = require('../controllers/ImageController')
const {superheroInstance} = require('../midllewares/user.mv')

const imageRouter = Router()
const multer = require('multer')
const {STATIC_PATH} = require('../config/path.config')

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, STATIC_PATH)
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}.${file.originalname}`);
    }
})
const upload = multer({storage})

imageRouter.post('/:superheroId',superheroInstance, upload.single('imgField'), ImageController.createImage)


module.exports = imageRouter