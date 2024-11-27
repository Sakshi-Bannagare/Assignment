import React, { useState } from "react";
import { useRole } from "../context/RoleContext";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const { users, setUsers } = useRole();
    const [newUser, setNewUser] = useState("");
    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUserName, setEditedUserName] = useState("");

    // Add new user
    const handleAddUser = () => {
        if (newUser.trim()) {
            setUsers((prev) => [
                ...prev,
                { id: Date.now(), name: newUser.trim() },
            ]);
            setNewUser("");
        }
    };

    // Delete user
    const handleDeleteUser = (userId) => {
        setUsers((prev) => prev.filter((user) => user.id !== userId));
    };

    // Edit button click: Set edit mode
    const handleEditUser = (user) => {
        setEditingUserId(user.id);
        setEditedUserName(user.name);
    };

    // Save edited user
    const handleSaveEdit = () => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === editingUserId ? { ...user, name: editedUserName } : user
            )
        );
        setEditingUserId(null);
        setEditedUserName("");
    };

    // Cancel edit
    const handleCancelEdit = () => {
        setEditingUserId(null);
        setEditedUserName("");
    };

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>

            <div className="add-user-container">
                <input
                    type="text"
                    placeholder="Enter user name"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    className="add-user-input"
                />
                <button onClick={handleAddUser} className="add-user-button">
                    Add User
                </button>
            </div>

            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                {/* Edit Mode */}
                                {editingUserId === user.id ? (
                                    <>
                                        <td>
                                            <input
                                                type="text"
                                                value={editedUserName}
                                                onChange={(e) =>
                                                    setEditedUserName(e.target.value)
                                                }
                                                className="edit-user-input"
                                            />
                                        </td>
                                        <td>
                                            <button onClick={handleSaveEdit} className="save-button">
                                                Save
                                            </button>
                                            <button onClick={handleCancelEdit} className="cancel-button">
                                                Cancel
                                            </button>
                                        </td>
                                    </>
                                ) : (
                                    // Normal Mode
                                    <>
                                        <td>{user.name}</td>
                                        <td>
                                            <button onClick={() => handleEditUser(user)} className="edit-button">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDeleteUser(user.id)} className="delete-button">
                                                Delete
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No users available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
