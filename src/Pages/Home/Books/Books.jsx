import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import Card from "../../../Components/Cards/Card";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("dummyData.json").then(res => res.json()).then(data => {
            setBooks(data)
        })
    }, [])
    return (
        <div className="h-full w-full bg-[#e0cff42e] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 rounded-md my-10 py-10 px-3 lg:px-16">
            <SectionTitle title={"Our Store"} />
            <div className="border-2 my-10 border-gray-300 shadow-lg"></div>
            <div className="w-full lg:w-1/3 mx-auto my-10 ">
                <form className="flex">
                    <input type="text" placeholder="Search..." className="w-full border-none outline-none p-3 rounded-md shadow-lg" />

                    <button
                        type="button"
                        className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100 shadow-lg'

                    >
                        Search
                    </button>
                </form>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
                {
                    books.map(book => <Card key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;