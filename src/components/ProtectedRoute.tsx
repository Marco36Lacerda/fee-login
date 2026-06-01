import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { getUser } = useAuth();
  return getUser() ? <>{children}</> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
