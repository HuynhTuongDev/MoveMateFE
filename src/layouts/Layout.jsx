import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";

const Layouts = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {location.pathname === "/" && <Home /> && <Navbar />}
                {location.pathname === "/about" && <About />}
            </main>
            <Footer />
        </div>
    );
};

export default Layouts;
