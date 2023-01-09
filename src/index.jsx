import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Style
import "./index.css";

// Pages and components
import Home from "./pages/home/index";
import Projet from "./pages/projet/index";
import Header from "./components/header";
import Error from "./pages/error/index";
import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:id" element={<Projet />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
