import Sidebar from "@/users/sidebar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/confic";
import { useAuth } from "@/context/AuthContext";

export default function UserOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      if (!currentUser) return; 

      try {
        const ordersRef = collection(db, "Orders");
        const q = query(ordersRef, where("uid", "==", currentUser.uid));

        const snap = await getDocs(q);
        const data = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setOrders(data);
      } catch (err) {
        toast.error("Orders load nahi ho rahe");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentUser]);

  if (loading || !currentUser) {
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
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

        {orders.length === 0 ? (
          <p className="text-gray-400">No orders found!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg">
              <thead className="bg-gray-400 sticky top-0 z-10">
                <tr className="text-black text-sm">
                  <th className="py-2 px-4 text-left">Customer</th>
                  <th className="py-2 px-4 text-left">Image</th>
                  <th className="py-2 px-4 text-left">Item</th>
                  <th className="py-2 px-4 text-left">Gift</th>
                  <th className="py-2 px-4 text-left">Qty</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {orders.map((ord, index) => (
                  <motion.tr
                    key={ord.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b hover:bg-gray-900"
                  >
                    <td className="py-2 px-4 text-blue-500 font-medium">
                      {ord.name}
                    </td>

                    <td className="py-2 px-4">
                      <div className="flex flex-col gap-1">
                        {ord.Item?.map((item, i) => (
                          <img
                            key={i}
                            src={item.image}
                            alt={item.title}
                            className="w-10 h-10 rounded object-cover"
                          />
                        ))}
                      </div>
                    </td>

                    <td className="py-2 px-4">
                      {ord.Item?.map((item, i) => (
                        <p key={i} className="font-semibold text-blue-600">
                          {item.title}
                        </p>
                      ))}
                    </td>

                    <td className="py-2 px-4 text-fuchsia-400">
                      {ord.Item?.map((item, i) => (
                        <p key={i}>{item.CardGifts || "—"}</p>
                      ))}
                    </td>

                    <td className="py-2 px-4 text-green-500 font-semibold text-center">
                      {ord.Item?.map((item, i) => (
                        <p key={i}>{item.quantity}</p>
                      ))}
                    </td>

                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold capitalize
                          ${ord.Statusone === "pending" && "bg-yellow-100 text-yellow-800"}
                          ${ord.Statusone === "preparing" && "bg-blue-100 text-blue-700"}
                          ${ord.Statusone === "complete" && "bg-green-100 text-green-700"}
                          ${ord.Statusone === "cancelled" && "bg-red-100 text-red-700"}
                        `}
                      >
                        {ord.Statusone}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
























































// import Sidebar from "@/users/sidebar";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/firebase/confic";
// import { useAuth } from "@/context/AuthContext";

// export default function UserOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { currentUser } = useAuth();


//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const snap = await getDocs(collection(db, "Orders"));
//         const data = snap.docs.map((d) => ({
//           id: d.id,
//           ...d.data(),
//         }));
//         setOrders(data);
//       } catch (err) {
//         toast.error("Orders load nahi ho rahe");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen w-full">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//           className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen">
//       <Sidebar />

//       <main className="flex-1 p-6 overflow-auto">
//         <h1 className="text-2xl font-bold mb-6">Orders</h1>

//         <div className="overflow-x-auto">
//           <table className="min-w-full border rounded-lg">
//             <thead className="bg-gray-400 sticky top-0 z-10">
//               <tr className="text-black text-sm">
//                 <th className="py-2 px-4 text-left">Customer</th>
//                 <th className="py-2 px-4 text-left">Image</th>
//                 <th className="py-2 px-4 text-left">Item</th>
//                 <th className="py-2 px-4 text-left">Gift</th>
//                 <th className="py-2 px-4 text-left">Qty</th>
//                 <th className="py-2 px-4 text-left">Status</th>
//               </tr>
//             </thead>

//             <tbody className="text-sm">
//               {orders.map((ord, index) => (
//                 <motion.tr
//                   key={ord.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.05 }}
//                   className="border-b hover:bg-gray-900"
//                 >
//                   {/* Customer */}
//                   <td className="py-2 px-4 text-blue-500 font-medium">
//                     {ord.name}
//                   </td>

//                   {/* Image */}
//                   <td className="py-2 px-4">
//                     <div className="flex flex-col gap-1">
//                       {ord.Item?.map((item, i) => (
//                         <img
//                           key={i}
//                           src={item.image}
//                           alt={item.title}
//                           className="w-10 h-10 rounded object-cover"
//                         />
//                       ))}
//                     </div>
//                   </td>

//                   {/* Item Name */}
//                   <td className="py-2 px-4">
//                     {ord.Item?.map((item, i) => (
//                       <p key={i} className="font-semibold text-blue-600">
//                         {item.title}
//                       </p>
//                     ))}
//                   </td>

//                   {/* Gift */}
//                   <td className="py-2 px-4 text-fuchsia-400">
//                     {ord.Item?.map((item, i) => (
//                       <p key={i}>{item.CardGifts || "—"}</p>
//                     ))}
//                   </td>

//                   {/* Quantity */}
//                   <td className="py-2 px-4 text-green-500 font-semibold text-center">
//                     {ord.Item?.map((item, i) => (
//                       <p key={i}>{item.quantity}</p>
//                     ))}
//                   </td>

//                   {/* Status */}
//                   <td className="py-2 px-4">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-semibold capitalize
//                         ${ord.Statusone === "pending" && "bg-yellow-100 text-yellow-800"}
//                         ${ord.Statusone === "preparing" && "bg-blue-100 text-blue-700"}
//                         ${ord.Statusone === "complete" && "bg-green-100 text-green-700"}
//                         ${ord.Statusone === "cancelled" && "bg-red-100 text-red-700"}
//                       `}
//                     >
//                       {ord.Statusone}
//                     </span>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }
