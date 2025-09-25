// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBtssxR_GCQ8UY3Ozv_x1qjNuzU8zRj364",
authDomain: "pmg001-01.firebaseapp.com",
projectId: "pmg001-01",
storageBucket: "pmg001-01.appspot.com",
messagingSenderId: "595569726327",
appId: "1:595569726327:web:089baba732d97af8584772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveSSMA = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'CordinadordeSSMA'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});

export const saveSprint = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'Superintendente'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});

export const saveOprt = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'ResidenteOperativo'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});

export const saveTopo = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'Topografo'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});
    
export const saveAdmin = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'ResidenteAdministrativo'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});

export const getJobs = () => getDocs(collection(db, 'VacantesVariables'));

export const saveRRHH = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'AuxiliarRRHH'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});
    
export const saveAuxComp = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'AuxiliarCompras'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});

export const saveAuxCost = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'AuxiliarCostos'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});

export const saveAuxFin = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'AuxiliarFinanzas'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});

export const saveAuxEdif = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'AuxiliarEdificacion'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});

export const saveChof = (name, phone, email, school, experience, location, able) => 
    addDoc(collection(db, 'Choferes'), {nombre: name, telefono: phone, correo: email, estudios: school, experiencia: experience, residencia: location, disponibilidad: able});