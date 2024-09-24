import { useEffect } from "react";
import { useSelector } from "react-redux"; // Corrected import syntax
import { useNavigate } from "react-router-dom"; // Corrected import syntax

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth); // Accessing user from auth state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is null or does not have the 'recruiter' role
    if (user === null || user.role !== "recruiter") {
      navigate("/"); // Redirect to home if not authorized
    }
  }, [user, navigate]); // Added dependencies to useEffect

  return <>{children}</>; // Render children if the user is authorized
};

export default ProtectedRoute;
