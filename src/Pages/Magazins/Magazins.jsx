import { Link } from "react-router-dom";
import Card from "../../Components/Cards/Card";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import useAllbooks from "../../Hooks/useAllbooks";
import headerVideo from "../../assets/videos/magazine.mp4"

const Magazins = () => {
    const [allBooks] = useAllbooks();
    const magazins = allBooks.filter(book => book.category === 'Magazine');
    return (
        <div>
            <PageHeader video={headerVideo} />
            <div className="h-full w-full rounded-md my-10 py-10 px-3 lg:px-16">
                <SectionTitle title={"Magazines Collections is here"} />
                <div className="lg:flex justify-around items-center  bg-[#7c96a15f] py-5">
                    

                    <div className="w-full md:w-1/3 px-3">
                        <form className="flex">
                            <input type="text" placeholder="Search..." className="w-full border-1 outline-none p-3 rounded-md shadow-lg" />

                            <button
                                type="button"
                                className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100 shadow-lg'

                            >
                                Search
                            </button>
                        </form>
                    </div>


                </div>
                <div className="p-5 bg-[#4ac4f826] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
                    {
                        magazins.map(magazin => <Card key={magazin._id} book={magazin} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Magazins;