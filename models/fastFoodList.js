const mongoose = require('mongoose');

const fastFoodListSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true,
        unique:1
    },
    productDescription:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    productImgUri:{
        type:String,
        required:true
    }
})

const fastFoodListModel = mongoose.model('fastFoodListModel',fastFoodListSchema);

module.exports = {fastFoodListModel};