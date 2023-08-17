import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import shariar from "../../../assets/user/shariar.jpeg"
import sn from "../../../assets/user/sn.jpeg"
import dd from "../../../assets/user/dd.jpeg"
const Team = () => {
    return (
        <div className="my-10 bg-[#eff6ff4b] px-3 rounded-2xl">
            <SectionTitle title="Our Team" />

            <div className="lg:flex items-center justify-start gap-5" data-aos="fade-down-right">
                <div className="w-full lg:w-1/4 px-5 lg:px-0">
                    <h2 className="block lg:hidden text-3xl font-bold font-Libre my-5 border-b-2 py-3">Golam Shahrier</h2>
                    {/* <img className="" src={shariar} alt="" /> */}
                    <div className="avatar">
                        <div className="w-full rounded-full ">
                            <img src={shariar} />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4  px-5 lg:px-0">
                    <h2 className="py-3 hidden lg:block text-3xl font-bold font-Libre my-5 border-b-2">Golam Shahrier</h2>
                    <p className="my-5 px-3 font-Poppins text-justify">
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
                    <h2 className="block lg:hidden text-3xl font-bold font-Libre my-5 border-b-2 py-3">Diponkor Das</h2>
                    <div className="avatar">
                        <div className="w-full rounded-full">
                            <img src={dd} />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4  px-5 lg:px-0 my-10">
                    <h2 className="py-3 hidden lg:block text-3xl font-bold font-Libre my-5 border-b-2">Diponkor Das</h2>
                    <p className="my-5 font-Poppins text-justify  px-3">
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
                    <h2 className="block lg:hidden text-3xl font-bold font-Libre my-5 border-b-2 py-3">Sabikun Nahar</h2>
                    <div className="avatar">
                        <div className="w-full rounded-full">
                            <img src={sn} />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4  px-5 lg:px-0">
                    <h2 className="py-3 hidden lg:block text-3xl font-bold font-Libre my-5 border-b-2">Sabikun Nahar</h2>
                    <p className="my-5 font-Poppins text-justify  px-3">
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