import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import 'normalize.css';
import './index.css';
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);
