const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

//bring out the database model
const {vegetableListModel} = require('../../models/vegetableList');

//setting up the api endpoint...
router.get('/vegetableList',(req,res)=>{
    
    vegetableListModel.find().then(data => res.status(200).send(data))
    .catch(err => console.log(err))
})

// exporting the router...
module.exports = router;