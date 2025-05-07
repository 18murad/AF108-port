import product from ".productModel.js";
import mongoose from "mongoose";


export const addProduct = async (req, res) => {
    try {
        let newUser = new product(req.body);
        await newUser.save();

        return res
        .status(201)
        .send({message: "Product Created success", data: newUser});

    } catch (error) {
        return res.status(500) .send("Server error");
    }
};

export const getProducts = async (req, res) => {
    try {
      const products = await product.find();
        res.status(200).send(products);
    } catch (error) {
        return res.status(500) .send("Server error");
    }
  };

  export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
          .status(404)
          .json({ success: false, message: "Invalid product id" });
      }
      const findProduct = await product.findById(id);
      if (!findProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }
      return res.status(200).json({ success: true, product: findProduct });
    } catch (error) {
      return res.status(500) .send("Server error");
    }
  };

  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
          .status(404)
          .json({ success: false, message: "Invalid product id" });
      }
      const deleteProduct = await product.findByIdAndDelete(id);
      if (!deleteProduct) {
        return res
          .status(400)
          .json({ success: false, message: "Product not deleted...!" });
      }
    } catch (error) {
      return res.status(500) .send("Server error");
    }
  };

  export const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
          .status(404)
          .json({ success: false, message: "Invalid product id" });
      }
      const updatedProduct = await product.findByIdAndUpdate(id, req.body);
      if (!updatedProduct) {
        return res
          .status(400)
          .json({ success: false, message: "Product not updated...!" });
      } else {
        return res
          .status(200)
          .json({ success: true, message: "Product updated successfully" });
      }
    } catch (error) {
      return res.status(500) .send("Server error");
    }
  };