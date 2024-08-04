import { GoBell } from "react-icons/go";
import Notifications from "./Notifications";

function Header() {
    return (
        <header className="w-full p-4 flex flex-col gap-4 justify-center max-w-screen-2xl mx-auto">
            <div className="flex items-center w-full pt-2">
                <div>
                    <h2 className="text-gray-500 font-semibold text-sm leading-3">Hola Juan,</h2>
                    <h3 className="text-gray-700 font-semibold text-lg">Buenos días!</h3>
                </div>
                <aside className="flex gap-2 grow basis-0 justify-end">
                    <Notifications hasNotification={true} />
                </aside>
            </div>
        </header>
    );
}

export default Header;
