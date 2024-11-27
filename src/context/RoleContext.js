import React, { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); // Manage logged-in user
    const [users, setUsers] = useState([]); // Manage all users
    const [issuedBooks, setIssuedBooks] = useState([]); // Manage issued books

    return (
        <RoleContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                users,
                setUsers,
                issuedBooks,
                setIssuedBooks,
            }}
        >
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => useContext(RoleContext);
