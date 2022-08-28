import React from "react";
import ReactDOM from "react-dom/client";

import App from 'src/app/container/App';

import "./global.css";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
