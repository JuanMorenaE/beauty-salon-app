import { HiMiniHome } from "react-icons/hi2";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SELECTED_TYPES = { 'HOME': 'HOME', 'CALENDAR': 'CALENDAR', 'PROFILE': 'PROFILE' }

function Navbar({ selected }) {
    return (
        <nav className="flex justify-around items-center p-4 w-full rounded-t-3xl">
            <Link to="/">
                {selected == SELECTED_TYPES.HOME
                    ? <HiMiniHome className="text-slate-700 text-2xl" />
                    : <HiMiniHome className="text-gray-500 text-2xl" />
                }
            </Link>
            <Link to="">
                {selected == SELECTED_TYPES.CALENDAR
                    ? <BsCalendar2CheckFill className="text-slate-700 text-xl" />
                    : <BsCalendar2CheckFill className="text-gray-500 text-xl" />
                }
            </Link>
            <Link to="">
                {selected == SELECTED_TYPES.PROFILE
                    ? <FaUserAlt className="text-slate-700 text-xl" />
                    : <FaUserAlt className="text-gray-500 text-xl" />
                }

            </Link>
        </nav>
    );
}

export default Navbar;
