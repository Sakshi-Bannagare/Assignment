// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RoleProvider } from "./context/RoleContext";

ReactDOM.render(
    <RoleProvider>
        <App />
    </RoleProvider>,
    document.getElementById("root")
);
