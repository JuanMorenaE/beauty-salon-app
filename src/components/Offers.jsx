function Offers() {
    return (
        <>
            <h2 className="px-4 pt-4 font-semibold text-gray-700">Ofertas Especiales</h2>
            <div className="flex p-4 gap-4 overflow-y-auto max-w-screen-2xl mx-auto">
                <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                    <span className="aspect-[6/3] rounded-3xl block w-[330px] bg-gray-100"></span>
                </article>
                <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                    <span className="aspect-[6/3] rounded-3xl block w-[330px] bg-gray-100"></span>
                </article>
            </div>
        </>

    );
}

export default Offers;
