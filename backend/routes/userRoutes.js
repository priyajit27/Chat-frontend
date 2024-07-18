const express = require("express");
const {registerUser,authUser,allUsers} = require("../controllers/userControllers");
const {protect} = require("../middleware/authMiddleware");
const router=express.Router();

rou"/").post(registerUser).get(protect,allUsers);
router.post("/login", authUser);ter.route(
module.exports = router;