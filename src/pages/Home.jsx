
import { data, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase/confic";
import { collection, onSnapshot } from "firebase/firestore";
import { Video } from "@/components/layout/video";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const slides = [
    "https://www.simplotfood.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F0dkgxhks0leg%2F2HNpIyUcZgyaerIJJALhXJ%2F25d68ffea9a6ac8480d36cd514401868%2FAdobeStock_392830602-1170x780px.jpg%3Ffm%3Dwebp&w=3840&q=75",
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    "https://soyummy.com/wp-content/uploads/2023/09/a-person-getting-a-piece-of-cheesy-pepperoni-pizza-stockpack-istock-scaled.jpg",
  ];

  useEffect(() => {
    if (!window.startedCarousel) {
      window.startedCarousel = true;
      const interval = setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const colRef = collection(db, "products");
    const unsub = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
      setLoading(false);
      
    });
    

    return () => unsub();
  }, []);

  return (
    <div>
     
      <div className="relative w-full h-[55vh] md:h-[65vh] lg:h-[75vh] overflow-hidden rounded-xl ">

     {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${index === i ? "opacity-100 z-10 " : "opacity-0 z-0 "}`}
            style={{ backgroundImage: `url("${src}")`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-20"></div>
        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">Discover the Latest Food</h1>
          <Link to="/products">
            <button className="cursor-pointer mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">Shop Now</button>
          </Link>
        </div>
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-40">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${index === i ? "bg-white scale-110 hover: cursor-pointer" : "bg-gray-400/70 hover: cursor-pointer"} transition `}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      
      <div className="px-6 py-10">
         <Video/>
        <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((cat) => (
      <div key={cat.id} className="group relative max-w-sm rounded-2xl border border-white/10 bg-black p-[1px] shadow-2xl">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-xl transition group-hover:opacity-40" />
<div className="relative rounded-2xl bg-zinc-950 p-6 text-white">
        
        <img
          src={cat.image}
          alt={cat.title
            
          }
          className="mb-4 h-44 w-full rounded-xl object-cover hover: cursor-pointer"
          />
          
<h2 className="text-2xl font-bold tracking-tight">
          {cat.title}
        </h2>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xl font-semibold text-yellow-400">
          Price:  ${cat.price}
          </span>
  <Link to={`/products/${cat.id}`}>
          <button className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 text-sm font-semibold transition hover:scale-105 cursor-pointer">
            View Detail
          </button>
</Link>
        </div>
      </div>
    </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}