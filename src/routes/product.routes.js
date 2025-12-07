import { Router } from "express";
import {
  deleteProductById,
  getProductById,
  getProducts,
  NewProduct,
  updateProductById,
} from "../controllers/product.controllers.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/create", verifyToken, NewProduct);

router.put("/:id", verifyToken, updateProductById);

router.delete("/:id", verifyToken, deleteProductById);

export default router;
