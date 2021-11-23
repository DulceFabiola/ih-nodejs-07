const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    //permite utilizar el ultimo formato  nuevo de mongoDB
    useNewUrlParser: true,
    //vocabulario de mongoose
    useUnifiedTopology: true,
  });

  console.log("Base de datos conectada");
};

module.exports = connectDB;
