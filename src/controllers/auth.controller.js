import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { db } from "../firebase/config.js"; // inicializado con firebase-admin
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const SECRET_KEY = process.env.SECRET_KEY_JWT;

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario en Firestore por campo "email"
    const q = query(collection(db, "usuarios"), where("email", "==", email));
    const snapShot = await getDocs(q);

    if (snapShot.empty) {
      return res
        .status(401)
        .json({ error: "El email ingresado no está registrado" });
    }

    // Tomar el primer documento encontrado
    const doc = snapShot.docs[0];
    const user = doc.data();

    // Validar contraseña contra el hash
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Generar JWT con datos del usuario
    const token = jwt.sign(
      {
        id: doc.id, // ID autogenerado del documento
        nombre: user.nombre, // nombre guardado en Firestore
        email: user.email, // email del usuario
        rol: user.rol, // rol (admin, user, etc.)
      },
      SECRET_KEY,
      { expiresIn: "4h" } // expira en 4 horas
    );

    // Respuesta con el token
    res.status(200).json({
      message: `Bienvenido ${user.nombre}, autenticación exitosa, tienes 4hs de uso completo.`,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
