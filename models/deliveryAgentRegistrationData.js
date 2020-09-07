const mongoose = require('mongoose');

const deliveryAgentRegistrationSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    deliveryZoneAddress:{
        type:String,
        required:true
    },
    uID:{
        type:String,
        required:true
    },
    dateOfJoining:{
        type:Date,
        default:Date.now()
    },
    userName:{
        type:String,
        required:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
    }
})

const deliveryAgentRegistrationModel = mongoose.model('deliveryAgentRegistrationModel',deliveryAgentRegistrationSchema);

module.exports = {deliveryAgentRegistrationModel};