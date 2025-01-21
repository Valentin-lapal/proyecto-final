import { 
  getFirestore,
  query,
  where,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc}
from "firebase/firestore"
import { app } from "./config"
import Swal from 'sweetalert2'


const db = getFirestore(app);

export const getItems = async (setItems) => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = []
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    });

    setItems(items)
}

export const getItemsByCategory = async (category, setItems) => {
  const q = query(collection(db, "items"), where("category", "==", category));
  const items = []
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push(doc.data())
  });

  setItems(items)
}



export const getItem = async (id, setItem) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setItem(docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

} 


export const createOrden = async (order) => {

  try {
    const docRef = await addDoc(collection(db, "orders"), order)
    const doubleCheckIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" fill="currentColor" /></svg>'
    Swal.fire({
      title: `Su numero ID es: ${docRef.id}`,
      icon: 'success',
      iconHtml: doubleCheckIcon,
      customClass: {
        icon: 'rotate-y',
      }
    });
  } catch (e) {
    console.error("Ocurrio un error: ", e);
  }
}
