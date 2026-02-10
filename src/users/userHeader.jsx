import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../contextcart/context";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";

export default function UserHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalCartItems } = useCart();
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

 
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/Add" },
    
   {
    name: (
      <FaUserCircle className="text-lg" title="Profile" />
    ),
    path: "/userdashboard",
    type: "icon",
  },
    ...(currentUser ? [{ name: "Logout" }] : []), 
  ];

  const handleNavClick = async (item) => {
    setIsOpen(false);

 
    

    if (
    (item.path === "/userdashboard" || item.path === "/CheackOut") &&
    !currentUser
  ) {
    toast.error("You must login first");
    return;
  }

    
    if (item.name === "Logout") {
      try {
        await logout(); 
        toast.success("Logged out successfully");
        navigate("/login");
      } catch (error) {
        toast.error("Logout failed: " + error.message);
      }
      return;
    }

    navigate(item.path);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          FakeStore
        </Link>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto flex-col md:flex-row md:flex items-center gap-4 md:gap-8
            md:bg-transparent backdrop-blur-xl md:backdrop-blur-0
          transition-all duration-300 ${isOpen ? "flex" : "hidden"}`}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="relative px-4 py-2 text-sm font-medium group hover: cursor-pointer"
              >
                <span
                  className={`relative z-10 transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 group-hover:text-blue-600"
                  }`}
                >
                  {item.name === "Cart" ? (
                    <div className="relative flex items-center gap-2">
                      🛒
                      {totalCartItems > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                          {totalCartItems}
                        </span>
                      )}
                    </div>
                  ) : (
                    item.name
                  )}
                </span>

                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-blue-500/10"
                      : "bg-transparent group-hover:bg-black/5 dark:group-hover:bg-white/10"
                  }`
                }
                />
              </button>
            );
          })}

          <div className="md:ml-4">
            <AnimatedThemeToggler className="cursor-pointer" />
          </div>
        </nav>
      </div>
    </header>
  );
}














































