import express from "express";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use(cors());

app.use(["/products", "/productos"], productRoutes);
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "ruta no encontrada" });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>
  console.log(`Servidor activo en: http://localhost:${PORT}`)
);
