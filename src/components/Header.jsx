function Header() {
    return (
        <header className="w-full p-4 flex flex-col gap-4 justify-center max-w-screen-2xl mx-auto">
            <div className="flex items-center w-full">
                <button className="w-10 aspect-square block bg-slate-200 rounded-lg cursor-pointer"></button>
                <aside className="flex gap-2 grow basis-0 justify-end">
                    <button className="w-10 aspect-square block bg-gray-100 rounded-lg cursor-pointer"></button>
                    <button className="w-10 aspect-square block bg-gray-100 rounded-lg cursor-pointer"></button>
                </aside>
            </div>
            <div>
                <h1 className="font-semibold text-xl">Hello, Juan Morena!</h1>
            </div>
        </header>
    );
}

export default Header;
