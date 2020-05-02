const router = require("express").Router();
const userRoutes = require("./users");
const orderRoutes = require("./order");
const cartRoutes = require("./cart");
// User routes
router.use("/user", userRoutes);
router.use("/order", orderRoutes);
router.use("/cart", cartRoutes);

module.exports = router;