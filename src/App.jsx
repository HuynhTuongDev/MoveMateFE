import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Layouts />
  );
}

export default App;
