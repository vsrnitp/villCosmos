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


// calling various api endpoints....(For fast food)
const fastFoodProductList = require('./api/fastfood/productListApi'); //GET
const addFastFoodProduct  = require('./api/fastfood/addProductApi'); //POST
const deleteFastFoodProduct = require('./api/fastfood/deleteProductApi'); //DELETE
const updateFastFoodProduct = require('./api/fastfood/updateProductApi'); //POST
const placeFastFoodOrder = require('./api/fastfood/placeOrderApi'); //POST
const ordersListFastFood = require('./api/fastfood/ordersListApi'); //GET
const successfulDeliveredFastFoodOrder = require('./api/fastfood/successfulDeliveredOrders'); //DELETE

// calling various api endpoints....(For vegetables)
const vegetableProductList = require('./api/vegetable/productListApi'); //GET
const addVegetableProduct  = require('./api/vegetable/addProductApi'); //POST
const deleteVegetableProduct = require('./api/vegetable/deleteProductApi'); //DELETE
const updateVegetableProduct = require('./api/vegetable/updateProductApi'); //POST
const placeVegetableOrder = require('./api/vegetable/placeOrderApi'); //POST
const ordersListVegetable = require('./api/vegetable/ordersListApi'); //GET
const successfulDeliveredVegetableOrder = require('./api/vegetable/successfulDeliveredOrders'); //DELETE

//setting up the home route....
app.get('/',(req,res)=>{
    res.status(200).send('All good! Home route for villageCosmos backend api!');

})




/******FAST FOOD SECTION*************/
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







/*********VEGETABLE SECTION*************/
//calling vegetableProductList api....
app.use('/api/vegetable',vegetableProductList);

//calling addVegetableProduct api....
app.use('/api/vegetable/add',addVegetableProduct);

//calling deleteVegetableProduct Api....
app.use('/api/vegetable/delete',deleteVegetableProduct);

//calling placeVegetableOrder Api....
app.use('/api/vegetable/orderPlace',placeVegetableOrder);

//calling ordersListVegetable Api....
app.use('/api/vegetable/fetch',ordersListVegetable);

//calling successfulDeliveredVegetableOrder Api....
app.use('/api/vegetable/completedOrder',successfulDeliveredVegetableOrder);

//calling updateVegetableProductApi ....
app.use('/api/vegetable/update',updateVegetableProduct);

// starting the server..
const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server is up and running at port ${port}`);
})
