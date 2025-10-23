import React, { useState, useEffect } from "react";
import { Globe, User } from "lucide-react";

const menuItems = [
    {
        label: "Giao Hàng",
        links: [
            { label: "Cá Nhân", href: "#" },
            { label: "Doanh Nghiệp", href: "#" },
        ],
    },
    {
        label: "Di Chuyển",
        links: [
            { label: "Đặt xe di chuyển", href: "#" },
        ],
    },
    {
        label: "Tài Xế",
        links: [
            { label: "Trở thành đối tác", href: "#" },
            { label: "Quản lý đội xe", href: "#" },
        ],
    },
    {
        label: "Ưu Đãi",
        links: [
            { label: "Lalamove Rewards", href: "#" },
        ],
    },
    {
        label: "Về Lalamove",
        links: [
            { label: "Giới thiệu", href: "#" },
            { label: "Delivery care", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Cơ hội nghề nghiệp", href: "#" },
            { label: "Liên hệ hỗ trợ", href: "#" },
        ],
    },
];

const Header = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => setIsAtTop(window.scrollY < 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const baseText = isAtTop ? "text-gray-50" : "text-gray-800";
    const hoverText = "hover:text-orange-500 hover:underline hover:decoration-2 hover:decoration-orange-500 hover:underline-offset-4";

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <nav
            className={`transition-all duration-300 ${isAtTop
                ? "absolute top-0 left-0 w-full bg-transparent"
                : "fixed top-0 left-0 w-full bg-white shadow-md z-50"
                }`}
        >
            <div className="w-[90%] flex justify-between items-center mx-auto py-2">
                {/* Logo */}
                <a href="/" className="flex items-center z-50 ml-20">
                    <img
                        src="https://www.lalamove.com/hubfs/Lalamove%20Website%202020/logo.svg"
                        alt="Lalamove Logo"
                        className="h-15"
                    />
                </a>

                {/* Toggle mobile */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className={`lg:hidden z-[10000] p-2 rounded-full transition-all duration-300 border-none font-bold
                                ${isAtTop ? "text-white bg-transparent" : "text-orange-600 bg-transparent"} 
                                hover:text-[#F37021] focus:outline-none`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Menu mobile */}
                <div
                    className={`fixed top-0 left-0 h-full w-full bg-white z-[99999] transition-all duration-300 ease-in-out transform ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        } lg:hidden flex flex-col items-start p-6 overflow-y-auto shadow-2xl`}
                >
                    {/* Thanh trên cùng */}
                    <div className="flex items-center justify-between w-full mb-8">
                        <a href="/" className="flex items-center">
                            <img
                                src="https://www.lalamove.com/hubfs/Lalamove%20Website%202020/logo.svg"
                                alt="Logo"
                                className="w-40"
                            />
                        </a>

                        {/* Nút đóng menu */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-3 rounded-full bg-white hover:bg-orange-400 transition border-none font-bold"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu items */}
                    <nav className="flex flex-col gap-6 w-full text-[26px] font-semibold text-gray-900 bg-white">
                        {menuItems.map((item, idx) => (
                            <div key={idx} className="w-full">
                                <button
                                    onClick={() => toggleDropdown(idx)}
                                    className="flex justify-between items-center w-full text-left hover:text-[#F37021] transition-colors border-none bg-white"
                                >
                                    {item.label}
                                    {item.links && item.links.length > 0 && (
                                        <svg
                                            className={`w-6 h-6 text-[#F37021] transform transition-transform ${openIndex === idx ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </button>

                                {openIndex === idx && item.links && (
                                    <ul className="pl-6 mt-2 space-y-2 text-[22px] font-norma list-none">
                                        {item.links.map((link, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.href}
                                                    className="block py-1 no-underline text-neutral-950 hover:text-orange-500"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-10 w-full text-[18px] text-gray-600 space-y-4">
                        <div className="flex items-center justify-between text-lg">
                            <span>🇻🇳 Việt Nam - Tiếng Việt</span>
                        </div>

                        <div className="flex gap-4">
                            <button className="bg-white text-[#F37021] text-lg font-semibold border-none px-5 py-2 rounded-md hover:text-white hover:bg-[#F37021] transition-colors">
                                Đăng nhập
                            </button>
                            <button className="bg-[#F37021] text-white  text-lg px-5 py-2 rounded-md font-semibold hover:bg-[#e05d17] transition  border-none">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>


                {/* Menu desktop */}
                <div className="hidden lg:flex items-center gap-6">
                    <ul className={`flex flex-col lg:flex-row items-center font-medium list-none space-x-0 lg:space-x-2 mt-3 ${baseText}`}>
                        {menuItems.map((item, idx) => (
                            <li key={idx} className="relative group">
                                <button className={`flex items-center gap-1 bg-transparent font-semibold border-none focus:outline-none transition-all duration-300 ${baseText} ${hoverText}`}>
                                    {item.label}
                                    {item.links && item.links.length > 0 && (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </button>
                                {item.links && item.links.length > 0 && (
                                    <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md list-none m-0 p-0 min-w-[180px]">
                                        {item.links.map((link, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.href}
                                                    className="block px-3 py-3 hover:bg-gray-100 no-underline text-neutral-950 hover:text-orange-500 text-sm whitespace-nowrap"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mt-4 lg:mt-0 lg:ml-6 lg:px-0 pb-3 lg:pb-0 mb-2.5">
                        <a
                            href="#"
                            className={`flex items-center gap-2 font-semibold no-underline transition-all duration-300 ${isAtTop ? "text-white" : "text-gray-800"
                                } hover:text-orange-600`}
                        >
                            <Globe size={18} />
                            Việt Nam - Tiếng Việt
                        </a>

                        <a
                            href="#"
                            className={`flex items-center gap-2 font-semibold no-underline transition-all duration-300 ${isAtTop ? "text-white" : "text-gray-800"
                                } hover:text-orange-600`}
                        >
                            <User size={18} />
                            Đăng nhập
                        </a>

                        <a
                            href="#"
                            className="px-3 py-2 rounded-md transition-colors font-medium no-underline bg-orange-600 hover:bg-gray-800 text-white"
                        >
                            Đăng ký
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Header;
