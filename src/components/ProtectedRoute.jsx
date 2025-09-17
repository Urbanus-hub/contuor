import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { account } from "../utils/appwrite";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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

  if (loading)
    return (
      <div className="w-full flex justify-center h-[50vh]">
        <div className="flex items-center justify-center p-4">
          <Loader2 className="h-6 w-6 animate-spin text-gray-600" />
        </div>
      </div>
    );

  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
