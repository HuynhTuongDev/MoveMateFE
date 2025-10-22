import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
const Layouts = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navbar />
            <Home />
            <main className="flex-1 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    {children}
                </div>
            </main>

        </div>
    );
};

export default Layouts;
