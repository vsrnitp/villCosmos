const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model
const {fastFoodOrderDetailsReloadedModel} = require('../../models/fastFoodOrderDetails');

//setting up the api end point
router.delete('/deleteDeliveredFastFoodProduct/:id',(req,res)=>{
var deliveredFastFoodId = req.params.id;
fastFoodOrderDetailsReloadedModel.findByIdAndRemove(deliveredFastFoodId,(err,doc)=>{
if(err) res.status(500).send(err);
else res.status(200).send(doc);
})
})

module.exports = router;
