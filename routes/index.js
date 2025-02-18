const router = require("express").Router();
const apiRoutes = require("./api"); // Ensure this is correctly importing the API routes

router.use("/api", apiRoutes); // Attach API routes under /api

module.exports = router;
