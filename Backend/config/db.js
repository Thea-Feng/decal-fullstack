const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fullstack-project";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
