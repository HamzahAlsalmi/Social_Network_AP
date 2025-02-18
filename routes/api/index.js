const router = require("express").Router();
const userRoutes = require("./userRoutes"); // Ensure correct path
const thoughtRoutes = require("./thoughtRoutes"); // Ensure correct path

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
