const mongoose = require('mongoose');

const fastFoodOrderDetailsSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    productPrice:{
        type:String,
        required:true
    },
    productQuantity:{
        type:String,
        required:true
    },
    deliveryAddress:{
        type:String,
        required:true
    },
    customerMobileNo:{
        type:String,
        required:true
    },
    totalBillingAmount:{
        type:String,
        required:true
    }
})

const fastFoodOrderDetailsModel = mongoose.model('fastFoodOrderDetailsModel',fastFoodOrderDetailsSchema);

module.exports = {fastFoodOrderDetailsModel};
