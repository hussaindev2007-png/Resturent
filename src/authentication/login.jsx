
// import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "@/firebase/confic"; // path adjust karo
// import { BorderBeam } from "@/components/ui/border-beam";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   addDoc,
//   collection} from "firebase/firestore";
// import { db } from "@/firebase/confic";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [currentUser, setCurrentUser] = useState(null);
  

//   const emailRef = useRef(null);
//   const navigate = useNavigate();

//   // 🔹 Track user state within component
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//     });
//     return () => unsubscribe();
//   }, []);

  
   
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 🔹 Email / Password Login
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/"); 
//     } catch (err) {
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Google Login
//   const GoogleLogin = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);

//       navigate("/home"); 
//     } catch (err) {
//       setError("Google login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black px-4">
//       <div className="relative overflow-hidden w-full max-w-md rounded-2xl bg-neutral-900/90 p-8 shadow-2xl border border-white/10 backdrop-blur">

//         <h2 className="text-4xl font-extrabold mb-6 text-center text-white">
//           Welcome
//         </h2>

//         {error && (
//           <div className="bg-red-500/10 text-red-400 px-4 py-3 rounded-lg mb-5">
//             {error}
//           </div>
//         )}

//         {currentUser && (
//           <div className="text-white mb-4 text-center">
//             Logged in as: {currentUser.displayName || currentUser.email}
//             {currentUser.photoURL && (
//               <img
//                 src={currentUser.photoURL}
//                 alt="avatar"
//                 className="w-10 h-10 rounded-full inline-block ml-2"
//               />
//             )}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Email</label>
//             <input
//               ref={emailRef}
//               type="email"
//               value={email}
//                onChange={handleChange}
//               required
//               className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:ring-2 focus:ring-emerald-500"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//                onChange={handleChange}
//               required
//               className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:ring-2 focus:ring-emerald-500"
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-lg py-2.5 font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="text-center mt-6 text-sm text-gray-400">
//           Don’t have an account?{" "}
//           <Link
//             to="/signup"
//             className="text-emerald-400 hover:text-emerald-300 font-medium"
//           >
//             Sign Up
//           </Link>
//         </p>

//         <button
//           onClick={GoogleLogin}
//           disabled={loading}
//           className="mt-4 w-full flex items-center justify-center gap-3 rounded-lg py-2.5 font-semibold text-white bg-red-500 hover:bg-red-600 transition cursor-pointer"
//         >
//           {loading ? "Please wait..." : "Login with Google"}
//         </button>

//         <div className="mt-6 pt-4">
//           <center>
//             <strong className="text-gray-500 leading-relaxed text-sm">
//               <p>
//                 Email for Admin:{" "}
//                 <span className="text-yellow-600 font-medium">
//                   hussaindev@gmail.com
//                 </span>
//               </p>
//               <p>
//                 Password for Admin:{" "}
//                 <span className="text-yellow-600 font-medium">
//                   hussainali
//                 </span>
//               </p>
//             </strong>
//           </center>
//         </div>

//         <BorderBeam size={240} duration={9} />
//       </div>
//     </div>
//   );
// };




















































// import { useState, useRef, useEffect } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import { BorderBeam } from "@/components/ui/border-beam";

// export function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [role, setRole] = useState(""); 
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const emailRef = useRef(null);
//   const { login } = useAuth(); 
//   const navigate = useNavigate();

//   const ADMIN_EMAIL = "hussaindev@gmail.com";

//   useEffect(() => {
//     emailRef.current?.focus();
//   }, []);

  
  

  
//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       setError("");
//       setLoading(true);

     
//       await login(email, password);
      
     
     
      

//       if (email == ADMIN_EMAIL) {navigate("/dashboard");
      
        
//       }
       
//       else   {
//         navigate("/CheackOut");
//       }
      
//     } catch (err) {
      
//       setError( "Failed to Login Account: " +err);
//     } finally {
//       setLoading(false);
//     }
//   }


  
  

  

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black px-4">
//       <div className="relative overflow-hidden w-full max-w-md rounded-2xl bg-neutral-900/90 p-8 shadow-2xl border border-white/10 backdrop-blur">

//         <h2 className="text-4xl font-extrabold mb-2 text-center text-white">Welcome Back</h2>
//         <p className="text-center text-gray-400 mb-6">Login to continue</p>

//         {error && (
//           <div className="bg-red-500/10 text-red-400 px-4 py-3 rounded-lg mb-4 text-sm">
//             {error}
//           </div>
//         )}
 

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Email</label>
//             <input
//               ref={emailRef}
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="you@example.com"
//               className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="••••••••"
//               className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-lg py-2.5 font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 transition disabled:opacity-60 cursor-pointer"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

        

//         <p className="text-center mt-6 text-sm text-gray-400">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-emerald-400 hover:underline">
//             Sign Up
//           </Link>
//         </p>

//         <div className="mt-6 text-center text-xs text-gray-500">
//           <p>example Email: <span className="text-yellow-500">hassanali@gmail.com</span></p>
//           <p>example Password: <span className="text-yellow-500">hussainali</span></p>
//         </div>

//         <BorderBeam size={140} duration={10} />
//       </div>
//     </div>
//   );
//   }

























































// import { useState, useRef, useEffect } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import { BorderBeam } from "@/components/ui/border-beam";

// export function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const emailRef = useRef(null);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const ADMIN_EMAIL = "hussaindev@gmail.com";

//   useEffect(() => {
//     emailRef.current?.focus();
//   }, []);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     setError("");
//     setLoading(true);

//     try {
//       await login(email, password);

//       if (email === ADMIN_EMAIL) {
//         navigate("/dashboard");
//       } else {
//         navigate("/CheackOut");
//       }

//     } catch (err) {
      

      
//       switch (err.code) {
//         case "auth/invalid-credential":
//           setError("Email and  password is wrong ");
//           break;
//         default:
//           setError("Login failed. Dobara try karo");
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black px-4">
//       <div className="relative overflow-hidden w-full max-w-md rounded-2xl bg-neutral-900/90 p-8 shadow-2xl border border-white/10 backdrop-blur">

//         <h2 className="text-4xl font-extrabold mb-2 text-center text-white">
//           Welcome Back
//         </h2>
//         <p className="text-center text-gray-400 mb-6">
//           Login to continue
//         </p>

//         {error && (
//           <div className="bg-red-500/10 text-red-400 px-4 py-3 rounded-lg mb-4 text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Email</label>
//             <input
//               ref={emailRef}
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="you@example.com"
//               className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="••••••••"
//               className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-lg py-2.5 font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 transition disabled:opacity-60 cursor-pointer"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="text-center mt-6 text-sm text-gray-400">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-emerald-400 hover:underline">
//             Sign Up
//           </Link>
//         </p>

//         <div className="mt-6 text-center text-xs text-gray-500">
//           <p>
//             example Email:{" "}
//             <span className="text-yellow-500">hassanali@gmail.com</span>
//           </p>
//           <p>
//             example Password:{" "}
//             <span className="text-yellow-500">hussainali</span>
//           </p>
//         </div>

//         <BorderBeam size={140} duration={10} />
//       </div>
//     </div>
//   );
// }















































import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { BorderBeam } from "@/components/ui/border-beam";
import { FcGoogle } from "react-icons/fc";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);
  const navigate = useNavigate();

  const { login, googleLogin } = useAuth();

  const ADMIN_EMAIL = "hussaindev@gmail.com";

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // ✅ EMAIL / PASSWORD LOGIN
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);

      if (email === ADMIN_EMAIL) {
        navigate("/dashboard");
      } else {
        navigate("/CheackOut");
      }
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          setError("Email ya password ghalat hai");
          break;
        case "auth/user-not-found":
          setError("User exist nahi karta");
          break;
        default:
          setError("Login failed. Dobara try karo");
      }
    } finally {
      setLoading(false);
    }
  }

  // ✅ GOOGLE LOGIN
  async function handleGoogleLogin() {
    setError("");
    setLoading(true);

    try {
      const result = await googleLogin();
      const userEmail = result.user.email;

      if (userEmail) {
        
        navigate("/CheackOut");
      } 
    } catch (err) {
      setError("Google login failed. Dobara try karo");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black px-4">
      <div className="relative overflow-hidden w-full max-w-md rounded-2xl bg-neutral-900/90 p-8 shadow-2xl border border-white/10 backdrop-blur">

        <h2 className="text-4xl font-extrabold mb-2 text-center text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Login to continue
        </p>

        {error && (
          <div className="bg-red-500/10 text-red-400 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {/* EMAIL LOGIN */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              ref={emailRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-2.5 font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 transition cursor-pointer disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* GOOGLE LOGIN */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 rounded-lg py-2.5 font-semibold bg-gray-700 text-black hover:opacity-80 transition  cursor-pointer disabled:opacity-60"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-center mt-6 text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-emerald-400 hover:underline">
            Sign Up
          </Link>
        </p>

        <BorderBeam size={140} duration={10} />
      </div>
    </div>
  );
}
