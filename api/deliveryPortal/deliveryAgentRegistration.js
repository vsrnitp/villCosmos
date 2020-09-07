const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

// bringing the database model...
const {deliveryAgentRegistrationModel} = require('../../models/deliveryAgentRegistrationData');

//setting up api endpoint.'..
router.post('/deliveryAgentRegister',(req,res)=>{
   var deliveryAgentData = new deliveryAgentRegistrationModel({
       name:req.body.name,
       deliveryZoneAddress:req.body.deliveryZoneAddress,
       uID:req.body.uID,
       userName:req.body.userName,
       password:req.body.password
   });

   //saving data to the database.....//saving token to the local storage to create the private API...
   //hashing the password before saving to the database....
   bcrypt.hash(deliveryAgentData.password,10,(err,hash)=>{
       if(err) throw(err);
       else{
           deliveryAgentData.password = hash;
           //now saving the data in the database....
           deliveryAgentData.save((err,data)=>{
               if(err) res.send(err);
               else{res.send(data)}
           })
       }
   })
})

module.exports = router;