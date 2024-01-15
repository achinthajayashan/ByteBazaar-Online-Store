// const {productList}

const {productsList} = require("../constants/const");
const Product = require('../model/Product');

const productsController={
    getAllProducts:async function (req, res, next) {
        try {
            const productList = await Product.find();

            res.status(200).json(productList);
        }catch (err){
            console.log(err);
            res.status(500).json({error:'something went wrong !'});
        }
    },

    saveProduct: async function (req, res, next) {
        try {
            const productData = req.body;

            const product = await Product.create(productData);

            res.status(200).json(product);

        }catch (err){
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    getProduct:async function (req, res, next) {
        try {
            const productId = req.params.id;

            const product = await Product.find({id: productId});

            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    updateProduct:async function (req, res, next) {
        try {
            const productId = req.params.id;
            const productData = req.body;

            const updatedProduct = await Product.findOneAndUpdate(
                {
                id:productId
            }
            ,productData,
                {new:true});

            if (!updatedProduct){
                return res.status(404).json({error:'Product Not Found'});
            }

            res.status(200).json(updatedProduct);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    deleteProduct:async function (req, res, next) {
        try {
            const productId = req.params.id;

            const product = await Product.deleteOne({id: productId});

            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    }
}

module.exports=productsController;