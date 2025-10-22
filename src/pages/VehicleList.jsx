import { useState, useRef, useEffect } from "react";
import VehicleItem from "./homepages/VehicleItem";

const vehicleData = [
    {
        img: "https://www.lalamove.com/hubfs/Bike_.png",
        title: "Xe máy",
        detailImg: "https://www.lalamove.com/hubfs/Honda_Wave_RIGHT%20(1).png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "30 kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "40cm x 40cm x 40cm" },
            { head: "Phù hợp cho:", data: "Giao hàng hóa nhỏ như tài liệu, thực phẩm, mỹ phẩm, quần áo hoặc phụ kiện." },
            { head: "Lưu ý:", data: "Phí dịch vụ dựa trên nhiều yếu tố, tổng giá có thể thay đổi." },
        ],
    },
    {
        img: "https://www.lalamove.com/hubfs/Pick-up%20Truck_.png",
        title: "Xe bán tải",
        detailImg: "https://www.lalamove.com/hubfs/Toyota_Hilux_(Mk8)_DoubleCab_Revo_2700000.png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "500 kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "140cm x 150cm x 50cm" },
            { head: "Phù hợp cho:", data: "Giao hàng hóa số lượng nhiều, hàng to cồng kềnh..." },
            { head: "Lưu ý:", data: "Phí dịch vụ dựa trên nhiều yếu tố, tổng giá có thể thay đổi." },
        ],
    },
    {
        img: "https://www.lalamove.com/hubfs/Suzuki_Carrry_450000.png",
        title: "Xe van 500kg",
        detailImg: "https://www.lalamove.com/hubfs/Suzuki_Carry_2700000.png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "800 kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "200cm x 150cm x 70cm" },
            { head: "Phù hợp cho:", data: "Giao hàng vừa và lớn, linh hoạt" },
            { head: "Lưu ý:", data: "Phí dịch vụ có thể thay đổi tùy chi tiết đơn hàng." },
        ],
    },
    {
        img: "https://www.lalamove.com/hubfs/Van%201%20T%20(1).png",
        title: "Xe van 1 tấn",
        detailImg: "https://www.lalamove.com/hubfs/Suzuki_Carry_2700000.png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "1 tấn - 1,000kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "210cm x 130cm x 130cm" },
            { head: "Phù hợp cho:", data: "Phù hợp hàng hóa dưới 990kg. Chạy được trong khung giờ cấm tải." },
            { head: "Lưu ý:", data: "Phí dịch vụ có thể thay đổi tùy tình hình thực tế." },
        ],
    },
];

const VehicleList = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const columns = 3;
    const detailRef = useRef(null);

    // Khi mở xe -> tự động scroll đến phần chi tiết
    useEffect(() => {
        if (openIndex !== null && detailRef.current) {
            setTimeout(() => {
                detailRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 300); // chờ animation mở xong rồi cuộn
        }
    }, [openIndex]);

    return (
        <div className="max-w-6xl w-full mx-auto py-12 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-none">
                {vehicleData.map((vehicle, idx) => {
                    const isOpen = openIndex === idx;
                    const isEndOfRow = (idx + 1) % columns === 0;
                    const isLastItem = idx === vehicleData.length - 1;

                    return (
                        <div key={idx} className="contents">
                            <VehicleItem
                                {...vehicle}
                                isOpen={isOpen}
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                            />

                            {(isEndOfRow || isLastItem) &&
                                openIndex !== null &&
                                Math.floor(openIndex / columns) === Math.floor(idx / columns) && (
                                    <div
                                        ref={detailRef}
                                        className="md:col-span-3 col-span-1 transition-all duration-500 ease-in-out"
                                    >
                                        <div className="overflow-hidden bg-gray-50 border-t-4 border-orange-500 rounded-2xl p-6 shadow-md mt-4 w-full max-w-5xl mx-auto">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-tight text-center lg:text-left">
                                                {vehicleData[openIndex].title}
                                            </h3>

                                            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                                                {/* Ảnh */}
                                                <div className="flex-[2] flex justify-center lg:justify-start">
                                                    <img
                                                        src={vehicleData[openIndex].detailImg}
                                                        alt={vehicleData[openIndex].title}
                                                        className="w-64 h-auto object-contain drop-shadow-md"
                                                    />
                                                </div>

                                                {/* Chi tiết */}
                                                <div className="flex-[3] bg-gray-50 rounded-lg p-4 text-gray-800 text-[0.95rem] leading-relaxed flex flex-col justify-center">
                                                    <div className="max-w-[550px] w-full mx-auto">
                                                        {vehicleData[openIndex].details.map((item, i) => (
                                                            <div key={i}>
                                                                <div className="flex flex-col sm:flex-row items-start sm:items-center py-2 sm:py-3">
                                                                    <div className="sm:w-48 font-semibold text-[1rem] text-gray-900 shrink-0">
                                                                        {item.head}
                                                                    </div>
                                                                    <div className="font-medium sm:ml-2 text-[0.9rem] text-gray-700">
                                                                        {item.data}
                                                                    </div>
                                                                </div>
                                                                {i !== vehicleData[openIndex].details.length - 1 && (
                                                                    <hr className="border-t border-gray-300 border-[1px]" />
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VehicleList;
