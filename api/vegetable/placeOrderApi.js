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
            // here we will set the logic for twilio to send sms...
            const accountSid = 'AC7b052f17d35fd1cb6a96015095830233';
            const authToken  = 'ef8877c01a862c95b98faa11bdc40c4c';
            const client = require('twilio')(accountSid,authToken);
            client.messages
                .create({
                    body:'Your order for '+req.body.productName+' has been placed successfully!',
                    from:'+12057720546',
                    to:'+918209186342'
            })
            .then(message => console.log(message));
        }
    })
})



module.exports = router;
