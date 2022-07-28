const Router = require("express")
const itemController = require("../controllers/itemController")
const router = new Router()

router.get('/get_items', itemController.getItems)
router.post('/add_item', itemController.addItem)
module.exports = router