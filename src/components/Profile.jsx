function Profile() {
    return (
        <article className="flex justify-center items-center gap-4">
            <aside className="aspect-square w-10 bg-gray-400 rounded-full"></aside>
            <div className="flex flex-col grow basis-0">
                <h2 className="font-semibold text-xl text-gray-500">Juan Morena</h2>
                <h3 className="text-sm font-semibold text-gray-400">Owner</h3>
            </div>
        </article>
    );
}

export default Profile;
