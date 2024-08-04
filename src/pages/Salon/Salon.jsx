import { Link } from "react-router-dom";

import { IoArrowBackOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import Navbar from "../../components/Navbar";

function Salon() {
    return (
        <main className="flex flex-col h-[100dvh]">
            <div className="grow basis-0 overflow-auto">
                <section className="flex justify-center items-center max-w-screen-2xl mx-auto aspect-[3/2] bg-gray-200 relative">
                    <header className="w-full p-4 pt-6 flex gap-4 justify-between max-w-screen-2xl mx-auto top-0 absolute z-10">
                        <Link
                            to={-1}
                            className="w-10 aspect-square flex justify-center items-center text-xl text-gray-800 bg-[#ffffffaa] rounded-lg cursor-pointer relative"
                        >
                            <IoArrowBackOutline />
                        </Link>
                        <button className="w-10 aspect-square flex justify-center items-center text-xl text-gray-800 bg-[#ffffffaa] rounded-lg cursor-pointer relative">
                            <IoShareSocialOutline />
                        </button>
                    </header>
                    <div className="flex gap-1 items-center justify-center absolute bottom-1 z-10">
                        <span className="w-[10px] h-[10px] bg-[#ffffffdd] rounded-full block"></span>
                        <span className="w-2 h-2 bg-[#ffffff88] rounded-full block"></span>
                        <span className="w-2 h-2 bg-[#ffffff88] rounded-full block"></span>
                        <span className="w-2 h-2 bg-[#ffffff88] rounded-full block"></span>
                    </div>
                    <img
                        src="https://img.freepik.com/free-photo/interior-latino-hair-salon_23-2150555185.jpg?w=996&t=st=1722745281~exp=1722745881~hmac=1ea0a43748b27597c56d8a703498db8ab17f40f2ae165158caf5e9eade9e484c"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </section>

                <main className="max-w-screen-2xl mx-auto">
                    <header className="flex flex-col gap-1 px-4 pt-4">
                        <h1 className="font-semibold text-gray-700 text-xl">Estética Princesas</h1>
                        <span className="flex gap-1 items-center text-xs text-gray-400">
                            <FaLocationDot /> Villa Luzuriaga, Argentina.
                        </span>
                        <div className="flex flex-wrap gap-3 items-center text-xs text-gray-700">
                            <p className="flex items-center gap-1"><strong className="flex items-center gap-2 text-sm font-medium"><FaStar className="text-yellow-500" />4.8</strong>(23)</p>
                            <p className="text-[9px] text-gray-400"><GoDotFill /></p>
                            <p className="flex items-center gap-1 font-medium"><FaRegClock /> 9:00 - 17:30</p>
                            <p className="text-[9px] text-gray-400"><GoDotFill /></p>
                            <p className="flex items-center gap-1 font-medium">$1200 - $9.650</p>
                        </div>
                    </header>

                    <nav className="flex px-4 pt-4 gap-3 overflow-y-auto max-w-screen-2xl mx-auto border-b">
                        <button className="text-sm p-2 cursor-pointer border-b-2 border-blue-400 text-blue-400">Servicios</button>
                        <button className="text-sm p-2 cursor-pointer text-gray-400">Productos</button>
                        <button className="text-sm p-2 cursor-pointer text-gray-400">Especialistas</button>
                        <button className="text-sm p-2 cursor-pointer text-gray-400">Galería</button>
                        <button className="text-sm p-2 cursor-pointer text-gray-400">Información</button>
                        <button className="text-sm p-2 cursor-pointer text-gray-400">Reseñas</button>
                    </nav>

                    <section className="p-4 grid grid-cols-2 gap-2">
                        <Link to='/salon' className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                            <span className="rounded-2xl flex flex-col gap-2 w-full bg-gray-100 p-1 pb-2">
                                <div className="w-full bg-gray-200 aspect-[3/2] rounded-[12px] overflow-hidden">
                                    <img src="https://img.freepik.com/free-photo/woman-getting-her-hair-washed-beauty-salon_23-2149167381.jpg?t=st=1722746612~exp=1722750212~hmac=80efa5f3092e187785917c53795df563b0b0cb78c9d9b36b6af335cd78e882bc&w=900" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="px-1 flex flex-col gap-2">
                                    <header>
                                        <h4 className="font-semibold text-gray-700 text-sm">Servicio 1</h4>
                                        <span className="flex gap-1 items-center text-xs text-gray-500">
                                            <FaStar className="text-yellow-500" /> 5.0 (0) - 30 min
                                        </span>
                                    </header>
                                    <div className="flex gap-1 px-1 justify-between items-center text-xs text-gray-400">
                                        <span className="text-blue-400 text-sm font-medium">$1.200</span>
                                        <button className="bg-blue-400 text-white p-[10px] rounded-full">
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>
                            </span>
                        </Link>

                        <Link to='/salon' className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                            <span className="rounded-2xl flex flex-col gap-2 w-full bg-gray-100 p-1 pb-2">
                                <div className="w-full bg-gray-200 aspect-[3/2] rounded-[12px] overflow-hidden">
                                    <img src="https://img.freepik.com/free-photo/female-client-getting-her-hair-done-hairdresser_23-2150771236.jpg?t=st=1722746645~exp=1722750245~hmac=a776d2a2b2989b3635b57dbd93c26b0ca59fc64df96eefabbc9e7ac69ee26dac&w=900" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="px-1 flex flex-col gap-2">
                                    <header>
                                        <h4 className="font-semibold text-gray-700 text-sm">Servicio 2</h4>
                                        <span className="flex gap-1 items-center text-xs text-gray-500">
                                            <FaStar className="text-yellow-500" /> 5.0 (0) - 2 hrs
                                        </span>
                                    </header>
                                    <div className="flex gap-1 px-1 justify-between items-center text-xs text-gray-400">
                                        <span className="text-blue-400 text-sm font-medium">$2.400</span>
                                        <button className="bg-blue-400 text-white p-[10px] rounded-full">
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>
                            </span>
                        </Link>

                        <Link to='/salon' className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                            <span className="rounded-2xl flex flex-col gap-2 w-full bg-gray-100 p-1 pb-2">
                                <div className="w-full bg-gray-200 aspect-[3/2] rounded-[12px] overflow-hidden">
                                    <img src="https://img.freepik.com/free-photo/woman-shaving-client-s-beard_23-2148353434.jpg?t=st=1722746672~exp=1722750272~hmac=0662ebbe3ff5dc6093e51c518f7ca198cd0969417171be9409553915bd8a0006&w=900" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="px-1 flex flex-col gap-2">
                                    <header>
                                        <h4 className="font-semibold text-gray-700 text-sm">Servicio 3</h4>
                                        <span className="flex gap-1 items-center text-xs text-gray-500">
                                            <FaStar className="text-yellow-500" /> 5.0 (0) - 4 hrs
                                        </span>
                                    </header>
                                    <div className="flex gap-1 px-1 justify-between items-center text-xs text-gray-400">
                                        <span className="text-blue-400 text-sm font-medium">$9.650</span>
                                        <button className="bg-blue-400 text-white p-[10px] rounded-full">
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>
                            </span>
                        </Link>

                        <Link to='/salon' className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                            <span className="rounded-2xl flex flex-col gap-2 w-full bg-gray-100 p-1 pb-2">
                                <div className="w-full bg-gray-200 aspect-[3/2] rounded-[12px] overflow-hidden">
                                    <img src="https://img.freepik.com/free-photo/interior-latino-hair-salon_23-2150555185.jpg?w=996&t=st=1722745281~exp=1722745881~hmac=1ea0a43748b27597c56d8a703498db8ab17f40f2ae165158caf5e9eade9e484c" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="px-1 flex flex-col gap-2">
                                    <header>
                                        <h4 className="font-semibold text-gray-700 text-sm">Servicio 4</h4>
                                        <span className="flex gap-1 items-center text-xs text-gray-500">
                                            <FaStar className="text-yellow-500" /> 5.0 (0) - 30 min
                                        </span>
                                    </header>
                                    <div className="flex gap-1 px-1 justify-between items-center text-xs text-gray-400">
                                        <span className="text-blue-400 text-sm font-medium">$4.500</span>
                                        <button className="bg-blue-400 text-white p-[10px] rounded-full">
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>
                            </span>
                        </Link>

                    </section>

                </main>
            </div>
            <Navbar />
        </main>
    );
}

export default Salon;
