//1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const bookController = require("./../controllers/bookController");

//2. RUTEO CON BASE URL
//crear un libro-vista
//GET
router.get("/create", bookController.viewCreateBook);

//Crear libro-ruta para el formulario
//router.post: recibir datos de un form
//POST
router.post("/create", bookController.createBook);

//lectura de los libros creados
router.get("/", bookController.getAllBooks);

//lectura de un libreo especifico
//: ---> indica que cualquier parametro despues de books va a ejecutar el segundo argumento ( bookController.getBook)
//dinamicos :-->final de la ruta
router.get("/:bookID", bookController.getBook);

//Edit
//Editar un libro
router.get("/:bookID/edit", bookController.viewEditBook);
router.post("/:bookID/edit", bookController.editBook);

//Borrar un libro especifico
router.post("/:bookID/delete", bookController.deleteBook);
//4. EXPORTACION
module.exports = router;
