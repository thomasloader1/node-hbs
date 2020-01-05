const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: String, required: true },
    date: { type: Date, default: Date.now },
    price: { type: String }
});

module.exports = mongoose.model('Product', ProductSchema);