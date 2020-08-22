  
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model
const {vegetableListModel} = require('../../models/vegetableList');

//setting up the api end point
router.delete('/deleteVegetableProduct/:id',(req,res)=>{
var vegetableId = req.params.id;
vegetableListModel.findByIdAndRemove(vegetableId,(err,doc)=>{
if(err) res.status(500).send(err);
else res.status(200).send(doc);
})
})

module.exports = router;
