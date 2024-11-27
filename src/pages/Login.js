import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import "./Login.css";

const Login = () => {
    const { setCurrentUser } = useRole(); // Access setCurrentUser from context
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("Admin");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username.trim()) {
            alert("Username is required");
            return;
        }

        const user = { name: username.trim(), role };
        setCurrentUser(user); // Set logged-in user
        navigate(`/${role.toLowerCase()}`); // Redirect to dashboard
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Library Management System</h2>
                <p>Please login to continue</p>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="role-select"
                >
                    <option value="Admin">Admin</option>
                    <option value="BookHolder">Book Holder</option>
                    <option value="Librarian">Librarian</option>
                </select>
                <button onClick={handleLogin} className="login-button">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
