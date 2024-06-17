function Offers() {
    return (
        <div className="flex p-4 gap-4 overflow-y-auto">
            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-[5/3] rounded-3xl block w-[300px] bg-gray-100"></span>
            </article>
            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-[5/3] rounded-3xl block w-[300px] bg-gray-100"></span>
            </article>
        </div>
    );
}

export default Offers;
