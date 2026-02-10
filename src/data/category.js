


// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase/confic";
// import { useState, useEffect } from "react";

// export const useCategories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const colRef = collection(db, "category");

//     const unsub = onSnapshot(colRef, (snapshot) => {
//       const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setCategories(data);
//       setLoading(false);
//     });

//     return () => unsub(); 
//   }, []);

//   return { categories, loading };
// };






import { useState, useEffect } from "react";
import { collection, onSnapshot, addDoc,  } from "firebase/firestore";
import { db } from "../firebase/confic";

export const useCategories = () => {
  const [category, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const colRef = collection(db, "category");
    const unsub = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(data);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  
  const addCategory = async (title) => {
    if (!title) return;
    try {
      await addDoc(collection(db, "category"), { category});
      
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };
return {
    category,
    loading,
    addCategory,
   
  };
};
