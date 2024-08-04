import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Searchbar from "../../components/Searchbar";

import Categories from "../../components/Categories";
import Offers from "../../components/Offers";
import Salons from "../../components/Salons";

function Home() {
    return (
        <main className="flex flex-col h-[100dvh]">
            <div className="grow basis-0 overflow-auto">
                <Header />
                <Searchbar />

                <Categories />
                <Offers />
                <Salons />
            </div>
            <Navbar selected="HOME" />
        </main>
    );
}

export default Home;
