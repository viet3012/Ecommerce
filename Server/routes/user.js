const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.get("/cart/:id", userController.getCart);
router.post("/add-cart/:id", userController.postCart);
router.put("/update-cart/:id", userController.updateCart);
router.post("/delete-cart/:id", userController.deleteCart);

router.post("/order/post", userController.postOrder);
router.get("/orders", userController.getOrders);
router.get("/order/:id", userController.getOrder);
router.get("/order/:userid/:detailid", userController.getOrderDetail);

router.get("/get-dashboard", userController.getDashboard);

module.exports = router;
