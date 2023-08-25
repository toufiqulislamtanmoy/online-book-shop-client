import { Link } from "react-router-dom";
import Card from "../../Components/Cards/Card";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import useAllbooks from "../../Hooks/useAllbooks";
import headerVideo from '../../assets/videos/comics.mp4'

const Comics = () => {
    const [books] = useAllbooks();
    const comics = books.filter(book => book.category === "Comics");
    return (
        <div>
            <PageHeader video={headerVideo} />
            <div className="h-full w-full rounded-md my-10 py-10 px-3 lg:px-16">
                <SectionTitle title={"All Comics is here"} />
                <div className="lg:flex justify-around items-center  bg-[#7c96a15f] py-5">
                    <div className="py-10 grid grid-cols-1 md:grid-cols-4 text-center space-x-2">
                        <Link to="/comics" className="font-bold text-[#a963ffa2] md:border-r-2 md:border-black px-3 hover:text-gray-700 hover:transition-colors hover:duration-500">Comics</Link>
                        <Link to="/mysteryThriller" className="font-bold text-[#a963ffa2] md:border-r-2 md:border-black px-3 hover:text-gray-700 hover:transition-colors hover:duration-500">Novels</Link >
                        <Link to="/comics" className="font-bold text-[#a963ffa2] md:border-r-2 md:border-black px-3 hover:text-gray-700 hover:transition-colors hover:duration-500">Education</Link>
                        <Link to="/mysteryThriller" className="font-bold text-[#a963ffa2] md:border-r-2 md:border-black px-3 hover:text-gray-700 hover:transition-colors hover:duration-500">Mystery & Thrillers</Link >
                    </div>

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
                        comics.map(comic => <Card key={comic._id} book={comic} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Comics;