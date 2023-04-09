// Import the express library and create a new router object
const express = require("express");
const router = express.Router();

// Import the categoryController functions for handling HTTP requests
const {
  newCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/categoryController");

// Import the auth middleware functions for authenticating and authorizing users
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

// Define the routes for handling HTTP requests related to categories
router.route("/admin/genres/addgenre").post(newCategory);
router.route("/genres").get(getCategory);
router.route("/movies/:genreID").delete(deleteCategory);

// Export the router object so it can be used in other parts of the application
module.exports = router;
