import { useState, useRef, useEffect } from "react";
import VehicleItem from "./VehicleItem";

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
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
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
            { head: "Phù hợp cho:", data: "Giao hàng hóa số lượng nhiều, hàng to cồng kềnh không thể vừa với cốp xe ô tô nhưng không yêu cầu sức chứa to như xe tải. Linh hoạt và không bị ảnh hưởng bởi thời gian cấm tải." },
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
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
            { head: "Phù hợp cho:", data: "Phù hợp hàng hóa tối đa 500kg. Chạy được trong khung giờ cấm tải." },
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
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
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
        ],
    },
    {
        img: "	https://www.lalamove.com/hubfs/Tata_Ace_EX_450000-2.png",
        title: "Xe tải 500kg",
        detailImg: "https://www.lalamove.com/hubfs/Untitled-3_Truck%20th%C3%B9ng%20l%E1%BB%ADng.png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "500kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "190cm x 140cm x 140cm" },
            { head: "Phù hợp cho:", data: "Giao hàng hóa số lượng nhiều, hàng to cồng kềnh.  Phù hợp khi cần chuyển nhà, chuyển văn phòng, vận chuyển đồ dùng/ thiết bị nhỏ trong tải trọng cho phép." },
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
        ],
    },
    {
        img: "https://www.lalamove.com/hubfs/Suzuki_Carry_Box_450000.png",
        title: "Xe tải 1 tấn",
        detailImg: "https://www.lalamove.com/hubfs/Suzuki_Carry_Box_2700000.png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "1 tấn - 1,000kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "300cm x 160cm x 160cm" },
            { head: "Phù hợp cho:", data: "Giao hàng hóa số lượng nhiều, hàng to cồng kềnh.  Phù hợp khi cần chuyển nhà, chuyển văn phòng, vận chuyển đồ dùng/ thiết bị nhỏ trong tải trọng cho phép." },
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
        ],
    },
    {
        img: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_450000.png",
        title: "Xe tải 1,5 tấn",
        detailImg: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_2700000%20(1).png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "1.5 tấn - 1.500kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "320cm x 160cm x 170cm" },
            { head: "Phù hợp cho:", data: "Giao hàng hóa số lượng nhiều hơn, hàng to cồng kềnh cần trọng tải lớn. Đa dạng loại xe: xe tải thùng/ xe tải mui bạt/ xe thùng lạnh." },
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
        ],
    },
    {
        img: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_450000.png",
        title: "Xe tải 2 tấn",
        detailImg: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_2700000%20(1).png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "2 tấn - 2,000kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "400cm x 170cm x 170cm" },
            { head: "Phù hợp cho:", data: "Với mức tải trọng lớn nhất đến 2 tấn, giao hàng hóa số lượng nhiều hơn, hàng to cồng kềnh tiết kiệm hơn. Đa dạng loại xe: xe tải thùng/ xe tải mui bạt/ xe thùng lạnh." },
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
        ],
    },
    {
        img: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_450000.png",
        title: "Xe tải 2.5 tấn",
        detailImg: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_2700000%20(1).png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "2,5 tấn - 2,500kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "420cm x 170cm x 180cm" },
            { head: "Phù hợp cho:", data: "Với mức tải trọng đến 2,5 tấn, giao hàng hóa số lượng lớn, hàng to cồng kềnh tiết kiệm hơn khi giao đường dài hay đến các khu công nghiệp. Hỗ trợ giao liên tỉnh từ TP. HCM và Hà Nội đến các tỉnh lân cận." },
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
        ],
    },
    {
        img: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_450000.png",
        title: "Xe tải 3.5 tấn",
        detailImg: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_2700000%20(1).png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "3,5 tấn - 3,500kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "420cm x 180cm x 180cm" },
            { head: "Phù hợp cho:", data: "Với mức tải trọng lớn nhất đến 3,5 tấn, giao hàng hóa số lượng lớn, hàng to cồng kềnh tiết kiệm hơn khi giao đường dài hay đến các khu công nghiệp. Hỗ trợ giao liên tỉnh từ TP. HCM và Hà Nội đến các tỉnh lân cận. " },
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
        ],
    },
    {
        img: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_450000.png",
        title: "Xe tải 5 tấn",
        detailImg: "https://www.lalamove.com/hubfs/Isuzu_NRR_Refrigerator_Truck_2700000%20(1).png",
        details: [
            { head: "Cước phí:", data: "Vui lòng xem giá chi tiết tại ứng dụng hoặc web app" },
            { head: "Tải trọng tối đa:", data: "5 tấn - 5000kg" },
            { head: "Kích cỡ hàng hóa tối đa:", data: "600cm x 220cm x 220cm" },
            { head: "Phù hợp cho:", data: "Với mức tải trọng lớn nhất đến 5 tấn, giao hàng hóa số lượng lớn, hàng to cồng kềnh tiết kiệm hơn khi giao đường dài hay đến các khu công nghiệp. " },
            { head: "Lưu ý:", data: "Phí dịch vụ được dựa trên nhiều yếu tố như tình hình giao thông, kích thước hàng hóa, khả năng nhận đơn của đối tác tài xế, phí cầu đường, các phụ phí,... Vì vậy tổng giá dịch vụ có thể thay đổi. Giá hiển thị tại thời điểm đặt đơn có thể không giữ nguyên nếu có thay đổi về chi tiết đơn hàng." },
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
            // Đợi khung mở ra mượt mà (animation 400ms)
            setTimeout(() => {
                const elementTop =
                    detailRef.current.getBoundingClientRect().top + window.scrollY - window.innerHeight / 4;

                // Cuộn mượt với "ease" chậm dần
                let start = null;
                const startY = window.scrollY;
                const distance = elementTop - startY;
                const duration = 800; // 👈 thời gian cuộn (ms)
                const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

                function smoothScroll(timestamp) {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    const easedProgress = easeOutCubic(progress);
                    window.scrollTo(0, startY + distance * easedProgress);

                    if (progress < 1) requestAnimationFrame(smoothScroll);
                }

                requestAnimationFrame(smoothScroll);
            }, 400);
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
