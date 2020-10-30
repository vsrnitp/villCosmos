const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model
const {vegetableOrderDetailsReloadedModel} = require('../../models/vegetableOrderDetails');

//CORS solution....
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//setting up the api end point
router.post('/deleteDeliveredVegetableProduct/:id',(req,res)=>{
var deliveredVegetableId = req.params.id;
vegetableOrderDetailsReloadedModel.findByIdAndRemove(deliveredVegetableId,(err,doc)=>{
if(err) res.status(500).send(err);
else res.status(200).send(doc);
})
})

module.exports = router;
