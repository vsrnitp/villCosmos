const mongoose = require('mongoose');

const vegetableListSchema = mongoose.Schema({
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
    },
    searchKeys:{
        type:String,
        required:true
    }
})

const vegetableListModel = mongoose.model('vegetableListModel',vegetableListSchema);

module.exports = {vegetableListModel};