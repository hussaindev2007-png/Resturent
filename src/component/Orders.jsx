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


export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");
   
   

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const snap = await getDocs(collection(db, "Orders"));
        const data = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setOrders(data);
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
      setOrders((prev) => prev.filter((o) => o.id !== id));
      toast.success("Order deleted!");
    } catch {
      toast.error("Delete failed");
    }
  };

  const openEditModal = (order) => {
    setSelectedOrder(order);
    setNewStatus(order.Statusone);
    setIsModalOpen(true);
  };

  const updateStatus = async () => {
    try {
      await updateDoc(doc(db, "Orders", selectedOrder.id), {
        Statusone: newStatus,
      });

      setOrders((prev) =>
        prev.map((ord) =>
          ord.id === selectedOrder.id
            ? { ...ord, Statusone: newStatus }
            : ord
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
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>

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
                <th className="py-2 px-4 text-center">Actions</th>
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

                  <td className="py-2 px-4 text-center">
                    <div className="flex justify-center gap-1">
                      <button
                        onClick={() => openEditModal(ord)}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(ord.id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white text-black p-6 rounded-lg w-[350px]"
            >
              <h2 className="text-xl font-semibold mb-4">
                Update Order Status
              </h2>

              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full border rounded px-3 py-2 mb-4"
              >
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="complete">Complete</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover: cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={updateStatus}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover: cursor-pointer"
                >
                  Update
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}
