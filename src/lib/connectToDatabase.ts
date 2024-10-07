const {mongoose} = require("mongoose");

const connection = {
  isConnected: false,
};

export const connectToDb = async () => {
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    await mongoose.connect("mongodb://localhost:27017/next14BlogApp");
    connection.isConnected = mongoose.connection.readyState;
    console.log("Connection successfully");
  } catch (err) {
    console.error("Database connection error:", err);
    throw err; 
  }
};


