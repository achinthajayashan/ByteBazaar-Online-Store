// const {productList}

const {productsList} = require("../constants/const");
const Order = require('../model/Order');

const orderController={

    saveOrder: async function (req, res, next) {
        try {
            const orderData = req.body;

            const order = await Order.create(orderData);

            res.status(200).json(order);

        }catch (err){
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

}

module.exports=orderController;
