import React from "react";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img
                    src="/logo.png" // Thay bằng logo MoveMate của bạn
                    alt="MoveMate Logo"
                    className="h-8 w-auto"
                />
                <span className="text-2xl font-bold text-blue-800">MoveMate</span>
            </div>

            {/* Menu */}
            <nav className="flex items-center space-x-8 text-black font-medium">
                <div className="group relative cursor-pointer">
                    <span>Dịch vụ ▾</span>
                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md">
                        <ul className="py-2 text-sm">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Giao hàng nhanh</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Chuyển nhà</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Giao hàng doanh nghiệp</li>
                        </ul>
                    </div>
                </div>

                <div className="group relative cursor-pointer">
                    <span>Khách hàng ▾</span>
                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md">
                        <ul className="py-2 text-sm">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cá nhân</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Doanh nghiệp</li>
                        </ul>
                    </div>
                </div>

                <div className="group relative cursor-pointer">
                    <span>Tài xế ▾</span>
                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md">
                        <ul className="py-2 text-sm">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Đăng ký</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Chính sách</li>
                        </ul>
                    </div>
                </div>

                <div className="group relative cursor-pointer">
                    <span>Tuyển dụng ▾</span>
                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md">
                        <ul className="py-2 text-sm">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Vị trí mở</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Văn hóa</li>
                        </ul>
                    </div>
                </div>

                <div className="cursor-pointer">
                    <span>Tin tức</span>
                </div>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
                <button className="border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-md hover:bg-orange-50 transition">
                    Đăng nhập
                </button>
                <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition">
                    Đăng ký
                </button>
            </div>
        </header>
    );
};

export default Header;
