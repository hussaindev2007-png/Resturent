import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contextcart/context";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

export default function AddCard() {
  const { cartItems, updateCartQty, removeCartItem, totalCartPrice } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!currentUser) {
      toast.error("You must login to access your Checkout page");
      navigate("/login");
    } else {
      navigate("/CheackOut");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 && (
        <p className="text-gray-600">Cart is empty</p>
      )}

      {cartItems.map((item) => (
        <div
          key={item.id + (item.CardGifts || "")}
          className="flex items-center justify-between border p-4 rounded-xl mb-4 shadow"
        >
          <div className="flex items-center gap-4">
            <Link to={`/products/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
            </Link>

            <div>
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="font-bold text-blue-600">
                Price: {item.price}$
              </p>

              
              {item.CardGifts && (
                <p className="text-sm text-green-600">
                  🎁 Gift: {item.CardGifts}
                </p>
              )}
            </div>
          </div>

          
          <div className="flex items-center gap-4">
            <button
              onClick={() => updateCartQty(item, -1)}
              disabled={item.quantity === 1}
             

               className={`
      w-10 h-10 flex items-center justify-center rounded-full
      font-bold text-xl
      transition-all duration-200 
      ${
        item.quantity === 1
          ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50 "
          : "bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 cursor-pointer"
      }
    `}
            >
              −
            </button>

            <span className="min-w-[24px] text-center font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() => updateCartQty(item, 1)}
              disabled={item.quantity === 15}
              

              className={`
      w-10 h-10 flex items-center justify-center rounded-full
      font-bold text-xl
      transition-all duration-200 
      ${
        item.quantity === 15
          ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50 "
          : "bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 cursor-pointer"
      }
    `}
            >
              +
            </button>
          </div>

          <p className="w-32 font-bold">
            $ {item.price * item.quantity}
          </p>

          <button
            onClick={() => removeCartItem(item)}
            className="text-red-600 text-xl font-bold cursor-pointer"
          >
            ×
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-6">
            Total Price: {totalCartPrice}$
          </h2>

          <div className="mt-6 flex justify-between items-center">
            <span className="font-bold text-lg">
              Total: ${totalCartPrice}
            </span>

            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
