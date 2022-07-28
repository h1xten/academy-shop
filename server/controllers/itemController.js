const Item = require('../models/Item')

class ItemController {
    async getItems(req, res) {
        try {
            const items = await Item.find()
            return res.json({items})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Cannot find Items"})
        }
    }

    async addItem(req, res) {
        try {
            const {name, price} = req.body
            const candidate = await Item.findOne({name})
            if(candidate) {
                return res.status(400).json({message: 'Item with name ' +name+ ' already exsist!'})
            }
            const new_item = new Item({name, price})
            await new_item.save()
            return res.send({message: 'Item Added!'})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Cannot Add Item!"})
        }
    }
}

module.exports = new ItemController()