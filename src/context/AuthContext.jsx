// import { createContext, useContext, useEffect, useState } from 'react';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,

//   onAuthStateChanged
// } from 'firebase/auth';
// import { auth } from '../firebase/confic';

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   function signup(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function logout() {
//     return signOut(auth);
//   }
  

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     signup,
//     login,
//     logout
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }


















// import { createContext, useContext, useEffect, useState } from 'react';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut
// } from 'firebase/auth';
// import { auth } from '../firebase/confic';

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   // const [role, setRole] = useState(null); 
//   const [loading, setLoading] = useState(true);

//   function signup(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password)
//       // .then(() => setRole(userRole));
//   }

//   function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password)
//       // .then(() => setRole(userRole)); 
//   }

//   function logout() {
//     // setRole(null); 
//     return signOut(auth);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     // role,
//     signup,
//     login,
//     logout
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading  && children}
//     </AuthContext.Provider>
//   );
// }


















































// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../firebase/confic";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ✅ SIGNUP WITH FIRST NAME
//   async function signup(email, password, firstName) {
//     const result = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     // 🔥 save first name in firebase user profile
//     await updateProfile(result.user, {
//       displayName: firstName,
//     });

//     setCurrentUser({
//       ...result.user,
//       displayName: firstName,
//     });

//     return result;
//   }

//   function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function logout() {
//     return signOut(auth);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     signup,
//     login,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }



























































import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/confic";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ SIGNUP
  async function signup(email, password, firstName) {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(result.user, {
      displayName: firstName,
    });

    setCurrentUser({
      ...result.user,
      displayName: firstName,
    });

    return result;
  }

  // ✅ EMAIL LOGIN
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // ✅ GOOGLE LOGIN
  function googleLogin() {
    return signInWithPopup(auth, googleProvider);
  }

  // ✅ LOGOUT
  function logout() {
    return signOut(auth);
  }

  // ✅ AUTH STATE LISTENER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
