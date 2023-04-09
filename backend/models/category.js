// Import the mongoose library
const mongoose = require("mongoose");

// Define the category schema
const categorySchema = new mongoose.Schema({
   // Define a single field "name" of type "string"
  name: {
    type: "string",
    
    // required: true,
  },
});
// Export the schema as a model called "category"
module.exports = mongoose.model("category", categorySchema);
 