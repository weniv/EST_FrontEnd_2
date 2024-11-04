import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App4";
import App from "./App6";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
