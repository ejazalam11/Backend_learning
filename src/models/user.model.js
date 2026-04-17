import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        maxlength: 30,
        minlength: 1,
    },
    password: {
        type: String,
        required: true,
       
        maxlength: 30,
        minlength: 6,
    },

    email: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    timestamps: true,
});

const User = mongoose.model("User", userSchema);