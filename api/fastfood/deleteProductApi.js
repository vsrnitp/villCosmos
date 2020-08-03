  
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model
const {fastFoodListModel} = require('../../models/fastFoodList');

//setting up the api end point
router.post('/deleteFastFoodProduct/:id',(req,res)=>{
var fastFoodId = req.params.id;
fastFoodListModel.findByIdAndRemove(fastFoodId,(err,doc)=>{
if(err) res.status(500).send(err);
else res.status(200).send(doc);
})
})

module.exports = router;
