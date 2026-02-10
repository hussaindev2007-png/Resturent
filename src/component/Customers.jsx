

// import Sidebar from "./sidebar";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
//   addDoc,
// } from "firebase/firestore";
// import { db } from "@/firebase/confic";




// export default function Customers() {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);


  
//  useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const snap = await getDocs(collection(db, "Orders"));
//         const data = snap.docs.map((d) => ({
//           id: d.id,
//           ...d.data(),
//         }));
//         setCustomers(data);
//       } catch {
//         toast.error("Customers load nahi ho rahe");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCustomers();
//   }, []);
//   const handleDelete = (id) => {
   

//     try {
//         deleteDoc(doc(db, "Orders", id));
//       setCustomers((prev) => prev.filter((o) => o.id !== id));
//       toast.success("Customer deleted!");
//     } catch {
//       toast.error("Delete failed");
//     }
//   };
// const handleEdit = async (id) => {
//     const customerRef = doc(db, "Orders", id);

//     const newName = prompt("Enter new name:");
//     const newEmail = prompt("Enter new email:");
//     const newPhone = prompt("Enter new phone number:");
//     const newOrders = parseInt(prompt("Enter total orders:"), 10);

//     if (!newName || !newEmail || !newPhone || isNaN(newOrders)) {
//       toast.error("All fields are required and total orders must be a number!");
//       return;
//     }

//     try {
//       await updateDoc(customerRef, {
//         name: newName,
//         email: newEmail,
//         phone: newPhone,
//         totaloder: newOrders,
//       });

//       setCustomers(customers.map(c => c.id === id ? {
//         ...c, name: newName, email: newEmail, phone: newPhone, totalOrders: newOrders
//       } : c));

//       toast.success("Customer updated!");
//     } catch {
//       toast.error("Update failed!");
//     }
//   };

  
    
// if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen w-full ">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//           className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }



  
//   return (
//     <div className="flex h-screen transition-colors duration-300">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
       

//         <main className="flex-1 overflow-auto p-6 transition-colors duration-300">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold">Customers</h1>
            
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full   shadow rounded-lg overflow-hidden">
//               <thead >
//                 <tr className="bg-gray-400 text-black">
//                   <th className="py-3 px-6 text-left">Name</th>
//                   <th className="py-3 px-6 text-left">Email</th>
//                   <th className="py-3 px-6 text-left">Phone</th>
//                   <th className="py-3 px-6 text-left ">Total Orders</th>
//                   <th className="py-3 px-6 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {customers.map((cust, index) => (
//                   <motion.tr
//                     key={cust.id}
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: index * 0.05 }}
//                     className="border-b hover:bg-gray-900 cursor-pointer"
//                   >
                    
//                     <td className="py-5  text-blue-700">{cust.name}</td>
//                     <td className="py-5 px-6 text-fuchsia-700">{cust.email}</td>
//                     <td className="py-5 px-6 text-purple-600">{cust.phone}</td>
//                     <td className="py-5 px-6 text-green-400">{cust.totaloder}</td>
//                     <td className="py-5 px-6 text-center flex gap-2 justify-center">
//                       <button
//                         onClick={() => handleEdit(cust.id)}
//                         className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(cust.id)}
//                         className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }



























// import Sidebar from "./sidebar";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "@/firebase/confic";

// export default function Customers() {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const snap = await getDocs(collection(db, "Orders"));
//         const data = snap.docs.map((d) => ({
//           id: d.id,
//           ...d.data(),
//         }));
//         setCustomers(data);
//       } catch {
//         toast.error("Customers load nahi ho rahe");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCustomers();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteDoc(doc(db, "Orders", id));
//       setCustomers((prev) => prev.filter((o) => o.id !== id));
//       toast.success("Customer deleted!");
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   const handleEdit = async (id) => {
//     const customerRef = doc(db, "Orders", id);

//     const newName = prompt("Enter new name:");
//     const newEmail = prompt("Enter new email:");
//     const newPhone = prompt("Enter new phone number:");
    

//     if (!newName || !newEmail || !newPhone || isNaN(newOrders)) {
//       toast.error("All fields required!");
//       return;
//     }

//     try {
//       await updateDoc(customerRef, {
//         name: newName,
//         email: newEmail,
//         phone: newPhone,
       
//       });

//       setCustomers((prev) =>
//         prev.map((c) =>
//           c.id === id
//             ? { ...c, name: newName, email: newEmail, phone: newPhone, totaloder: newOrders }
//             : c
//         )
//       );

//       toast.success("Customer updated!");
//     } catch {
//       toast.error("Update failed!");
//     }
//   };

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

//       <div className="flex-1 flex flex-col">
//         <main className="flex-1 p-6 overflow-hidden">
//           <h1 className="text-2xl font-bold mb-6">Customers</h1>

//           {/* ✅ SCROLLABLE TABLE CONTAINER */}
//           <div className="overflow-x-auto max-h-[520px] overflow-y-auto border rounded-lg">
//             <table className="min-w-full shadow">
//               <thead className="sticky top-0 bg-gray-400 z-10">
//                 <tr>
//                   <th className="py-3 px-6 text-left">Name</th>
//                   <th className="py-3 px-6 text-left">Email</th>
//                   <th className="py-3 px-6 text-left">Phone</th>
//                  <th className="py-3 px-6 text-center">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {customers.map((cust, index) => (
//                   <motion.tr
//                     key={cust.id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.03 }}
//                     className="border-b hover:bg-gray-900"
//                   >
//                     <td className="py-4 px-6 text-blue-700">{cust.name}</td>
//                     <td className="py-4 px-6 text-fuchsia-700">{cust.email}</td>
//                     <td className="py-4 px-6 text-purple-600">{cust.phone}</td>
//                     {/* <td className="py-4 px-6 text-green-500">{cust.totaloder}</td> */}
//                     <td className="py-4 px-6 flex gap-2 justify-center">
//                       <button
//                         onClick={() => handleEdit(cust.id)}
//                         className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(cust.id)}
//                         className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }








































































import Sidebar from "./sidebar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const snap = await getDocs(collection(db, "Orders"));
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setCustomers(data);
      } catch {
        toast.error("Customers load nahi ho rahe");
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Orders", id));
      setCustomers((prev) => prev.filter((o) => o.id !== id));
      toast.success("Customer deleted!");
    } catch {
      toast.error("Delete failed");
    }
  };

  const openEditModal = (customer) => {
    setEditingCustomer(customer);
    setFormData({
      name: customer.name || "",
      email: customer.email || "",
      phone: customer.phone || "",
    });
    setModalOpen(true);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const customerRef = doc(db, "Orders", editingCustomer.id);
      await updateDoc(customerRef, formData);

      setCustomers((prev) =>
        prev.map((c) =>
          c.id === editingCustomer.id ? { ...c, ...formData } : c
        )
      );
      toast.success("Customer updated!");
      setModalOpen(false);
      setEditingCustomer(null);
    } catch {
      toast.error("Update failed!");
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
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-hidden">
          <h1 className="text-2xl font-bold mb-6">Customers</h1>

          <div className="overflow-x-auto max-h-[520px] overflow-y-auto border rounded-lg">
            <table className="min-w-full shadow">
              <thead className="sticky top-0 bg-gray-400 z-10">
                <tr className="text-black">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Phone</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((cust, index) => (
                  <motion.tr
                    key={cust.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="border-b hover:bg-gray-900"
                  >
                    <td className="py-4 px-6 text-blue-700">{cust.name}</td>
                    <td className="py-4 px-6 text-fuchsia-700">{cust.email}</td>
                    <td className="py-4 px-6 text-purple-600">{cust.phone}</td>
                    <td className="py-4 px-6 flex gap-2 justify-center">
                      <button
                        onClick={() => openEditModal(cust)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(cust.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
          <div className="text-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Customer</h2>
            <form onSubmit={handleModalSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="border p-2 rounded border-purple-900"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="border p-2 rounded border-purple-900
                
                
                
                
                
                
                "
              />
              <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="border p-2 rounded border-purple-900"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
