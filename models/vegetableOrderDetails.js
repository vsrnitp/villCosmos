const mongoose = require('mongoose');

const vegetableOrderDetailsReloadedSchema = mongoose.Schema({
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
    },
    timeOfOrder:{
        type:Date,
        default:Date.now()
    }
})

const vegetableOrderDetailsReloadedModel = mongoose.model('vegetableOrderDetailReloadedsModel',vegetableOrderDetailsReloadedSchema);

module.exports = {vegetableOrderDetailsReloadedModel};
