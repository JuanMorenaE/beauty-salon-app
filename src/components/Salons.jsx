import {FaStar} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";

function Salons() {
    return (
        <div className="flex flex-col gap-5 p-4">
            <article className="grid grid-cols-[40%,1fr] justify-center items-center cursor-pointer w-full rounded-lg overflow-hidden border">
                <span className="aspect-[4/3] w-full bg-gray-100"></span>
                <div className="p-4 w-full h-full flex flex-col gap-1">
                    <h4 className="text-base text-gray-500">Estética Princesas</h4>
                    <span className="flex gap-1 items-center text-xs text-gray-400">
                        <FaLocationDot /> Villa Luzuriaga, Argentina.
                    </span>
                    <span className="flex gap-1 items-center text-sm font-medium text-gray-400">
                        <FaStar className="text-yellow-400" /> 4.8
                    </span>
                </div>
            </article>

            <article className="grid grid-cols-[40%,1fr] justify-center items-center cursor-pointer w-full rounded-lg overflow-hidden border">
                <span className="aspect-[4/3] w-full bg-gray-100"></span>
                <div className="p-4 w-full h-full flex flex-col gap-1">
                    <h4 className="text-base text-gray-500">Estética Princesas</h4>
                    <span className="flex gap-1 items-center text-xs text-gray-400">
                        <FaLocationDot /> Villa Luzuriaga, Argentina.
                    </span>
                    <span className="flex gap-1 items-center text-sm font-medium text-gray-400">
                        <FaStar className="text-yellow-400" /> 4.8
                    </span>
                </div>
            </article>

            <article className="grid grid-cols-[40%,1fr] justify-center items-center cursor-pointer w-full rounded-lg overflow-hidden border">
                <span className="aspect-[4/3] w-full bg-gray-100"></span>
                <div className="p-4 w-full h-full flex flex-col gap-1">
                    <h4 className="text-base text-gray-500">Estética Princesas</h4>
                    <span className="flex gap-1 items-center text-xs text-gray-400">
                        <FaLocationDot /> Villa Luzuriaga, Argentina.
                    </span>
                    <span className="flex gap-1 items-center text-sm font-medium text-gray-400">
                        <FaStar className="text-yellow-400" /> 4.8
                    </span>
                </div>
            </article>
        </div>
    );
}

export default Salons;
