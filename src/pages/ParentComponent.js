import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard"; // Correct path to AdminDashboard

const ParentComponent = () => {
    // Define users state and setUsers function
    const [users, setUsers] = useState([]);

    return (
        <AdminDashboard users={users} setUsers={setUsers} />  // Passing users and setUsers as props
    );
};

export default ParentComponent;
