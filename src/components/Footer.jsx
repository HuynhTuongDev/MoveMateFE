import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";
import logo from "../../public/lg.png"
const Footer = () => {
    const sections = [
        {
            title: "Giao hàng",
            links: [
                { name: "Doanh Nghiệp", href: "#" },
                { name: "Cá Nhân", href: "#" },
                { name: "Tài Xế", href: "#" },
                { name: "Bảng Giá Dịch Vụ", href: "#" },
                { name: "Câu Hỏi Thường Gặp", href: "#" },
            ],
        },
        {
            title: "Di chuyển",
            links: [
                { name: "Tài Xế", href: "#" },
                { name: "Đặt Xe Di Chuyển", href: "#" },
                { name: "Ưu Đãi", href: "#" },
                { name: "Câu Hỏi Thường Gặp", href: "#" },
            ],
        },
        {
            title: "Thông Tin",
            links: [
                { name: "Về Chúng Tôi", href: "#" },
                { name: "Deliver Care", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Tuyển Dụng", href: "#" },
                { name: "Liên Hệ Hỗ Trợ", href: "#" },
                { name: "Sơ đồ trang web", href: "#" },
            ],
        },
        {
            title: "Pháp Lý",
            links: [
                { name: "Chính Sách Quyền Riêng Tư", href: "#" },
                { name: "Chính Sách Cookie", href: "#" },
                { name: "Điều Khoản Và Điều Kiện", href: "#" },
            ],
            includeSocial: true, // 👈 chỉ cột này có thêm phần social
        },
    ];

    const social = [
        { icon: <FaFacebookF />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaYoutube />, href: "#" },
    ];

    return (
        <footer className="bg-gray-100 border-t border-gray-300 text-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* --- Top Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* Logo */}
                    <div>
                        <a href="https://www.lalamove.com/vi-vn">
                            <img
                                src={logo}
                                alt="Lalamove Logo"
                                className="h-28 mt-1"
                            />
                        </a>
                    </div>

                    {/* Dynamic Sections */}
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h5 className="font-semibold mb-3 mt-3">{section.title}</h5>
                            <ul className="space-y-2 list-none pl-0 text-sm">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block no-underline text-neutral-800 hover:text-orange-500 visited:text-black active:text-orange-600 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* 👇 Chỉ hiện khi includeSocial = true */}
                            {section.includeSocial && (
                                <div className="mt-6">
                                    <h6 className="font-semibold mb-3 mt-2">THEO DÕI LALAMOVE</h6>
                                    <div className="flex space-x-4 mt-2">
                                        {social.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-orange-500 text-xl transition-colors text-neutral-800"
                                            >
                                                {item.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <hr />
                {/* --- Bottom Section --- */}
                <div className="border-t-0 border-gray-300 flex flex-col md:flex-row justify-between items-center text-lg text-gray-600">
                    <p className="mt-3">© LALAMOVE 2025. ALL RIGHTS RESERVED</p>
                    <div>
                        <FaGlobe />
                        <span>Việt Nam – Tiếng Việt</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
