import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        link: "#",
        image:
            "https://3342377.fs1.hubspotusercontent-na1.net/hubfs/3342377/round%204-01.jpg",
        alt: "Dat-10s-co-xe-van-tai-lalamove",
    },
    {
        link: "#",
        image:
            "https://3342377.fs1.hubspotusercontent-na1.net/hubfs/3342377/Landing%20page-Sep-22-2025-06-50-17-2783-AM.jpg",
        alt: "Landing Page",
    },
    {
        link: "#",
        image:
            "https://3342377.fs1.hubspotusercontent-na1.net/hubfs/3342377/USR%20-%20Ride%20HAN%20Launching_LANDING%20PAGE.png",
        alt: "Ride HAN Launching",
    },
    {
        link: "#",
        image:
            "https://3342377.fs1.hubspotusercontent-na1.net/hubfs/3342377/N%C3%A2ng%20c%E1%BA%A5p%20TKDN%20-%20Size%20LP_LANDING%20PAGE.png",
        alt: "Business Landing Page",
    },
];
const features = [
    {
        icon: "https://www.lalamove.com/hubfs/Lalamove%20Website%202020/icon/icn_affordable.png",
        title: "Cước phí thấp và rõ ràng",
        desc: "Giá cả rõ ràng và không có chi phí ẩn. Thanh toán trực tiếp qua ứng dụng hoặc bằng tiền mặt cho tài xế của bạn.",
    },
    {
        icon: "https://www.lalamove.com/hubfs/time-2.png",
        title: "Kết nối nhanh chóng",
        desc: "Kết nối tài xế giao hàng chỉ trong 10 giây (*), đối tác tài xế sẽ đến nhận hàng và giao ngay. (*) Thời gian tối thiểu dựa trên dữ liệu từ Lalamove 01-06/2025.",
    },
    {
        icon: "https://www.lalamove.com/hubfs/Lalamove%20Website%202020/icon/icn_fast.png",
        title: "Xe nào cũng có, đủ loại trọng tải",
        desc: "Đa dạng phương tiện vận chuyển giúp đáp ứng mọi yêu cầu giao hàng bất cứ lúc nào.",
    },
    {
        icon: "https://www.lalamove.com/hubfs/icon-multi-location-2.svg",
        title: "Giao hàng mọi tỉnh thành",
        desc: "Đối tác tài xế chuyên nghiệp đảm bảo giao hàng an toàn và nhanh chóng đến mọi tỉnh/thành trên toàn quốc.",
    },
];
const apps = [
    {
        title: "Dành cho Khách hàng",
        logo: "https://www.lalamove.com/hubfs/User_app_Generic_2024Oct-1.png",
        links: [
            {
                href: "#",
                img: "https://www.lalamove.com/hubfs/icon-apple-app-store-3.png",
                alt: "App Store",
            },
            {
                href: "#",
                img: "https://www.lalamove.com/hubfs/icon-google-play-3.webp",
                alt: "Google Play",
            },
        ],
    },
    {
        title: "Dành cho Đối tác Tài xế",
        logo: "https://www.lalamove.com/hubfs/Driver_app_VN_2024Apr%20(1).png",
        links: [
            {
                href: "#",
                img: "https://www.lalamove.com/hubfs/icon-apple-app-store-3.png",
                alt: "App Store",
            },
            {
                href: "#",
                img: "https://www.lalamove.com/hubfs/icon-google-play-3.webp",
                alt: "Google Play",
            },
        ],
    },
];


const TopBanner = () => {
    return (
        <>
            <section className="max-w-5xl mx-auto py-10">
                <h2 className="text-ellipsis text-5xl font-bold text-center mb-8 mt-36 text-gray-800">
                    Ưu đãi mới nhất
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop
                    className="w-full h-full object-cover"
                >
                    {slides.map((s, i) => (
                        <SwiperSlide key={i}>
                            <a href={s.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={s.image}
                                    alt={s.alt}
                                    className="w-full object-cover rounded-2xl"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <section className="max-w-6xl mx-auto py-16 px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Image */}
                    <div className="md:w-2/5 mt-28">
                        <img
                            src="https://www.lalamove.com/hubfs/shutterstock_713439202_retouch.jpg"
                            alt="Feature"
                            className="w-full h-80 object-cover rounded-xl shadow-md"
                        />
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 space-y-6">
                        <div className="text-gray-600 uppercase tracking-wide">Đối tác giao hàng 24/7</div>
                        <h2 className="text-3xl font-bold text-gray-900">Nhanh chóng. Đơn giản. Giá phải chăng</h2>

                        <div className="grid gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex space-x-4 items-start">
                                    <img src={feature.icon} alt={feature.title} className="w-16 h-16 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto py-24 px-6"> {/* tăng padding top/bottom */}
                {/* Title */}
                <div className="text-center mb-20">
                    <h2 className="text-6xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Ứng dụng của MoveMate
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-16"> {/* tăng khoảng cách giữa cards */}
                    {apps.map((app, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center"
                        >
                            {/* Logo */}
                            <div className="mb-8">
                                <img src={app.logo} alt={app.title} className="w-40 h-40 object-contain" /> {/* logo to hơn */}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
                                {app.title}
                            </h3>

                            {/* Links */}
                            <div className="flex space-x-8">
                                {app.links.map((link, lidx) => (
                                    <a key={lidx} href={link.href} target="_blank" rel="noopener noreferrer">
                                        <img src={link.img} alt={link.alt} className="w-40 h-auto" /> {/* icon to hơn */}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>

    );
};

export default TopBanner;
