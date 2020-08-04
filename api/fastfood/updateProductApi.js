  
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model
const {fastFoodListModel} = require('../../models/fastFoodList');

//setting up the api end point
router.post('/updateFastFoodProduct/:id',(req,res)=>{

    var fastFoodId = req.params.id;
    var productName = req.body.productName;
    var productDescription = req.body.productDescription;
    var  productPrice = req.body.productPrice;
    var productImgUri = req.body.productImgUri;

    fastFoodListModel.findByIdAndUpdate(fastFoodId,{"productName":productName,"productDescription":productDescription,"productPrice":productPrice
                                            ,"productImgUri":productImgUri
},(err,doc)=>{
    if(err)res.send(err);
    else res.status(200).send(doc);
})




})

module.exports = router;
