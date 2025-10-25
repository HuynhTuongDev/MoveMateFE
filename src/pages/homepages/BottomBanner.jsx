import React, { useState } from "react";
import VehicleList from "./VehicleList";
import logo from "../../../public/lg.png"
const slides = [
    {
        id: 1,
        image: "https://www.lalamove.com/hubfs/Giao%20nhi%E1%BB%81u%20%C4%91i%E1%BB%83m%202.jpg",
        title: "Tùy chọn thêm vào đến 19 điểm trả hàng",
    },
    {
        id: 2,
        image: "https://www.lalamove.com/hubfs/Giao%20nhi%E1%BB%81u%20%C4%91i%E1%BB%83m%201.jpg",
        title: "Nhập địa điểm nhận hàng và trả hàng trong đơn hàng của bạn",
    },
    {
        id: 3,
        image: "https://www.lalamove.com/hubfs/U3.jpg",
        title: "Lựa chọn phương tiện vận chuyển phù hợp và tùy chọn thêm vào những dịch vụ hỗ trợ",
    },
    {
        id: 4,
        image: "https://www.lalamove.com/hubfs/HY%202.jpg",
        title: "Biết ngay giá trước khi bạn đặt đơn hàng",
    },
    {
        id: 5,
        image: "https://www.lalamove.com/hubfs/U5.jpg",
        title: "Theo dõi đơn hàng của bạn theo thời gian thực",
    },
];

const BottomBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <section className="max-w-6xl mx-auto py-16 px-4">
                <h2 className="text-4xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                    Đặt giao ngay với MoveMate chỉ trong vài bước đơn giản
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Ảnh bên trái với khung điện thoại nhỏ nhất */}
                    <div className="md:w-1/2 flex justify-center items-center">
                        <div className="relative w-44 border-8 border-gray-800 rounded-3xl shadow-2xl overflow-hidden 
                            ring-4 ring-orange-400 ring-offset-2 ring-offset-black">
                            {/* 'Notch' trên điện thoại */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black rounded-b-xl"></div>

                            <img
                                src={slides[activeIndex].image}
                                alt={slides[activeIndex].title}
                                className="w-full h-auto object-contain border-black border-b-8"
                            />
                        </div>
                    </div>

                    {/* Chữ bên phải */}
                    <div className="md:w-2/3 flex flex-col justify-around space-y-4 h-full">
                        {slides.map((slide, idx) => (
                            <button
                                key={slide.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 
                                        text-lg md:text-xl focus:outline-none bg-white font-semibold border-none flex-1 text-left
                                    ${idx === activeIndex
                                        ? "text-orange-500"
                                        : "text-gray-800"
                                    }`}
                            >
                                <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full font-bold flex-shrink-0 bg-orange-500 text-white">
                                    {idx + 1}
                                </span>
                                <span className="flex-1">{slide.title}</span>
                            </button>

                        ))}
                    </div>
                </div >
            </section >
            <VehicleList />
            <div
                className="relative w-full bg-cover bg-center min-h-[400px] flex items-center justify-start mt-40"
                style={{
                    backgroundImage:
                        "url('https://www.lalamove.com/hubfs/Footer%20Lalamove.jpg')",
                }}
            >
                {/* Ô cam nằm đè lên ảnh và nhô lên phía trên */}
                <div className="absolute left-10 -top-1/4 bg-[#f36f21] text-white px-10 py-14 md:px-14 md:py-12 max-w-sm shadow-2xl rounded-sm ml-40">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                        Bạn đã sẵn sàng đặt xe?
                    </h2>
                    <p className="text-base md:text-lg mb-8">
                        Tải app ngay để đơn hàng của bạn được giao đến tận nơi.
                    </p>

                    {/* Nút tải app */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <img
                            src={logo}
                            alt="Lalamove App Icon"
                            className="h-24"
                        />
                        <a
                            href="https://lalamove.onelink.me/MgeC?af_dp=lalamove%3A%2F%2Fopen"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://www.lalamove.com/hubfs/icon-apple-app-store-3.png"
                                alt="App Store"
                                className="h-12 hover:scale-105 transition-transform"
                            />
                        </a>
                        <a
                            href="https://lalamove.onelink.me/MgeC?af_dp=lalamove%3A%2F%2Fopen"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://www.lalamove.com/hubfs/Lalamove%20Website%202020/App_icon/icon-google-play.png"
                                alt="Google Play"
                                className="h-12 hover:scale-105 transition-transform"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BottomBanner;
