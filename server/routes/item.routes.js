const Router = require("express")
const itemController = require("../controllers/itemController")
const router = new Router()

router.get('/get_items', itemController.getItems)
router.get('/item_info', itemController.getItem)
router.post('/add_item', itemController.addItem)
module.exports = router