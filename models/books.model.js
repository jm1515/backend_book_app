const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

const bookSchema = new Schema(
    {
        title: { type: String, required: true},
        author: { type: String, required: true},
        bestseller : {type: Boolean, default: false},
        year: { type: String},
        price: {type: String},
        description: { type: String, required: true},
        comment: { type: String, required: false}
    },
    { timestamps: true }
);

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
