
import { Route, Routes, useLocation ,  } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/Footer";
import UserHeader from "./users/userHeader";
import Home from "./pages/Home";
import NotFound from "./pages/not";
import Collection from "./pages/Colection";
import ProductDetail from "./pages/ProductD";
import AddCard from "./component/Add";
import CheackOut from "./component/CheackOut";
import Dashboard from "./pages/Dashboard";
import Profile from "./component/profile";
import Orders from "./component/Orders";
import Menu from "./component/Menu";
import Reservations from "./component/Reservations";
import Customers from "./component/Customers";
import Setting from "./component/Settings";
import Notification from "./Tab/Notifications";
import { Login } from "@/authentication/login";
import { SignUp } from "@/authentication/SignUp";
import UserDashboard from "./users/dashboard";
import UserOrders from "./users/Orders";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Protected from "./ProtectedRoute/Protected";

const AppContent = () => {
  const location = useLocation();
     
 

  const hideuserHeaderRoutes = [

    "/dashboard", 
    "/signup", 
    "/login" ,
    "/customers",
    "/profile",
    "/orders",
    "/reservations",
    "/menu",
    "/setting"
    
    ];
    
  const hideuserHeader = hideuserHeaderRoutes.includes(location.pathname) 
  

  


  return (
    <>
   
      {!hideuserHeader  && <UserHeader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/home"
          element={
            
              <Home />
            
          }
        />
        <Route
          path="/products"
          element={
            
              <Collection />
            
          }
        />
        <Route
          path="/products/:id"
          element={
            
              <ProductDetail />
            
          }
        />
        <Route
          path="/add"
          element={
            
              <AddCard />
            
          }
        />
        <Route
          path="/cheackout"
          element={
            
              <CheackOut />
            
          }
        />
       
         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
         <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
         <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
         <Route path="/reservations" element={<ProtectedRoute><Reservations /></ProtectedRoute>} />
         <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
         <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
         <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
        
        <Route
          path="/userdashboard"
          element={
            <Protected>

              <UserDashboard />
             </Protected>
            
          }
        />
         
        
        <Route
          path="/UserOrders"
          element={
            
              <UserOrders />
            
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideuserHeader && <Footer />}
     
      <ToastContainer />
    </>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;


