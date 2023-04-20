class Libro {
  constructor(titulo, autor, anio, genero, valoracion, id) {
    this.titulo = titulo;
    this.auto = autor;
    this.anio = parseInt(anio);
    this.genero = genero;
    this.valoracion = parseInt(valoracion);
    this.id = id;
  }

  asignarId(array) {
    this.id = array.length;
  }

  valorar(valoracion) {
    this.valoracion = parseInt(valoracion);
  }
}

const libros = [
  new Libro("American Gods", "Neil", 2001, "Fantasia", 6, 1),
  new Libro("Nemesis", "Agatha Christie", 1971, "Misterio", 8, 2),
  new Libro(
    "Los elefantes pueden recordar",
    "Agatha Christie",
    1972,
    "Misterio",
    7,
    3
  ),
  new Libro("David Copperfield", "Charles Dickens", 1950, "Novela", 8, 4),
  new Libro("Narciso y Golmundo", "Hernan Hesse", 1930, "Novela", 9, 5),
  new Libro("Los Borgia", "Mario Puzo", 2001, "Novela Historica", 9, 6),
  new Libro("El Hobbit", "J.R.R. Tolkien", 1937, "Novela fantastica", 10, 7),
];
