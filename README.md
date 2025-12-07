# 📦 Proyecto Final Talento Tech 2025 - API REST con Node.js y Express - 

Este proyecto es una **API REST** desarrollada con **Node.js** y **Express**, que permite administrar productos de un catálogo en la nube.  
Incluye autenticación de credenciales con **JWT**, conexión a **Firestore (Firebase)** y manejo de errores estandarizado. 

Para información adicional ver archivo PDF.

---

🎯 Objetivo del Proyecto

Este proyecto representa el cierre de un ciclo formativo en TechLab y la consolidación de una arquitectura escalable, segura y documentada.


---

## 🚀 Funcionalidades principales

- **CRUD de productos**:

  - `GET /api/products` → Devuelve todos los productos
  - `GET /api/products/:id` → Devuelve un producto por ID
  - `POST /api/products/create` → Crea un nuevo producto
  - `PUT /api/products/:id` → Actualiza todo un producto por ID
  - `DELETE /api/products/:id` → Elimina un producto por ID

- **Autenticación**:

  - `POST /auth/login` → Devuelve un Token si las credenciales son válidas
  - `GET /auth/` → Página inicial de autenticación con botones estilizados en Tailwind CSS
  - `GET /auth/login` → Página visual en modo dark con aviso “🚧 Vista de Login en Desarrollo”

- **Manejo de errores**:

  - `404` → Rutas no definidas
  - `401 / 403` → Errores de autenticación
  - `400 / 500` → Errores de petición o servicios externos

---

## 🛠️ Tecnologías utilizadas

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [Firebase Firestore](https://firebase.google.com/docs/firestore)  
- [JWT (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken)  
- [dotenv](https://www.npmjs.com/package/dotenv)  
- [cors](https://www.npmjs.com/package/cors)  
- [bcrypt](https://www.npmjs.com/package/bcrypt)  
- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)  
- [Tailwind CSS](https://tailwindcss.com/)  

---

## 📂 Instalación

1. Clona el repositorio:

   ```bash
   git clone <url-del-repo>
   cd <nombre-del-proyecto>

2. Instalar dependencias:

npm install

3. Configurar variables de entorno:

- Copiar .env-example y renombrarlo como .env
- Completar las claves necesarias para Firebase y JWT

4. Iniciar el servidor:

npm run start

----

🧱 Estructura del proyecto

├── public/               # Contiene index.html (interfaz visual)
│   └── index.html

├── src/
│   ├── app.js            # Punto de entrada de la App
│   ├── controllers/      # Lógica de rutas
│   ├── database/         # Vacía, útil para backup de datos
│   ├── firebase/         # Conexión y configuración de Firebase-Firestore 
│   ├── middlewares/      # Lógica de Autenticación 
│   ├── models/           # Modelo de productos
│   ├── routes/           # Endpoints de productos y auth
│   ├── services/         # Lógica de negocio

├── .env-example          # Variables de entorno de ejemplo

├── .gitignore

├── package.json

├── package-lock.json

---

🌐 Interfaz pública

La carpeta public/ contiene el archivo index.html, que incluye:

- Botón para consultar productos (/products)
- Sección informativa con las rutas disponibles
- Estilos con Tailwind CSS

---



