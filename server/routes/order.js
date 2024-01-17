const orderController = require("../controller/orderController");
const express = require("express");
const router = express.Router();

router.post('/save', orderController.saveOrder)

module.exports = router;

