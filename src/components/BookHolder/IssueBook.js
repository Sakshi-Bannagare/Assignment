import React, { useState } from "react";

const IssueBook = ({ setBookRequests }) => {
    const [bookName, setBookName] = useState("");

    const handleIssueBook = () => {
        setBookRequests((prev) => [
            ...prev,
            { id: Date.now(), bookName, status: "Pending" },
        ]);
        setBookName("");
    };

    return (
        <div>
            <h3>Issue a Book</h3>
            <input
                type="text"
                placeholder="Book Name"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
            />
            <button onClick={handleIssueBook}>Request</button>
        </div>
    );
};

export default IssueBook;
