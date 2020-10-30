const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model for placing order
const {fastFoodOrderDetailsReloadedModel} = require('../../models/fastFoodOrderDetails');
const {vegetableOrderDetailsReloadedModel} = require('../../models/vegetableOrderDetails');


//CORS solution....
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
 // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//setting up the api endpoint.... (THIS SHOULD BE A PRIVATE API ENDPOINT) but for the time being making it public.....
router.get('/ordersList',(req,res)=>{

 fastFoodOrderDetailsReloadedModel.find().then(data => {
   //res.status(200).send(data)
  vegetableOrderDetailsReloadedModel.find().then(data1=>{
    res.status(200).send(data1);
  })
})
  .catch(err => console.log(err))
})



module.exports = router;
