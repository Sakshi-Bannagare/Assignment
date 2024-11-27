import React, { useState } from "react";
import { useRole } from "../context/RoleContext";
import "./BookHolderDashboard.css";

const BookHolderDashboard = () => {
    const { users, issuedBooks, setIssuedBooks } = useRole();
    const [bookName, setBookName] = useState("");

    const handleIssueBook = (userId) => {
        if (bookName.trim()) {
            setIssuedBooks((prev) => [
                ...prev,
                { userId, bookName, returned: false },
            ]);
            setBookName("");
        }
    };

    const handleReturnBook = (userId) => {
        setIssuedBooks((prev) =>
            prev.map((entry) =>
                entry.userId === userId && !entry.returned
                    ? { ...entry, returned: true }
                    : entry
            )
        );
    };

    return (
        <div className="bookholder-dashboard">
            <h2>Book Holder Dashboard</h2>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Book Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>
                                    {issuedBooks.find(
                                        (book) =>
                                            book.userId === user.id && !book.returned
                                    )?.bookName || "No book issued"}
                                </td>
                                <td>
                                    {issuedBooks.find(
                                        (book) =>
                                            book.userId === user.id && !book.returned
                                    ) ? (
                                        <button
                                            className="return-button"
                                            onClick={() => handleReturnBook(user.id)}
                                        >
                                            Return Book
                                        </button>
                                    ) : (
                                        <div className="issue-container">
                                            <input
                                                type="text"
                                                placeholder="Enter book name"
                                                value={bookName}
                                                onChange={(e) =>
                                                    setBookName(e.target.value)
                                                }
                                                className="book-input"
                                            />
                                            <button
                                                className="issue-button"
                                                onClick={() => handleIssueBook(user.id)}
                                            >
                                                Issue Book
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="no-users">
                                No users available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BookHolderDashboard;
