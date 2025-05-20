const mongoose=require("mongoose");
const { TIMESTAMP } = require("mysql/lib/protocol/constants/types");

const contactSchema=mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please add the contact name"],
    },
    email:{
        type: String,
        required: [true,"please add the contact email address"]
    },
    phone:{
        type: String,
        required: [true,"please add the phone number"]

    },
},{
    timestamps:true,
});

module.exports=mongoose.model("Contact",contactSchema);

