import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Your email address is invalid."
        }
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);

export default User;