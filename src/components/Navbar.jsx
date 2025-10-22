import React from "react";
const Navbar = () => {
    const cards = [
        {
            title: "Doanh nghiệp",
            description: "Giải pháp giao hàng hỗ trợ nhanh chóng cho công việc kinh doanh của bạn",
            link: "#",
            readMore: "Tìm hiểu thêm",
            icon: "https://www.lalamove.com/hubfs/Lalamove%20Website%202020/Homepage_button_icon/icn_business.svg",
            iconHover: "https://www.lalamove.com/hubfs/Lalamove%20Website%202020/Homepage_button_icon/icn_business_hover.svg",
        },
        {
            title: "Cá nhân",
            description: "Dễ dàng đặt đơn giao hàng nhanh chóng nhờ kết nối với tài xế gần nhất",
            link: "#",
            readMore: "Tìm hiểu thêm",
            icon: "https://www.lalamove.com/hubfs/Lalamove%20Website%202020/Homepage_button_icon/icn_personal.svg",
            iconHover: "https://www.lalamove.com/hubfs/Lalamove%20Website%202020/Homepage_button_icon/icn_personal_hover.svg",
        },
        {
            title: "Tài xế",
            description: "Công việc giao hàng với Lalamove: tạo thêm thu nhập, chủ động thời gian",
            link: "#",
            readMore: "Đăng ký ngay",
            icon: "https://www.lalamove.com/hubfs/Lalamove%20Website%202020/Homepage_button_icon/icn_driver.svg",
            iconHover: "https://www.lalamove.com/hubfs/Lalamove%20Website%202020/icon/icn_driver_hover_01.svg",
        },
    ];
    return (
        <div className="top-banner-container hasBox ">
            <div
                className="top-banner-img"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 20%, rgba(0,0,0,0) 60%), url("https://www.lalamove.com/hubfs/Lalamove%20Website%202020/Vietnam_Site/Homepage/VN_image_home_mainBanner.jpg")`,
                    height: '700px',
                    width: 'auto',
                    backgroundSize: '130% 110%',
                    backgroundPosition: 'center'
                }}
            >
                <div className="top-banner-content container ml-20" style={{ paddingTop: '150px' }}>
                    <div className="gradient-overlay-left"></div>
                    <div className="section">
                        <div className="banner-section">
                            <h1
                                className="font-bold text-white text-left pl-16"
                                style={{ fontSize: "80px" }}
                            >
                                Giao hàng siêu tốc
                            </h1>
                            <p className="font-bold text-white text-left mt-6 pb-md-3 pl-16 "
                                style={{ fontSize: "20px" }}
                            >
                                Nền tảng giao hàng theo yêu cầu.<br /> Đặt 10 giây là có xe van - tải (*)
                            </p>
                            <div className="top-banner-btn mt-2 pl-16">
                                <a
                                    href="#"
                                    className="inline-block px-12 py-4 text-xl font-bold rounded-xl
                                                bg-gradient-to-r from-[#ea8705] to-[#f06b3a] text-white
                                                shadow-[0_6px_18px_rgba(0,0,0,0.25)]
                                                hover:from-[#1c1c1c] hover:to-[#4a4a4a] hover:text-[#f06b3a]
                                                transition-all duration-300 ease-in-out no-underline"
                                >
                                    Giao hàng ngay
                                </a>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white py-20">
                {/* Các thẻ card */}
                <div
                    className="
                                flex flex-wrap justify-center gap-4
                                lg:flex-nowrap lg:absolute lg:-top-24 lg:left-1/2 lg:-translate-x-1/2
                                w-full max-w-6xl z-20
                                px-4
                                "
                >
                    {cards.map((card, index) => (
                        <a
                            key={index}
                            href={card.link}
                            className="
                                    group bg-[#F37021] text-white
                                    flex-1 min-w-[100px] max-w-[200px]
                                    text-center px-3 py-5
                                    rounded-lg transition-transform transform
                                    hover:-translate-y-2 hover:shadow-lg
                                    no-underline
                                    "
                        >
                            <div className="flex flex-col items-center gap-3">
                                {/* Icon */}
                                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                                    <img
                                        src={card.icon}
                                        alt={`${card.title} icon`}
                                        className="absolute inset-0 w-full h-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                                    />
                                    <img
                                        src={card.iconHover}
                                        alt={`${card.title} hover icon`}
                                        className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                {/* Tiêu đề */}
                                <h3 className="text-base sm:text-lg font-bold tracking-tight">{card.title}</h3>

                                {/* Mô tả */}
                                <p className="text-xs sm:text-sm mt-1 leading-snug line-clamp-2">{card.description}</p>

                                {/* Nút đọc thêm */}
                                <span className="mt-2 font-semibold text-white hover:underline inline-flex items-center gap-1 text-sm">
                                    {card.readMore} <span>›</span>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Navbar;