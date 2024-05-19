const mongoose = require("mongoose");

try {
  mongoose.connect("mongodb://localhost:27017/Shivan-Dhoop-Ecom");

  console.log("Database Connected");
} catch (error) {
  console.log("Database not connected", error);
}
