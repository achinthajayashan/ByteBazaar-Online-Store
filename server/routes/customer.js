const express = require('express');
const customerController=require('../controller/customerController')
const router = express.Router();

router.post('/register', customerController.saveCustomer);
router.get('/login/:email', customerController.getdetail);
router.get('/all', customerController.getAllCustomers);


module.exports = router;
