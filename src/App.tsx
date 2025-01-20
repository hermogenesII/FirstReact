import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Accordion from "./components/Accordion";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/accordion" Component={Accordion} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
