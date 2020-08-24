const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model for placing order
const {vegetableOrderDetailsReloadedModel} = require('../../models/vegetableOrderDetails');


//setting up the api endpoint....
router.post('/vegetableConfirm',(req,res)=>{
    var vegetableOrderData = new vegetableOrderDetailsReloadedModel({
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        productQuantity:req.body.productQuantity,
        deliveryAddress:req.body.deliveryAddress,
        customerMobileNo:req.body.customerMobileNo,
        totalBillingAmount:req.body.totalBillingAmount
    })

    //saving the product to the database...
    vegetableOrderData.save((err,doc)=>{
        if(err) res.send(err);
        else{
            res.status(200).send(doc);
            // here we will set the logic for nodemailer to send sms...
        
        }
    })
})



module.exports = router;
