const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model for placing order
const {cartOrderDetailsReloadedModel} = require('../../models/cartOrderDetails');


//setting up the api endpoint....
//calling cart order details based on customer mobile no...
router.get('/ordersList/:mobNo',(req,res)=>{
  cartOrderDetailsReloadedModel.find({"customerMobileNo":req.params.mobNo,"orderConfirmed":false}).then(data => res.status(200).send(data))
  .catch(err => console.log(err))
})



module.exports = router;
