import {HiMiniHome} from "react-icons/hi2";
import {BsCalendar2CheckFill} from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";

function Navbar() {
    return (
        <nav className="flex justify-around items-center p-4 w-full rounded-t-3xl">
            <a href="">
                <HiMiniHome className="text-gray-500 text-2xl" />
            </a>
            <a href="">
                <BsCalendar2CheckFill className="text-gray-500 text-xl" />
            </a>
            <a href="">
                <FaUserAlt className="text-gray-500 text-xl" />
            </a>
        </nav>
    );
}

export default Navbar;
