const Book = require("./../models/Book");

exports.getAllBooks = async (req, res) => {
  //una busqueda sin filtros ({})
  //find metodo para encontrar los libros
  const allBooks = await Book.find({});
  res.render("books/list", {
    data: allBooks,
  });
};

exports.getBook = async (req, res) => {
  //el req es la representacion de todo lo q llego del navegador
  const singleBookID = req.params.bookID;
  const getTheBook = await Book.findById(singleBookID);
  console.log(getTheBook);
  res.render("books/single", {
    data: getTheBook,
  });
};

//crear libro-vista
exports.viewCreateBook = async (req, res) => {
  res.render("books/create");
};

//crear libro con datos del formulario
exports.createBook = async (req, res) => {
  //obtener datos del formulario
  console.log(req.body);

  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const rating = req.body.rating;

  const newBookCreated = await Book.create({
    title,
    author,
    description,
    rating,
  });

  //console.log(newBookCreated);

  res.redirect("/books");

  console.log("Datos recibidos");
};

//editar libro

exports.viewEditBook = async (req, res) => {
  //pasarle el id a la vista
  // console.log(req.params);
  const BookID = req.params.bookID;
  const foundBook = await Book.findById(BookID);
  //console.log(foundBook);
  res.render("books/edit", {
    data: foundBook,
  });
};

exports.editBook = async (req, res) => {
  //1. Necesito el Id del libro (con los paramentros)
  const bookID = req.params.bookID;

  //2. Obtener los Nuevos cambios del formulario
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const rating = req.body.rating;
  console.log(bookID);
  console.log(title, author, description, rating);

  //3. Realizar la actualizacion de datos en la DB
  //findByIdAndUpdate('ID',[NUEVOS CAMBIOS EN OBJETO],[DEVOLVER A LA VARIABLE LA ACTUALIZACION])
  const updateBook = await Book.findByIdAndUpdate(
    bookID, //id del documento
    { title, description, author, rating },
    { new: true } //devolver a la variable el documento
  );
  console.log(updateBook);
  res.redirect(`/books/${updateBook._id}`);
};

//Borado del libro
exports.deleteBook = async (req, res) => {
  //1.Identificar libro que quiero borrar
  const bookID = req.params.bookID;

  //2.Borrado en DB
  const deletedBook = await Book.findByIdAndDelete(bookID);
  console.log(deletedBook);

  //Redireccion
  res.redirect("/books");
};
