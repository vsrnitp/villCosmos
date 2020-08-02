const express = require('express');
const mongoose = require('mongoose');



// initializing the APP.....
const app = express();


// connecting to the database (mongoDB)...
const databaseURL = 'mongodb+srv://root:ToyMe23Hell@cluster0.b2w22.mongodb.net/hippo?retryWrites=true&w=majority'
mongoose.connect(databaseURL,{useNewUrlParser : true})
.then(()=>{
    console.log('Database connected succesfully...')
}).catch((err)=>{
    console.log(err);
})


// calling various api endpoints....
const fastFoodProductList = require('./api/fastfood/productListApi');
const addFastFoodProduct  = require('./api/fastfood/addProductApi');


//setting up the home route....
app.get('/',(req,res)=>{
    res.status(200).send('All good! Home route for villageCosmos backend api!');

})

//calling fastFoodProductList api....
app.use('/api',fastFoodProductList);

//calling addFastFoodProduct api....
app.use('/api/add',addFastFoodProduct);

// starting the server..
const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server is up and running at port ${port}`);
})