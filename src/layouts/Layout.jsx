import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";

const Layouts = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header + Navbar luôn trên cùng */}
            <Header />
            <Navbar />
            <main className="flex-grow">
                <Home />
            </main>
            <Footer />
        </div>
    );
};

export default Layouts;
