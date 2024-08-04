import { GiComb } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { FaHandSparkles } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";

function Categories() {
    return (
        <div className="flex p-4 gap-4 overflow-y-auto max-w-screen-2xl mx-auto">
            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-square rounded-3xl flex justify-center items-center text-5xl w-20 text-blue-400 bg-gray-100">
                    <GiComb />
                </span>
                <p className="text-xs font-semi text-gray-500">Peluquería</p>
            </article>

            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-square rounded-3xl flex justify-center items-center text-4xl w-20 text-blue-400 bg-gray-100">
                    <GiLipstick />
                </span>
                <p className="text-xs text-gray-500">Maquillaje</p>
            </article>

            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-square rounded-3xl flex justify-center items-center text-4xl w-20 text-blue-400 bg-gray-100">
                    <FaHandSparkles />
                </span>
                <p className="text-xs text-gray-500">Manicura</p>
            </article>

            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-square rounded-3xl flex justify-center items-center text-4xl w-20 text-blue-400 bg-gray-100">
                    <FaPenFancy />
                </span>
                <p className="text-xs text-gray-500">Tatuajes</p>
            </article>
        </div>
    );
}

export default Categories;
