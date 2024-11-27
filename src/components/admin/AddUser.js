import React, { useState } from "react";

const AddUser = ({ users, setUsers }) => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("BookHolder");

    const handleAddUser = () => {
        const newUser = { id: Date.now(), name, role };
        setUsers([...users, newUser]);
        setName("");
        setRole("BookHolder");
    };

    return (
        <div>
            <h3>Add User</h3>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="BookHolder">Book Holder</option>
                <option value="Librarian">Librarian</option>
            </select>
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );
};

export default AddUser;
