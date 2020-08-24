const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model
const {vegetableListModel} = require('../../models/vegetableList');

//setting up the api endpoint....
router.post('/addVegetableProduct',(req,res)=>{
    var vegetableProductData = new vegetableListModel({
        productName:req.body.productName,
        productDescription:req.body.productDescription,
        productPrice:req.body.productPrice,
        productImgUri:req.body.productImgUri,
        searchKeys:req.body.searchKeys
    })

    //saving the product to the database...
    vegetableProductData.save((err,doc)=>{
        if(err) res.send(err);
        else{
            res.status(200).send(doc);
        }
    })
})



module.exports = router;