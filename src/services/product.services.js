import {
  collection,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase/config.js";
import { ProductModel } from "../models/product.models.js";

const collectionName = "productos";

export const allProducts = async () => {
  const productsCollection = collection(db, collectionName);
  const snapshot = await getDocs(productsCollection);

  if (snapshot.empty) return [];

  return snapshot.docs.map((p) => new ProductModel({ id: p.id, ...p.data() }));
};

export const productById = async (id) => {
  const docRef = doc(db, collectionName, id);
  const docSnapshot = await getDoc(docRef);
  if (!docSnapshot.exists()) return null;
  return new ProductModel({ id: docSnapshot.id, ...docSnapshot.data() });
};

export const createNewProduct = async (data) => {
  if (
    !data.nombre ||
    !data.precio ||
    !data.banda ||
    !data.imagen ||
    !data.genero ||
    !data.discos
  ) {
    throw new Error(
      "El campo nombre, precio, banda, genero y cantidad de discos en el album son obligatorios. Además precio, stock y cantidad de discos deben ser números enteros. "
    );
  }
  const productsCollection = collection(db, collectionName);
  const docRef = await addDoc(productsCollection, {
    nombre: data.nombre,
    imagen: data.imagen,
    banda: data.banda,
    genero: data.genero,
    precio: Number(data.precio),
    fechaLanzamiento: data.fechaLanzamiento || "desconocida",
    discos: Number(data.discos),
    productora: data.productora || "desconocida",
    stock: Number(data.stock || 0),
    descripcion: data.descripcion || "desconocida",
  });
  return new ProductModel({ id: docRef.id, ...data });
};

export const updateProduct = async (id, data) => {
  const docRef = doc(db, collectionName, id);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) return null;

  await updateDoc(docRef, data);

  return { id, ...docSnapshot.data(), ...data };
};

export const deleteProduct = async (id) => {
  const docRef = doc(db, collectionName, id);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) return null;

  await deleteDoc(docRef);
  return true;
};
