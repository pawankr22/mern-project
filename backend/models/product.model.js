import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});