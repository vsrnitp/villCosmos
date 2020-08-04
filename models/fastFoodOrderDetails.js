const mongoose = require('mongoose');

const fastFoodOrderDetailsReloadedSchema = mongoose.Schema({
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

const fastFoodOrderDetailsReloadedModel = mongoose.model('fastFoodOrderDetailReloadedsModel',fastFoodOrderDetailsReloadedSchema);

module.exports = {fastFoodOrderDetailsReloadedModel};
