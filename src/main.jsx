import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css'
import ProfileDetails from "./ProfileDetails";
const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile/:name" element={<ProfileDetails />} />
    </Routes>
  </Router>
);
