const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model
const {fastFoodListModel} = require('../../models/fastFoodList');

//setting up the api endpoint....
router.post('/addFastFoodProduct',(req,res)=>{
    var fastFoodProductData = new fastFoodListModel({
        productName:req.body.productName,
        productDescription:req.body.productDescription,
        productPrice:req.body.productPrice,
        productImgUri:req.body.productImgUri,
        searchKeys:req.body.searchKeys
    })

    //saving the product to the database...
    fastFoodProductData.save((err,doc)=>{
        if(err) res.send(err);
        else{
            res.status(200).send(doc);
        }
    })
})



module.exports = router;