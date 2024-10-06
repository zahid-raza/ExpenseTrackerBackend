const mongoos = require("mongoose");
const connectDB = async () => {
  try {
    await mongoos
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("Database connected!");
      })
      .catch((err) => {
        console.log("Error while connecting to database ->", err);
      });
  } catch (error) {
    console.log("Not Connected!!");
  }
};
module.exports = connectDB;
