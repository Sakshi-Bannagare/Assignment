// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
    const { currentUser } = useRole();

    if (!currentUser || !allowedRoles.includes(currentUser.role)) {
        return <Navigate to="/" />; // Redirect to login if not authorized
    }

    return children;
};

export default ProtectedRoute;
