import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please porvide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please porvide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please porvide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    verifyToken: {
        type: String,
    },
    verifyTokenExpiry: {
        type: Date,
    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordTokenExpiry: {
        type: Date,
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;