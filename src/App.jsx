// import { Route, Routes, useLocation } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Header from "./component/Header";
// import Footer from "./component/Footer";
// import Home from "./pages/Home";
// import NotFound from "./pages/not";
// import Collection from "./pages/Colection";
// import ProductDetail from "./pages/ProductD";
// import AddCard from "./component/Add";
// import CheackOut from "./component/CheackOut";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./component/profile";
// import Orders from "./component/Orders";
// import Menu from "./component/Menu";
// import Reservations from "./component/Reservations";
// import Customers from "./component/Customers";
// import Setting from "./component/Settings";
// import Notification from "./Tab/Notifications";
// import Login from './authentication/login';
// import Signup from './authentication/SignUp';





// const App = () => {
 
  

//   return (
//     <AuthProvider>
      


//        <Header />
//       <Routes>
    
//         <Route path="/" element={<Signup/>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
        
//         <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//         <Route path="/products" element={<ProtectedRoute><Collection /></ProtectedRoute>} />
       
//         <Route path="/products/:id" element={<ProtectedRoute><ProductDetail /> </ProtectedRoute>} />
//         <Route path="/add" element={<ProtectedRoute><AddCard /></ProtectedRoute>} />
//         <Route path="/cheackout" element={<ProtectedRoute><CheackOut /></ProtectedRoute>} />
//         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//         <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
//         <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
//         <Route path="/reservations" element={<ProtectedRoute><Reservations /></ProtectedRoute>} />
//         <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
//         <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
//         <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />

     
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       <ToastContainer />
//       <Footer />
     
//     </AuthProvider>
//   );
// };

// export default App;








































// import { Route, Routes, useLocation } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// import { ToastContainer } from "react-toastify";

// import Header from "./component/Header";
// import Footer from "./component/Footer";

// import Home from "./pages/Home";
// import NotFound from "./pages/not";
// import Collection from "./pages/Colection";
// import ProductDetail from "./pages/ProductD";
// import AddCard from "./component/Add";
// import CheackOut from "./component/CheackOut";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./component/profile";
// import Orders from "./component/Orders";
// import Menu from "./component/Menu";
// import Reservations from "./component/Reservations";
// import Customers from "./component/Customers";
// import Setting from "./component/Settings";
// import Notification from "./Tab/Notifications";
// import Login from "./authentication/login";
// import Signup from "./authentication/SignUp";

// const App = () => {
//   const location = useLocation();

//   // ❌ Header hide routes
//   const hideHeaderRoutes = ["/", "/login", "/signup"];
//   const hideHeader =
//     hideHeaderRoutes.includes(location.pathname) &&
//     location.pathname == "/NotFound";

//   return (
//     <AuthProvider>
//       {/* ✅ Header condition */}
//       {hideHeader && <Header />}

//       <Routes>
//         <Route path="/" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="*" element={<NotFound />} />

//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/products"
//           element={
//             <ProtectedRoute>
//               <Collection />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/products/:id"
//           element={
//             <ProtectedRoute>
//               <ProductDetail />
//             </ProtectedRoute>
//           }
//         />

//         {/* ✅ Not Found */}
//       </Routes>

//       <ToastContainer />

//       {/* ❌ Footer bhi hide agar chaho */}
//       {hideHeader && <Footer />}
//     </AuthProvider>
//   );
// };

// export default App;





















































































// import { Route, Routes, useLocation } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Header from "./component/Header";
// import Footer from "./component/Footer";

// import Home from "./pages/Home";
// import NotFound from "./pages/not";
// import Collection from "./pages/Colection";
// import ProductDetail from "./pages/ProductD";
// import AddCard from "./component/Add";
// import CheackOut from "./component/CheackOut";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./component/profile";
// import Orders from "./component/Orders";
// import Menu from "./component/Menu";
// import Reservations from "./component/Reservations";
// import Customers from "./component/Customers";
// import Setting from "./component/Settings";
// import Notification from "./Tab/Notifications";
// import  { Login }from "@/authentication/login";
// import { SignUp} from "@/authentication/SignUp";
// import UserDashboard from "./users/dashboard";
// import UserOrders from "./users/Orders";
// import UserHeader from "./users/userHeader";




// const App = () => {
//   const location = useLocation();


//   const hideHeaderRoutes = ["/", "/signup", "/login"];
//   const hideHeader = hideHeaderRoutes.includes(location.pathname);

//   return (
//     <AuthProvider>

//       {!hideHeader && <Header />  }
//       {!hideHeader && <UserHeader />  }
      


//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
        


//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/products"
//           element={
//             <ProtectedRoute>
//               <Collection />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/products/:id"
//           element={
//             <ProtectedRoute>
//               <ProductDetail />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/add"
//           element={
//             <ProtectedRoute>
//               <AddCard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/cheackout"
//           element={
//             <ProtectedRoute>
//               <CheackOut />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoute>
//               <Orders />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/menu"
//           element={
//             <ProtectedRoute>
//               <Menu />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/reservations"
//           element={
//             <ProtectedRoute>
//               <Reservations />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/customers"
//           element={
//             <ProtectedRoute>
//               <Customers />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/setting"
//           element={
//             <ProtectedRoute>
//               <Setting />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/notification"
//           element={
//             <ProtectedRoute>
//               <Notification />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/userdashboard"
//           element={
//             <ProtectedRoute>
//               <UserDashboard/>
//             </ProtectedRoute>
//           }
//         /> 
//          <Route
//           path="/UserOrders"
//           element={
//             <ProtectedRoute>
//               <UserOrders/>
//             </ProtectedRoute>
//           }
//         />
      
//         {/* <Route path="/video" element={<Video/>} /> */}


//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       <ToastContainer />

//       {!hideHeader && <Footer />}

      
//     </AuthProvider>

//   );
// };

// export default App;





















































































import { Route, Routes, useLocation ,  } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Header from "./component/Header";
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
    // const hideHeaderRoutes = [
    //   "/signup", 
    //   "/login",
    //   "/home",
    //   "/products",
    //   "/Add",
    //   "/CheackOut",
    //   "/",
    //   "/userdashboard" ,
    //    "/UserOrders" ,
       
    //  ];
  const hideuserHeader = hideuserHeaderRoutes.includes(location.pathname) 
  // isNotFound;
  // const hideHeader = hideHeaderRoutes.includes(location.pathname) ||
  // // location.pathname.startsWith("/products/") ||
  // isNotFound ;

  


  return (
    <>
    
    {/* <UserHeader /> */}
     
      {/* {!hideHeader &&<Header />} */}
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
        {/* <Route
          path="/dashboard"
          element={
            
              <Dashboard />
            
          }
        />
        <Route
          path="/profile"
          element={
            
              <Profile />
            
          }
        />
        <Route
          path="/orders"
          element={
            
              <Orders />
            
          }
        />
        <Route
          path="/menu"
          element={
            
              <Menu />
            
          }
        />
        <Route
          path="/reservations"
          element={
            
              <Reservations />
            
          }
        />
        <Route
          path="/customers"
          element={
            
              <Customers />
            
          }
        />
        <Route
          path="/setting"
          element={
            
              <Setting />
            
          }
        /> */}




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



// return(
//   <div>
//     <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//         <Route path="/products" element={<ProtectedRoute><Collection /></ProtectedRoute>} />
       
//         <Route path="/products/:id" element={<ProtectedRoute><ProductDetail /> </ProtectedRoute>} />
//         <Route path="/add" element={<ProtectedRoute><AddCard /></ProtectedRoute>} />
//         <Route path="/cheackout" element={<ProtectedRoute><CheackOut /></ProtectedRoute>} />
//         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//         <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
//         <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
//         <Route path="/reservations" element={<ProtectedRoute><Reservations /></ProtectedRoute>} />
//         <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
//         <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
//         <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
//   </div>
// )
























// import { Route, Routes, useLocation, useMatch } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Header from "./component/Header";
// import Footer from "./component/Footer";
// import UserHeader from "./users/userHeader";

// import Home from "./pages/Home";
// import NotFound from "./pages/not";
// import Collection from "./pages/Colection";
// import ProductDetail from "./pages/ProductD";
// import AddCard from "./component/Add";
// import CheackOut from "./component/CheackOut";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./component/profile";
// import Orders from "./component/Orders";
// import Menu from "./component/Menu";
// import Reservations from "./component/Reservations";
// import Customers from "./component/Customers";
// import Setting from "./component/Settings";
// import Notification from "./Tab/Notifications";

// import { Login } from "@/authentication/login";
// import { SignUp } from "@/authentication/SignUp";
// import UserDashboard from "./users/dashboard";
// import UserOrders from "./users/Orders";

// const AppContent = () => {
//   const location = useLocation();
//   const isNotFound = useMatch("*"); // ✅ detect 404

//   const hideUserHeaderRoutes = [
//     "/dashboard",
//     "/signup",
//     "/login",
//     "/customers",
//     "/profile",
//     "/orders",
//     "/reservations",
//     "/menu",
//     "/setting",
//   ];

//   const hideHeaderRoutes = [
//     "/signup",
//     "/login",
//     "/home",
//     "/products",
//     "/add",
//     "/cheackout",
    
//     "/userdashboard",
//     "/userorders",
//   ];

//   const hideHeader =
//     hideHeaderRoutes.includes(location.pathname) ||
//     location.pathname.startsWith("/products/") ||
//     isNotFound;

//   const hideUserHeader =
//     hideUserHeaderRoutes.includes(location.pathname) ||
//     isNotFound;

//   return (
//     <>
//       {!hideHeader && <Header />}
//       {!hideUserHeader && <UserHeader />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />

//         <Route path="/home" element={<Home />} />
//         <Route path="/products" element={<Collection />} />
//         <Route path="/products/:id" element={<ProductDetail />} />
//         <Route path="/add" element={<AddCard />} />
//         <Route path="/cheackout" element={<CheackOut />} />

//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/reservations" element={<Reservations />} />
//         <Route path="/customers" element={<Customers />} />
//         <Route path="/setting" element={<Setting />} />
//         <Route path="/notification" element={<Notification />} />

//         <Route path="/userdashboard" element={<UserDashboard />} />
//         <Route path="/userorders" element={<UserOrders />} />

//         {/* ✅ 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {!hideUserHeader && <Footer />}
//       <ToastContainer />
//     </>
//   );
// };

// const App = () => (
//   <AuthProvider>
//     <AppContent />
//   </AuthProvider>
// );

// export default App;
