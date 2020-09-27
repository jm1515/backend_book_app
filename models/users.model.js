const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

const userSchema = new Schema(
    {
        lastName: { type: String, required: true},
        firstName: { type: String, required: true},
        email : { type: String, required: true},
        password: { type: String, required: true},
        phoneNumber: { type: String, required: true},
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
