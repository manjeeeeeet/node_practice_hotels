import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour', 'savory', 'bitter'],
        required: true,
    },
    isDrink: {
        type: Boolean,
        default: false,
        required: true,
    },
    ordersCount: {
        type: Number,
        default: 0,
    },
});

export default mongoose.model("menuItem", menuItemSchema);
