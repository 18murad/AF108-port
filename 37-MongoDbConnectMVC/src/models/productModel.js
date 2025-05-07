import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    },
    { collection: "Products", timestamps: true}
);

const product = mongoose.model("Product", productSchema);

export default product;
