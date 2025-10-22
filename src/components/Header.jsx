import React, { useState, useEffect } from "react";
import { Globe, User } from "lucide-react";

const menuItems = [
    {
        label: "Giao Hàng",
        links: [
            { label: "Cá Nhân", href: "https://www.lalamove.com/vi-vn/personal" },
            { label: "Doanh Nghiệp", href: "https://www.lalamove.com/vi-vn/business" },
        ],
    },
    {
        label: "Di chuyển",
        links: [{ label: "Đặt xe di chuyển", href: "https://www.lalamove.com/vi-vn/personal" }],
    },
    {
        label: "Tài Xế",
        links: [
            { label: "Trở thành đối tác", href: "https://www.lalamove.com/vi-vn/driver" },
            { label: "Quản lý đội xe", href: "https://www.lalamove.com/vi-vn/fleet-management" },
        ],
    },
    {
        label: "Về Lalamove",
        links: [
            { label: "Giới thiệu", href: "https://www.lalamove.com/vi-vn/about-lalamove" },
            { label: "Delivery care", href: "https://www.lalamove.com/careers" },
            { label: "Blog", href: "https://www.lalamove.com/vi-vn/contact" },
            { label: "Cơ hội nghề nghiệp", href: "https://www.lalamove.com/vi-vn/about-lalamove" },
            { label: "Liên hệ hỗ trợ", href: "https://www.lalamove.com/vi-vn/about-lalamove" },
        ],
    },
];

const Header = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsAtTop(window.scrollY < 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const baseText = isAtTop ? "text-white" : "text-gray-800";
    const hoverText = "hover:text-orange-500 hover:underline hover:decoration-2 hover:decoration-orange-500 hover:underline-offset-4";

    return (
        <nav
            className={`transition-all duration-300 ${isAtTop ? "absolute top-0 left-0 w-full bg-transparent" : "fixed top-0 left-0 w-full bg-white shadow-md z-50"
                }`}
        >
            <div className="w-[80%] flex justify-between items-center mx-auto">
                {/* Toggle mobile */}
                <button
                    className={`lg:hidden focus:outline-none ${baseText}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Menu */}
                <div
                    className={`${menuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg z-50" : "hidden"} 
                                lg:flex lg:flex-row lg:items-center lg:static lg:w-auto lg:bg-transparent lg:shadow-none`}
                >
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src="https://www.lalamove.com/hubfs/Lalamove%20Website%202020/logo.svg"
                            alt="Lalamove Logo"
                            className="h-12 mt-2"
                        />
                    </a>

                    {/* Left Menu */}
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
                                                    className="block px-3 py-3 hover:bg-gray-100 no-underline text-black text-sm whitespace-nowrap"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}

                        <li>
                            <a href="https://www.lalamove.com/vi-vn/lalamove-rewards" className={`font-semibold no-underline transition-all duration-300 ${baseText} ${hoverText}`}>
                                Ưu Đãi
                            </a>
                        </li>
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
                            href="https://lalamove.onelink.me/2vQB/of9j9igz"
                            className={`flex items-center gap-2 font-semibold no-underline transition-all duration-300 ${isAtTop ? "text-white" : "text-gray-800"
                                } hover:text-orange-600`}
                        >
                            <User size={18} />
                            Đăng nhập
                        </a>

                        <a
                            href="https://www.lalamove.com/vi-vn/driver"
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
