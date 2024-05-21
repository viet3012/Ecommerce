const express = require("express");
const authController = require("../middleware/auth");
const productController = require("../controllers/product");

const router = express.Router();

router.get("/", productController.getProducts);
router.get("/get-detail/:id", productController.getProduct);
router.post("/add-product", authController.Auth, productController.addProduct);
router.delete("/delete-product", authController.Auth, productController.deleteProduct);
router.post("/edit-product/:id", authController.Auth, productController.editProduct);

module.exports = router;
