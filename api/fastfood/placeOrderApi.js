const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model for placing order
const {fastFoodOrderDetailsReloadedModel} = require('../../models/fastFoodOrderDetails');


//setting up the api endpoint....
router.post('/confirm',(req,res)=>{
    var fastFoodOrderData = new fastFoodOrderDetailsReloadedModel({
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        productQuantity:req.body.productQuantity,
        deliveryAddress:req.body.deliveryAddress,
        customerMobileNo:req.body.customerMobileNo,
        totalBillingAmount:req.body.totalBillingAmount
    })

    //saving the product to the database...
    fastFoodOrderData.save((err,doc)=>{
        if(err) res.send(err);
        else{
            res.status(200).send(doc);
            // here we will set the logic for twillio to send sms...
        }
    })
})



module.exports = router;
