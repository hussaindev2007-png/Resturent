import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  
  FaClock,
  FaTruck,
  FaTimesCircle,
  FaHourglassHalf,
} from "react-icons/fa";

import Sidebar from "@/users/sidebar";
import { db } from "@/firebase/confic"; 

import { useAuth } from "@/context/AuthContext";




const UserDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
   const { currentUser } = useAuth();
   const userOrders = orders.filter( current => current.uid == currentUser.uid);

   
   
   useEffect(() => {
     const fetchOrders = async () => {
      try {
        const snap = await getDocs(collection(db, "Orders"));
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(data);
      } catch (error) {
        toast.error("Orders load nahi ho rahe");
      }
      finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);


  
  

const totalOrders = userOrders.length;
console.log(totalOrders);


const pendingOrders = userOrders.filter(
  order => order.Statusone === "pending"
).length;

const preparingOrders = userOrders.filter(
  order => order.Statusone === "preparing"
).length;

const cancelledOrders = userOrders.filter(
  order => order.Statusone === "cancelled"
).length;

const deliveredOrders = userOrders.filter(
  order => order.Statusone === "complete"
).length;

  const stats = [
    {
      id: 1,
      icon: <FaShoppingCart className="text-blue-500 text-3xl" />,
      label: "My Orders",
      value: totalOrders,
    },
    
    {
      id: 3,
      icon:<FaHourglassHalf className="text-yellow-500 text-3xl" />
,
      label: "Pending Orders",
      value: pendingOrders,
    },
    {
      id: 4,
      icon: <FaTruck className="text-green-500 text-3xl" />,
      label: "Delivered Orders",
      value: deliveredOrders,
    },
    {
  id: 5,
  icon: <FaClock className="text-purple-500 text-3xl" />,
  label: "Preparing Orders",
  value: preparingOrders,
},
{
  id: 6,
  icon: <FaTimesCircle className="text-red-500 text-3xl" />,
  label: "Cancelled Orders",
  value: cancelledOrders,
},

  ];
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen ">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">
          User Dashboard
        </h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className=" shadow rounded-xl p-6 flex items-center gap-4 cursor-pointer"
            >
              {stat.icon}
              <div>
                <p className="text-sm ">
                  {stat.label}
                </p>
                <p className="text-xl font-bold">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
