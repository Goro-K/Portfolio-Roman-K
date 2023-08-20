import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Style
import "./index.css";

// Pages and components
import Home from "./pages/home/index";
import Error from "./pages/error/index";
import Projet from "./pages/projet/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:id" element={<Projet />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
