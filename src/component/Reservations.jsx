

import Sidebar from "@/component/sidebar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase/confic";



export default function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [selectedreservations, setSelectedreservations] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);



  const [loading, setLoading] = useState(true);


   useEffect(() => {
    const fetchOrders = async () => {
      try {
        const snap = await getDocs(collection(db, "Orders"));
        const data = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setReservations(data);
      } catch {
        toast.error("Orders load nahi ho rahe");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Orders", id));
      setReservations((prev) => prev.filter((o) => o.id !== id));
      toast.success("Reservations deleted!");
    } catch {
      toast.error("Delete failed");
    }
  };

  
 
  const openEditModal = (order) => {
    setSelectedreservations(order);
    setNewStatus(order.Statusone);
    setIsModalOpen(true);
  };

  const updateStatus = async () => {
    try {
      await updateDoc(doc(db, "Orders", selectedreservations.id), {
        Statustwo: newStatus,
      });

      setReservations((prev) =>
        prev.map((ord) =>
          ord.id === selectedreservations.id ? { ...ord, Status: newStatus } : ord
        )
      );

      toast.success("Order status updated!");
      setIsModalOpen(false);
    } catch {
      toast.error("Status update failed");
    }
  };

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
    <div className="flex h-screentransition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        

        <main className="flex-1 overflow-auto p-6 transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Reservations</h1>
            
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full shadow rounded-lg">
              <thead className="sticky top-0 bg-gray-400 z-10">
                <tr className="text-black">
                  
                  <th className="py-3 px-6 text-left">Customer</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Time</th>
                  <th className="py-3 px-6 text-left">People</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((res, index) => (
                  <motion.tr
                    key={res.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-bborder-b hover:bg-gray-900"
                  >
                    
                    <td className="py-3 px-6 text-blue-400 font-medium">{res.name}</td>
                    <td className="py-3 px-6 text-fuchsia-400">{res.today}</td>
                    <td className="py-3 px-2 text-green-400 font-semibold">{res.time}</td>
                    <td className="py-6 px-6 text-yellow-100">{res.People}</td>
                    

                    <td className="py-3 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold capitalize
                        ${res.Statustwo === "pending" && "bg-yellow-100 text-yellow-800"}
                        ${res.Statustwo === "preparing" && "bg-blue-100 text-blue-700"}
                        ${res.Statustwo === "confirmed" && "bg-green-100 text-green-700"}
                        ${res.Statustwo === "cancelled" && "bg-red-100 text-red-700"}
                      `}
                      >
                        {res.Statustwo}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center flex gap-2 justify-center">
                      <button
                          onClick={() => openEditModal(res)}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(res.id)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded cursor-pointer"
                        >
                          Delete
                        </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white text-black p-6 rounded-lg w-[350px]"
            >
              <h2 className="text-xl font-semibold mb-4">Update Order Status</h2>

              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full border rounded px-3 py-2 mb-4"
              >
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={updateStatus}
                  className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
                >
                  Update
                </button>
              </div>
            </motion.div>
          </div>
        )}
        </main>
      </div>
    </div>
  );
}




