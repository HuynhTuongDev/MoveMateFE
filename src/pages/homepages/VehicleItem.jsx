import { ChevronDown, ChevronUp } from "lucide-react";

const VehicleItem = ({ img, title, isOpen, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white border rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 p-6 hover:shadow-md ${isOpen ? "border-orange-500" : "border-transparent"
                }`}
        >
            <img
                src={img}
                alt={title}
                className="h-40 object-contain mb-3 transition-transform duration-300 hover:scale-105"
            />
            <div className="flex items-center gap-2 text-gray-800 font-semibold text-3xl">
                {title}
                {isOpen ? (
                    <ChevronUp className="text-orange-500" />
                ) : (
                    <ChevronDown className="text-orange-500" />
                )}
            </div>
        </div>
    );
};

export default VehicleItem;
