import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import img1 from "../../../assets/user/user.png"
const Team = () => {
    return (
        <div className="my-10 bg-[#eff6ff4b] px-3 rounded-2xl">
            <SectionTitle title="Our Team" />

            <div className="lg:flex items-center justify-start gap-5" data-aos="fade-down-right">
                <div className="w-full lg:w-1/4 px-5 lg:px-0">
                    <h2 className="block lg:hidden text-3xl font-bold font-Pacifico my-5 border-b-2 py-3">Golam SHariar</h2>
                    <img className="rounded-lg" src={img1} alt="" />
                </div>
                <div className="w-full lg:w-3/4  px-5 lg:px-0">
                    <h2 className="py-3 hidden lg:block text-3xl font-bold font-Pacifico my-5 border-b-2">Golam SHariar</h2>
                    <p className="my-5 font-Poppins text-justify">
                        Borrow-a-Book is an integral part of our comprehensive service offerings, designed to facilitate seamless access to a world of knowledge. With this service, patrons gain the opportunity to explore a diverse array of literary treasures, ranging from classic literature to modern research publications.
                    </p>
                    <Link
                        to='/'
                        className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100'

                    >
                        Show More
                    </Link>
                </div>
            </div>
            {/*  */}
            <div className="lg:flex flex-row-reverse items-center justify-start gap-5" data-aos="fade-down-left">
                <div className="w-full lg:w-1/4 px-5 lg:px-0">
                    <h2 className="block lg:hidden text-3xl font-bold font-Pacifico my-5 border-b-2 py-3">Deponkor Das</h2>
                    <img className="rounded-lg" src={img1} alt="" />
                </div>
                <div className="w-full lg:w-3/4  px-5 lg:px-0 my-10">
                    <h2 className="py-3 hidden lg:block text-3xl font-bold font-Pacifico my-5 border-b-2">Deponkor Das</h2>
                    <p className="my-5 font-Poppins text-justify">
                        Download-a-Book stands as a cornerstone of our exceptional service lineup, tailored to provide effortless access to a world of literary marvels. This offering grants users the privilege to delve into a vast expanse of reading materials, spanning timeless classics to cutting-edge research documents.
                    </p>

                    <Link
                        to='/'
                        className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100'

                    >
                        Show More
                    </Link>
                </div>
            </div>
            {/*  */}
            <div className="lg:flex items-center justify-start gap-5" data-aos="fade-down-right">
                <div className="w-full lg:w-1/4 px-5 lg:px-0">
                    <h2 className="block lg:hidden text-3xl font-bold font-Pacifico my-5 border-b-2 py-3">Golam SHariar</h2>
                    <img className="rounded-lg" src={img1} alt="" />
                </div>
                <div className="w-full lg:w-3/4  px-5 lg:px-0">
                    <h2 className="py-3 hidden lg:block text-3xl font-bold font-Pacifico my-5 border-b-2">Golam SHariar</h2>
                    <p className="my-5 font-Poppins text-justify">
                        Borrow-a-Book is an integral part of our comprehensive service offerings, designed to facilitate seamless access to a world of knowledge. With this service, patrons gain the opportunity to explore a diverse array of literary treasures, ranging from classic literature to modern research publications.
                    </p>

                    <Link
                        to='/'
                        className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100'

                    >
                        Show More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Team;