const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model for placing order
const {fastFoodOrderDetailsModel} = require('../../models/fastFoodOrderDetails');


//setting up the api endpoint....
router.get('/ordersList',(req,res)=>{
  fastFoodOrderDetailsModel.find().then(data => res.status(200).send(data))
  .catch(err => console.log(err))
})



module.exports = router;