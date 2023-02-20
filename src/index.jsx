import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Style
import "./index.css";

// Pages and components
import Home from "./pages/home/index";
import Projet from "./pages/projet/index";
import Error from "./pages/error/index";
import Footer from "./components/footer/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/error" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/projet/:id" element={<Projet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
