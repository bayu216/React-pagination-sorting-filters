import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Select from "./select_add_rows/Select";
import Crud from "./table_crud/Crud";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Select /> */}
    <Crud />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
