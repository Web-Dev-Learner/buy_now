import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/router/Router";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
);