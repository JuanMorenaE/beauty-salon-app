import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Salons() {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                <h2 className="px-4 pt-4 font-semibold text-gray-700">Salones Destacados</h2>
                <a className="px-4 pt-4 font-semibold text-blue-400 text-sm" href="#">Ver Más</a>
            </div>
            <div className="flex p-4 gap-4 overflow-y-auto max-w-screen-2xl mx-auto">
                <Link to='/salon' className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                    <span className="rounded-3xl flex flex-col gap-2 w-[250px] bg-gray-100 p-1">
                        <div className="w-full bg-gray-200 aspect-[3/2] rounded-[20px] overflow-hidden">
                            <img src="https://img.freepik.com/free-photo/interior-latino-hair-salon_23-2150555185.jpg?w=996&t=st=1722745281~exp=1722745881~hmac=1ea0a43748b27597c56d8a703498db8ab17f40f2ae165158caf5e9eade9e484c" className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="p-2 flex flex-col gap-3">
                            <header>
                                <h4 className="font-semibold text-gray-700">Estética Princesas</h4>
                                <span className="flex gap-2 items-center text-xs text-gray-700">
                                    <strong className="flex items-center gap-2 text-sm font-medium"><FaStar className="text-yellow-500" />4.8</strong>(23)
                                </span>
                            </header>
                            <span className="flex gap-1 items-center text-xs text-gray-400">
                                <FaLocationDot /> Villa Luzuriaga, Argentina.
                            </span>
                        </div>
                    </span>
                </Link>
                <Link to='/salon' className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                    <span className="rounded-3xl flex flex-col gap-2 w-[250px] bg-gray-100 p-1">
                        <div className="w-full bg-gray-200 aspect-[3/2] rounded-[20px] overflow-hidden">
                            <img src="https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?w=900&t=st=1722745377~exp=1722745977~hmac=8f0a29b6d7be4237605c862c4e0741829e04713bd3f210d6ee74b3bdfdfde301" className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="p-2 flex flex-col gap-3">
                            <header>
                                <h4 className="font-semibold text-gray-700">Estética Princesas</h4>
                                <span className="flex gap-2 items-center text-xs text-gray-700">
                                    <strong className="flex items-center gap-2 text-sm font-medium"><FaStar className="text-yellow-500" />4.8</strong>(23)
                                </span>
                            </header>
                            <span className="flex gap-1 items-center text-xs text-gray-400">
                                <FaLocationDot /> Villa Luzuriaga, Argentina.
                            </span>
                        </div>
                    </span>
                </Link>
            </div>
        </>
    );
}

export default Salons;
