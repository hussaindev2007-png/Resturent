import { useParams } from "react-router-dom";
import { useCart } from "../contextcart/context";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/confic";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [singleProduct, setSingleProduct] = useState(null);

  const gifts = [
    { id: 1, name: "Coca-Cola (Tin Pack)" },
    { id: 2, name: "Pepsi (Tin Pack)" },
    { id: 3, name: "Sprite (Tin Pack)" },
    { id: 4, name: "Fanta (Tin Pack)" },
    { id: 5, name: "Cola Next (Tin Pack)" },
    { id: 6, name: "Rango Next (Tin Pack)" },
    { id: 7, name: "Fizup Next (Tin Pack)" },
  ];

  const [selectedGift, setSelectedGift] = useState(gifts[0].name);

  useEffect(() => {
    const fetchProduct = async () => {
      const q = query(
        collection(db, "products"),
        where("id", "==", Number(id))
      );
      const snap = await getDocs(q);
      if (!snap.empty) {
        setSingleProduct(snap.docs[0].data());
      }
    };
    fetchProduct();
  }, [id]);

  if (!singleProduct) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg font-semibold animate-pulse text-gray-600 dark:text-gray-400">
          Loading product...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 rounded-3xl p-6 shadow-xl
        bg-white dark:bg-neutral-900 dark:shadow-black/40">

       
        <div className="relative">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
          <span className="absolute top-4 left-4 bg-green-600 text-white text-sm px-4 py-1 rounded-full">
            Free Gift 🎁
          </span>
        </div>

      
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {singleProduct.title}
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              {singleProduct.description}
            </p>

            
            <div className="mt-6">
              <label className="block font-semibold mb-2 text-yellow-700 dark:text-yellow-400">
                Choose your free gift
              </label>
              <select
                value={selectedGift}
                onChange={(e) => setSelectedGift(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl
                  bg-white dark:bg-neutral-800
                  text-gray-900 dark:text-white
                  border-gray-300 dark:border-neutral-700
                  focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {gifts.map((gift) => (
                  <option key={gift.id} value={gift.name}>
                    {gift.name}
                  </option>
                ))}
              </select>
            </div>

          
            <div className="mt-6 flex items-center gap-6">
              <p className="text-3xl font-bold text-blue-600">
                ${singleProduct.price}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Total:
                <span className="font-semibold text-gray-900 dark:text-white ml-1">
                  ${qty * singleProduct.price}
                </span>
              </p>
            </div>

            
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => setQty(qty - 1)}

                disabled={qty === 1}
                className={`
      w-10 h-10 flex items-center justify-center rounded-full
      font-bold text-xl
      transition-all duration-200 
      ${
        qty === 1
          ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50 "
          : "bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 cursor-pointer"
      }
    `}
              
              >
                −
              </button>

              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                {qty}
              </span>

              <button
                onClick={() => setQty(qty + 1)}
                disabled={qty === 15}
                
               className={`
      w-10 h-10 flex items-center justify-center rounded-full
      font-bold text-xl
      transition-all duration-200 
      ${
        qty === 15
          ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50 "
          : "bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 cursor-pointer"
      }
    `}
              
              >
                +
              </button>
            </div>
          </div>

          
          <button
  onClick={() => {
    addToCart(singleProduct, qty, selectedGift);
    toast.success(`Added ${qty} item + ${selectedGift}`);
  }}
  className="
    mt-8 w-full py-4 rounded-2xl
    bg-gradient-to-r from-blue-600 to-indigo-600
    text-white text-lg font-semibold
    transition-all duration-300 ease-out
    hover:scale-[1.03]
    hover:shadow-xl hover:shadow-indigo-500/40
    active:scale-[0.97]
    cursor-pointer
  "
>
  🛒 Add to Cart
</button>

        </div>
      </div>
    </div>
  );
}
