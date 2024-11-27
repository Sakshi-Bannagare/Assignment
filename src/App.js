import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext"; // Import UserProvider
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import BookHolderDashboard from "./pages/BookHolderDashboard";
import LibrarianDashboard from "./pages/LibrarianDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ParentComponent from "./pages/ParentComponent"; // Assuming this contains your admin dashboard

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute allowedRoles={["Admin"]}>
                                <ParentComponent /> {/* Admin Dashboard */}
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/bookholder"
                        element={
                            <ProtectedRoute allowedRoles={["BookHolder"]}>
                                <BookHolderDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/librarian"
                        element={
                            <ProtectedRoute allowedRoles={["Librarian"]}>
                                <LibrarianDashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
