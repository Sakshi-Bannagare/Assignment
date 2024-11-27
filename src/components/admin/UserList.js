import React, { useState } from "react";

const UserList = ({ users, setUsers }) => {
    const [isEditing, setIsEditing] = useState(null);
    const [editedName, setEditedName] = useState("");
    const [editedRole, setEditedRole] = useState("");

    const handleEdit = (id) => {
        const user = users.find((user) => user.id === id);
        setIsEditing(id);
        setEditedName(user.name);
        setEditedRole(user.role);
    };

    const handleSave = (id) => {
        const updatedUsers = users.map((user) =>
            user.id === id ? { ...user, name: editedName, role: editedRole } : user
        );
        setUsers(updatedUsers);
        setIsEditing(null);
    };

    const handleDelete = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    };

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {isEditing === user.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                />
                                <select
                                    value={editedRole}
                                    onChange={(e) => setEditedRole(e.target.value)}
                                >
                                    <option value="BookHolder">Book Holder</option>
                                    <option value="Librarian">Librarian</option>
                                </select>
                                <button onClick={() => handleSave(user.id)}>Save</button>
                                <button onClick={() => setIsEditing(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {user.name} - {user.role}
                                <button onClick={() => handleEdit(user.id)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
