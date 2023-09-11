import React, { createContext } from "react";

const LocalStorageContext = createContext({
    blogs: []
});

export const LocalStorageProvider = ({ children }) => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    return (
        <LocalStorageContext.Provider value={{ blogs: blogs }}>
            { children }
        </LocalStorageContext.Provider>
    );
}

export default LocalStorageContext;