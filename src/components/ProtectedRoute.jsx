import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { account } from "../utils/appwrite";
import { toast } from "sonner";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    account
      .get()
      .then((res) => setUser(res))
      .catch(() => {
        setUser(null);
        toast.error("Please log in to access this page", {
          style: { backgroundColor: "#dc2626", color: "white" },
        });
      })
      .finally(() => setLoading(false));
  }, []);

  

  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
