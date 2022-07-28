const {Schema, model, ObjectId} = require("mongoose")

const Item = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    picture: {type: String},
})

module.exports = model('Item', Item)