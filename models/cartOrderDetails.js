const mongoose = require('mongoose');

const cartOrderDetailsReloadedSchema = mongoose.Schema({
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
    },
    orderConfirmed:{
        type:Boolean,
        default:false,
        required:true
    },
})

const cartOrderDetailsReloadedModel = mongoose.model('cartOrderDetailReloadedsModel',cartOrderDetailsReloadedSchema);

module.exports = {cartOrderDetailsReloadedModel};
