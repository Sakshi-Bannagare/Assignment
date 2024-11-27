import React from "react";

const ApproveRequests = ({ bookRequests, setBookRequests }) => {
    const handleUpdateStatus = (id, status) => {
        const updatedRequests = bookRequests.map((request) =>
            request.id === id ? { ...request, status } : request
        );
        setBookRequests(updatedRequests);
    };

    return (
        <div>
            <h3>Book Requests</h3>
            <ul>
                {bookRequests.map((request) => (
                    <li key={request.id}>
                        {request.bookName} - {request.status}
                        <button onClick={() => handleUpdateStatus(request.id, "Approved")}>
                            Approve
                        </button>
                        <button onClick={() => handleUpdateStatus(request.id, "Rejected")}>
                            Reject
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApproveRequests;
