import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import banner from "../../../assets/Banner/animations/banner.json"

const Banner = () => {
    return (
        <div className='bg-[#F9F9FF] px-3 lg:px-16 z-[-10]'>
            <div className='lg:flex flex-row-reverse items-center justify-center'>
                <div className='w-full lg:w-1/2'>
                    <Lottie animationData={banner} loop={true} />
                </div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-5xl font-bold tracking-wider font-Kaushan'>Dive into Diverse <span className="text-orange-300">Stories</span> </h2>
                    <p className='my-5 font-mono text-justify'>Our Mission is to Cultivate a Space Where Literature Enthusiasts Unite to Explore a Multitude of Diverse Stories. From Timeless Classics to Modern Marvels, We Aim to Ignite Curiosity, Inspire Learning, and Connect People Through the Power of Words.</p>


                    <div className='text-center lg:text-left py-5 lg:py-0'>

                        <Link
                            to='/'
                            className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100'

                        >
                            Get Started
                        </Link>

                    </div>


                </div>

            </div>


        </div>
    );
};

export default Banner;