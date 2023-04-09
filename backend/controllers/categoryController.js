// Import the Category model and error handling middleware
const Category = require("../models/category");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create a new category in the database
exports.newCategory = catchAsyncErrors(async (req, res, next) => {
  // Extract the category name from the request body
  const { name } = req.body;
   // Create a new Category object with the given name and save it to the database
  const category = await Category.create({ name });
  // If the category is not saved, send an error response with a status code of 404
  if (!category) {
    return next(new ErrorHandler("User not found with this email", 404));
  }
  // If the category is successfully saved, send a success response with the newly created category object
  res.status(201).json({
    success: true,
    category,
  }); 
});

// Retrieve all categories from the database
exports.getCategory = catchAsyncErrors(async (req, res, next) => {
  // Use the "find" method of the Category model to get all categories
  const category = await Category.find();
// Send a success response with an array of category objects
  res.status(200).json({
    success: true,
    category,
  });
});

// Delete a category from the database
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
   // Find the category with the given ID in the database using the "findById" method
  const category = await Category.findById(req.params.genreID);
  // If the category is not found, send an error response with a status code of 404
  if (!category) {
    return next(new ErrorHandler("Product not found", 404));
  }
 // If the category is found, remove it from the database using the "remove" method
  await category.remove();
 // Send a success response with a message
  res.status(200).json({
    success: true,
    message: "Product is deleted.",
  });
});
