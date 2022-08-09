import { Routes, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import IndexPage from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
