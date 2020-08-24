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
           /****************NODEMAILER FROM HERE********** */    
        // creating transporter for nodemailer
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "coolvsr6@gmail.com", // generated ethereal user//host user email or admin email(fill email and password)
              pass: "Tim@2786" // generated ethereal password//admin password
            },tls:{
              rejectUnauthorised:true
            }
          });

                // setup email data with unicode symbols
           // var link="http://"+req.get('host')+"/verify?id="+u_email;//verification link or the path of the user
            let mailOptions = {
            from: '"nodemailer👻" <coolvsr6@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "no_reply just verify your account to be our member", // Subject line
            text: "Hello world? Your mail is verified...", // plain text body
            };
            
            //sending the mail
            transporter.sendMail(mailOptions,function(err,info){
                if(err)
                console.log(err);
                else {
                  console.log("SUCCESS IN SENIDNG THE MAIL FROM NODE nodemailer");
                }
              });

              /*******************NODEMAILER ENDS HERE*************** */
        }
    })
})



module.exports = router;
