export class ProductModel {
  constructor({
    id,
    nombre,
    imagen,
    banda,
    genero,
    precio,
    fechaLanzamiento,
    discos,
    productora,
    stock,
    descripcion,
  }) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.banda = banda;
    this.genero = genero;
    this.precio = precio;
    this.fechaLanzamiento = fechaLanzamiento;
    this.discos = discos;
    this.productora = productora;
    this.stock = stock;
    this.descripcion = descripcion;
  }
}
