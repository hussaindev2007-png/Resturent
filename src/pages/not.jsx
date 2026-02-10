import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const NotFound = () => {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
     
     
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center"
      >
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-8xl font-extrabold text-purple-600"
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-bold mt-2 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/home"
          className="inline-block mt-6 px-8 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition"
        >
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
