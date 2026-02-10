// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function ProtectedRoute({ children }) {
//   const { currentUser } = useAuth();

//   return currentUser ? children : <Navigate to="/login" replace />;
// }

























import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const isGoogleUser = currentUser.providerData.some(
    (provider) => provider.providerId === "google.com"
  );

  if (isGoogleUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
