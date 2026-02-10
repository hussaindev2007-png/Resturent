import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useAuth } from "@/context/AuthContext";
import { FaHome, FaUtensils, FaShoppingCart, FaUsers, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";


const Sidebar = () => {
   const navigate = useNavigate();
     const { currentUser, logout } = useAuth();
   

  const handleNavClick = async () => {
  
      if (currentUser) {
        try {
          await logout(); 
          navigate("/login");
          toast.success("Logged out successfully");
        } catch (error) {
          toast.error("Logout failed: " + error.message);
        }
        return;
      }
  
      
    };
  return (
    <aside className="w-64 flex flex-col">
      
      
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Restaurant
      </div>

    
      <nav className="flex-1 p-4">

       
          <button>

          <AnimatedThemeToggler className="cursor-pointer" />
          </button>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaHome className="mr-2" /> Dashboard
        </NavLink>

     
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" /> Profile
        </NavLink>

       
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaShoppingCart className="mr-2" /> Orders
        </NavLink>
 <NavLink
          to="/customers"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" /> Customers
        </NavLink>
     

       
        <NavLink
          to="/reservations"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaCalendarAlt className="mr-2" /> Reservations
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUtensils className="mr-2" /> Menu
        </NavLink>
      
       

         <NavLink
          to="/setting"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" />Setting

        </NavLink>
        
          

          <button
  onClick={handleNavClick}
  className="
   flex items-center mb-4 p-2 rounded duration-200 
    text-red-500
    hover:bg-gray-700
    cursor-pointer
    
  "
>
  <FaSignOutAlt className="text-lg" />

  <span> Logout</span>
</button>

       
       
      </nav>
    </aside>
  );
};

export default Sidebar;
