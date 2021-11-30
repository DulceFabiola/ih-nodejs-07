//1. IMPORTACIONES
const mongoose = require("mongoose");

//2.SCHEMA
//requisitos para crear un libro
const bookSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number,
  },
  {
    timestamps: true, //Establecer la fecha en la cual fue creado
  }
);
//3. MODELO
const Book = mongoose.model("Book", bookSchema);
//4. EXPORTACION
module.exports = Book;
