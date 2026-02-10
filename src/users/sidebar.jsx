import { Link, NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaShoppingBag,
  
} from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", path: "/UserDashboard", icon: <FaTachometerAlt /> },
    { name: "My Orders", path: "/UserOrders", icon: <FaShoppingBag /> },

  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5 flex flex-col ">
      
      <h2 className="text-2xl font-bold mb-8 text-center">
        User Panel
      </h2>

      <nav className="space-y-2">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      
    </aside>
  );
};

export default Sidebar;
