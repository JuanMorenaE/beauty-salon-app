import { GoBell } from "react-icons/go";

function Notifications({ hasNotification }) {
    return (
        <button className="w-10 aspect-square flex justify-center items-center text-xl text-gray-800 bg-gray-100 rounded-lg cursor-pointer relative">
            <GoBell />
            {hasNotification && <span className="absolute top-0 right-0 outline outline-[4px] outline-white block w-[8px] h-[8px] rounded-full bg-blue-400"></span>}
        </button>
    );
}

export default Notifications;
