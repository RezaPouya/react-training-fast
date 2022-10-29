import React from "react";
// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/index";

// yarn add react-router-dom
// npm install react-router-dom
// both pages and components are in fact <component>

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
