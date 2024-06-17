function Categories() {
    return (
        <div className="flex p-4 gap-4 overflow-y-auto">
            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-square rounded-3xl block w-24 bg-gray-100"></span>
                <p className="text-sm text-gray-500">Peluquería</p>
            </article>

            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-square rounded-3xl block w-24 bg-gray-100"></span>
                <p className="text-sm text-gray-500">Maquillaje</p>
            </article>

            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-square rounded-3xl block w-24 bg-gray-100"></span>
                <p className="text-sm text-gray-500">Manicura</p>
            </article>

            <article className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <span className="aspect-square rounded-3xl block w-24 bg-gray-100"></span>
                <p className="text-sm text-gray-500">Tatuajes</p>
            </article>
        </div>
    );
}

export default Categories;
