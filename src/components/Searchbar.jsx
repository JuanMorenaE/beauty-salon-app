import { useState } from "react";

import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

function Searchbar() {
    const [formState, setFormState] = useState({
        searchbar: "",
    });

    const handleSearchbarChange = function (e) {
        setFormState({
            ...formState,
            searchbar: e.target.value,
        });
    };

    const searchbar = document.getElementById("searchbar");

    const clearSearchbar = () => {
        searchbar.value = "";
        searchbar.focus();
    };

    const closeSearchbar = () => {
        searchbar.value = "";
        setFormState({
            ...formState,
            searchbar: "",
        });
    };

    return (
        <div className={(!formState.searchbar ? "h-auto sticky " : "h-full fixed") + "  top-0 max-w-screen-2xl w-full mx-auto bg-white rounded-b-2xl"}>
            <header className="p-4 gap-4 flex items-center">
                <div className="w-full relative">
                    <span
                        className={
                            (!formState.searchbar ? "block" : "hidden") +
                            " flex justify-center items-center w-10 h-full text-gray-700 text-2xl absolute cursor-pointer"
                        }
                    >
                        <IoIosSearch />
                    </span>

                    <button
                        onClick={closeSearchbar}
                        className={
                            (!formState.searchbar ? "hidden" : "block") +
                            " flex justify-center items-center w-10 h-full text-gray-700 text-xl absolute cursor-pointer"
                        }
                    >
                        <IoArrowBack />
                    </button>
                    <button
                        onClick={clearSearchbar}
                        className={
                            (!formState.searchbar ? "hidden" : "block") +
                            " right-0 flex justify-center items-center w-10 h-full text-gray-700 text-xl absolute cursor-pointer"
                        }
                    >
                        <IoClose />
                    </button>
                    <input
                        type="search"
                        onChange={handleSearchbarChange}
                        id="searchbar"
                        className={
                            "pl-10 peer text-sm border border-gray-100 bg-gray-50 outline-none p-4 rounded-lg w-full"
                        }
                        placeholder="Buscar Salones, Categorias, Servicios, ..."
                    />
                </div>
            </header>

            <div className={(!formState.searchbar ? "hidden" : "flex") + " w-full h-full flex-col gap-10 overflow-auto"}>
                <article className="flex flex-col gap-2">
                    <header className="text-xl font-semibold text-gray-800 py-2 px-4">
                        Categories <span className="text-base text-gray-400 font-bold">(7)</span>
                    </header>
                    <div className="flex gap-5 overflow-y-auto px-4">
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Category 1</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Category 2</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Category 3</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Category 4</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Category 5</p>
                        </div>
                    </div>
                </article>

                <article className="flex flex-col gap-2">
                    <header className="text-xl font-semibold text-gray-800 py-2 px-4">
                        Services <span className="text-base text-gray-400 font-bold">(7)</span>
                    </header>
                    <div className="flex gap-5 overflow-y-auto px-4">
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Service 1</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Service 2</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Service 3</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Service 4</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                            <span className="aspect-square rounded-full block w-[70px] bg-gray-100"></span>
                            <p className="text-xs text-gray-500">Service 5</p>
                        </div>
                    </div>
                </article>

                <article className="flex flex-col gap-2">
                    <header className="text-xl font-semibold text-gray-800 py-2 px-4">
                        Salons <span className="text-base text-gray-400 font-bold">(3)</span>
                    </header>
                    <section className="flex flex-col gap-5 px-4">
                        <article className="grid grid-cols-[40%,1fr] justify-center items-center cursor-pointer w-full rounded-lg overflow-hidden border">
                            <span className="aspect-[4/3] w-full bg-gray-100"></span>
                            <div className="p-4 w-full h-full flex flex-col gap-1">
                                <h4 className="text-base text-gray-500">Salon 1</h4>
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
                                <h4 className="text-base text-gray-500">Salon 2</h4>
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
                                <h4 className="text-base text-gray-500">Salon 3</h4>
                                <span className="flex gap-1 items-center text-xs text-gray-400">
                                    <FaLocationDot /> Villa Luzuriaga, Argentina.
                                </span>
                                <span className="flex gap-1 items-center text-sm font-medium text-gray-400">
                                    <FaStar className="text-yellow-400" /> 4.8
                                </span>
                            </div>
                        </article>
                    </section>
                </article>
            </div>
        </div>
    );
}

export default Searchbar;
