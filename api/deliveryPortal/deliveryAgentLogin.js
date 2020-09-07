const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
router.use(cookieParser());

// bringing the database model...
const {deliveryAgentRegistrationModel} = require('../../models/deliveryAgentRegistrationData');

//setting up api endpoint.'..
router.post('/deliveryAgentLogin',(req,res)=>{
 const userName = req.body.userName;
 const password = req.body.password;

 deliveryAgentRegistrationModel.findOne({'userName':userName},(err,user)=>{
     if(err) res.send('User Not Found!');
     else if(!user){res.send('No user found!')}
     else if(user){
         // decrypting the password and saving the token to the cookie....
         bcrypt.compare(password,user.password,(err,valid)=>{
             if(err) res.send('Incorrect Password!');
             else{
                var token = jwt.sign(user._id.toHexString(),'supersecret');
                res.cookie('deliveryAgentLoginToken',token)
                res.status(200).send('cookie set with token '+token+' authenticated!!!..'); 
             }
         })
     }
 })
})

module.exports = router;