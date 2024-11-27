import React from "react";
import { useRole } from "../context/RoleContext";
import "./LibrarianDashboard.css";

const LibrarianDashboard = () => {
    const { users, issuedBooks, setIssuedBooks } = useRole();

    const handleApprove = (userId) => {
        setIssuedBooks((prev) =>
            prev.map((entry) =>
                entry.userId === userId ? { ...entry, approved: true } : entry
            )
        );
    };

    const handleReject = (userId) => {
        setIssuedBooks((prev) =>
            prev.filter((entry) => entry.userId !== userId)
        );
    };

    return (
        <div className="librarian-dashboard">
            <h2>Librarian Dashboard</h2>
            <div className="table-wrapper">
                <table className="dashboard-table">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Book Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issuedBooks.length > 0 ? (
                            issuedBooks.map((entry) => (
                                <tr key={entry.userId}>
                                    <td>
                                        {users.find((u) => u.id === entry.userId)?.name}
                                    </td>
                                    <td>{entry.bookName}</td>
                                    <td>
                                        {entry.approved ? (
                                            <span className="status-approved">
                                                Approved
                                            </span>
                                        ) : (
                                            <div className="action-buttons">
                                                <button
                                                    className="approve-button"
                                                    onClick={() =>
                                                        handleApprove(entry.userId)
                                                    }
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    className="reject-button"
                                                    onClick={() =>
                                                        handleReject(entry.userId)
                                                    }
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="no-requests">
                                    No book requests
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LibrarianDashboard;
