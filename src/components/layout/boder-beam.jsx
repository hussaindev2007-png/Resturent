// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { BorderBeam } from "@/components/ui/border-beam"

// export  function Component() {
//   return (
//     <Card className="relative w-[350px] overflow-hidden">
//       <CardHeader>
//         <CardTitle>Login</CardTitle>
//         <CardDescription>
//           Enter your credentials to access your account.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" placeholder="Enter your email" />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//               />
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button variant="outline">Register</Button>
//         <Button>Login</Button>
//       </CardFooter>
//       <BorderBeam duration={8} size={100} />
//     </Card>
//   )
// }























































































// import { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import { BorderBeam } from "@/components/ui/border-beam";

// export  function Component() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       setError("");
//       setLoading(true);
//       await login(email, password);
//       navigate("/home");
//     } catch (err) {
//       setError("Failed to log in: " + err.message);
//     }
//     setLoading(false);
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      
//       {/* 🔥 CARD */}
//       <div className="relative overflow-hidden bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">

//         <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
//           Login
//         </h2>

//         {error && (
//           <div className="bg-red-200 text-red-800 px-4 py-3 rounded-lg mb-5 font-medium">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 mb-2 font-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2 font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2.5 rounded-lg font-semibold text-white transition ${
//               loading
//                 ? "bg-blue-400"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="text-center mt-6 text-gray-600">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-blue-600 font-semibold">
//             Sign up
//           </Link>
//         </p>

//         <div className="mt-6 pt-4 relative">
         
//           <hr className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 border-0 rounded mb-4" />

//           <center>
//             <strong className="text-gray-700 leading-relaxed text-sm">
//               <p>Email for user: <span className="text-purple-600 font-medium">hussaindev@gmail.com</span></p>
//               <p>Password: <span className="text-purple-600 font-medium">hussainali</span></p>
//             </strong>
//           </center>
//         </div>

//         {/* ✨ MAGIC UI BORDER */}
//         <BorderBeam size={400} duration={5} />
//       </div>
//     </div>
//   );
// }



























































