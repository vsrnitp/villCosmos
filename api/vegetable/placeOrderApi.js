const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

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
<<<<<<< HEAD
              // here we will set the logic for twillio to send sms...
        const accountSid = '***********';
        const authToken = '**********';
        const client = require('twilio')(accountSid,authToken);
        client.messages.create({
          body:'\nOrder received for \nproduct Name - '+req.body.productName+'\n product Price - '+req.body.productPrice+'\n Product Quantity - '+req.body.productQuantity+'\n Delivery Address - '+req.body.deliveryAddress+'\n Customer Mobile No. - '+req.body.customerMobileNo+'\n Total Billing Amount'+' '+req.body.totalBillingAmount,
          from:'+12028738498',
          to:'+917703882887'
                  }).then(message => console.log(message.sid))
=======
            // here we will set the logic for nodemailer to send sms...
        
>>>>>>> bf4827bccf632c6e35bfc6c9325c29a184ef42fe
        }
    })
})



module.exports = router;
