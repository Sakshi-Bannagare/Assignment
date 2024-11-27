import React, { createContext, useState, useContext } from "react";

// Create a Context for user data
const UserContext = createContext();

// Custom hook to use UserContext
export const useUser = () => {
    return useContext(UserContext);
};

// UserProvider to wrap your app and provide the context
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};
