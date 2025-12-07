import {
  allProducts,
  createNewProduct,
  deleteProduct,
  productById,
  updateProduct,
} from "../services/product.services.js";

export const getProducts = async (req, res) => {
  try {
    const products = await allProducts();
    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ mensaje: "Error al obtener los productos", error: err.mensagge });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productById(id);

    if (!product) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      mensaje: "Error al obtener el producto por <id>",
      error: err.mensagge,
    });
  }
};

export const NewProduct = async (req, res) => {
  try {
    const cNewProduct = await createNewProduct(req.body);
    res
      .status(201)
      .json({ mensaje: "Nuevo producto creado", producto: cNewProduct });
  } catch (err) {
    res.status(400).json({
      mensaje: "Error al crear un nuevo producto",
      error: err.mensage,
    });
  }
};

export const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await updateProduct(id, req.body);
    if (!update) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro el prducto para actualizar" });
    }
    res.status(200).json({ mensaje: "Producto actualizado correctamente" });
  } catch {}
};

export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProd = await deleteProduct(id);

    if (!deleteProd)
      return res.status(404).json("No se encontro el producto a eliminar");

    res.status(200).json({ mensaje: "Producto eliminado correctamente" });
  } catch (err) {
    res
      .status(500)
      .json({ mensaje: "Error al eliminar el producto", error: err.message });
  }
};
