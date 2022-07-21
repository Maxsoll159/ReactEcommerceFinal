import React from "react";
import ReactDOM from "react-dom/client";
import { Principal } from "./Principal";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./assets/Login.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Principal />
    </React.StrictMode>
  </BrowserRouter>
);
