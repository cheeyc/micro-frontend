import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./nav-bar/nav-bar.component";
import React from "react";

const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NavBar />} />
      </Routes>
    </Router>
  );
};

export default Root;
