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
const fastFoodProductList = require('./api/fastfood/productListApi'); //GET
const addFastFoodProduct  = require('./api/fastfood/addProductApi'); //POST
const deleteFastFoodProduct = require('./api/fastfood/deleteProductApi'); //DELETE
const updateFastFoodProduct = require('./api/fastfood/updateProductApi'); //POST
const placeFastFoodOrder = require('./api/fastfood/placeOrderApi'); //POST
const ordersListFastFood = require('./api/fastfood/ordersListApi'); //GET
const successfulDeliveredFastFoodOrder = require('./api/fastfood/successfulDeliveredOrders'); //DELETE


//setting up the home route....
app.get('/',(req,res)=>{
    res.status(200).send('All good! Home route for villageCosmos backend api!');

})

//calling fastFoodProductList api....
app.use('/api',fastFoodProductList);

//calling addFastFoodProduct api....
app.use('/api/add',addFastFoodProduct);

//calling deleteFastFoodProductApi....
app.use('/api/delete',deleteFastFoodProduct);

//calling placeFastFoodOrder Api....
app.use('/api/orderPlace',placeFastFoodOrder);

//calling ordersListFastFood Api....
app.use('/api/fetch',ordersListFastFood);

//calling successfulDeliveredFastFoodOrder Api....
app.use('/api/completedOrder',successfulDeliveredFastFoodOrder);

//calling updateFastFoodProductApi ....
app.use('/api/update',updateFastFoodProduct);

// starting the server..
const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server is up and running at port ${port}`);
})
