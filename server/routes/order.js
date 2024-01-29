const orderController = require("../controller/orderController");
const express = require("express");
const router = express.Router();

router.post('/save', orderController.saveOrder)
router.get('/all', orderController.getall)

module.exports = router;

