const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Manager",
    },
    name: String,
    price: Number,
    description: String,
    availability: String,
    rating: String,
    
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
