// 1. IMPORTACIONES
const express = require("express");
const app = express();

const hbs = require("hbs");

//importacion de la db
const connectDB = require("./config/db");

require("dotenv").config();

// 2. MIDDLEWARES
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.urlencoded({ extended: true }));

connectDB();

// 3. RUTEO
// app.get("/", (req, res) => {
// 	console.log("hola")
// })
app.use("/books", require("./routes/books"));

app.use("/", require("./routes/index"));

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
  console.log(`Corriendo en el puerto ${process.env.PORT}`);
});
