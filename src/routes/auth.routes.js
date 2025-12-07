import { Router } from "express";
import { loginController } from "../controllers/auth.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login - API REST</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 flex items-center justify-center h-screen">
      <div class="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md text-center text-white">
        <h1 class="text-2xl font-bold text-yellow-400 mb-4">
          🚧 Vista de Login en Desarrollo
        </h1>
        <p class="text-gray-300 mb-6">
          La parte visual de la autenticación está en construcción.<br/>
          Pronto podrás iniciar sesión y generar tu <span class="font-semibold">Token</span> desde este sitio.
        </p>
        <div class="space-y-3">
          <a href="/" 
             class="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition">
            Volver al Inicio
          </a>
        </div>
      </div>
    </body>
    </html>
  `);
});

router.post("/login", loginController);

export default router;
