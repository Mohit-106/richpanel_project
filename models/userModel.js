const mongoose = require('mongoose');
let secrets = require("../secret");
const bcrypt = require('bcrypt');

mongoose
    .connect(secrets.DB_LINK)
    .then(function () {
        console.log("connected");
    })
    .catch(function (err) {
        console.log("error", err);
    })
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is not send"],
    },
    email: {
        type: String,
        required: [true, "email is missing"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is missing"]
    },
    confirmPassword: {
        type: String,
        required: [true, "confirmPassword is missing "],
        validate: {
            validator: function () {
                return this.password == this.confirmPassword;
            },
            message: "password miss match"
        },
    },
    profileImage: {
        type: String,
        default: "dp.png",
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    },
    role :{
        type:String,
        enum:['admin','user','restaurantowner'],
        default:'user'
    }
})

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const FooduserModel = mongoose.model('FooduserModel', userSchema);
module.exports = FooduserModel;
