const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model
const {vegetableListModel} = require('../../models/vegetableList');

//setting up Api endpoint...
router.post('/search',(req,res)=>{
    var searchString  = req.body.searchString;
    //using regular expression to search...
    //IMPORTANT........READ IT
    //IMPORTANT.....READ IT
    // right now i am using the product description to find using regex , later change should be done in the schema and a keyword section should be added which will be used to implement regex searching

    vegetableListModel.find({productDescription:{$regex:searchString,$options:"$i"}})
    .then((data,err)=>{
      if(err) res.send(err);
      else{
                  res.send(data);
      }  
    })
})

// exporting the router...
module.exports = router;