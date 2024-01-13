const customerController={
    submitCustomerDetails:function (req,res,next) {
        const requestData =req.body;
        console.log(requestData);
        res.send("customer Details Received")
    }
}

module.exports=customerController;
