import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength: [3, "Fisrt Name Must Contain At Least 3 Characters!"]
    },
    lastName:{
        type: String,
        required: true,
        minlength: [3, "Last Name Must Contain At Least 3 Characters!"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Enter a Valid Email!"]
    },
    phone:{
        type: String,
        required: true,
        minlength: [10, "Phone Number Must Contain Exact 10 Digits!"],
        maxlength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    },
    message:{
        type: String,
        required: true,
        minlength: [10, "Message must contain atleast 10 characters"],
    },
});

export const Message = mongoose.model("Message",messageSchema);


