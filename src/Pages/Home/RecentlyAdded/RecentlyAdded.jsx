import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./style.css"
import { EffectCards } from 'swiper/modules';
import { Link } from "react-router-dom";
import useAllbooks from "../../../Hooks/useAllbooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
const RecentlyAdded = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
    });

    const [allBooks] = useAllbooks();

    const books = allBooks.filter(book => book.category !== 'Magazine' && book.category !== 'Newspaper');
    const magazines = allBooks.filter(book => book.category === "Magazine");
    const newsPaper = allBooks.filter(book => book.category === "Newspaper");

    return (

        <div className="bg-[#eff6ff4b] my-10" data-aos="fade-up-left">
            <SectionTitle title={"Recently Added Items"} />
            <div className="grid lg:grid-cols-3 grid-cols-1">
                <div>
                    <h2 className='text-xl font-semibold font-Poppins my-2 text-center'>Books</h2>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >

                        { books.length > 0 ?
                            books.map(book => <SwiperSlide key={book.id}>
                                <Link to={`/bookdetail/${book._id}`} className="" >
                                    <img src={book.bookCoverImage} alt="" />
                                    <h2 className="bg-white text-black py- text-center">{book.bookName}</h2>
                                </Link>
                            </SwiperSlide>)
                            :
                            <SwiperSlide className='border-2'>
                                <div className='flex flex-col my-10'>
                                    <FontAwesomeIcon className='text-5xl text-warning' icon={faTriangleExclamation} />
                                    <h3>No Newspaper Added</h3>
                                </div>
                            </SwiperSlide>
                        }
                    </Swiper>
                </div>
                <div>
                    <h2 className='text-xl font-semibold font-Poppins my-2 text-center'>Magazines</h2>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >

                        { magazines.length > 0 ?
                            magazines.map(book => <SwiperSlide key={book.id}>
                                <Link to={`/bookdetail/${book._id}`} className="" >
                                    <img src={book.bookCoverImage} alt="" />
                                    <h2 className="bg-white text-black py- text-center">{book.bookName}</h2>
                                </Link>
                            </SwiperSlide>)
                            :
                            <SwiperSlide className='border-2'>
                                <div className='flex flex-col my-10'>
                                    <FontAwesomeIcon className='text-5xl text-warning' icon={faTriangleExclamation} />
                                    <h3>No Newspaper Added</h3>
                                </div>
                            </SwiperSlide>
                            
                        }
                    </Swiper>
                </div>
                <div>
                    <h2 className='text-xl font-semibold font-Poppins my-2 text-center'>Newspapers</h2>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >

                        {
                        newsPaper.length > 0 ?
                            newsPaper.map(book => <SwiperSlide key={book.id}>
                                <Link to={`/bookdetail/${book._id}`} className="" >
                                    <img src={book.bookCoverImage} alt="" />
                                    <h2 className="bg-white text-black py- text-center">{book.bookName}</h2>
                                </Link>
                            </SwiperSlide>)
                            :
                            <SwiperSlide className='border-2'>
                                <div className='flex flex-col my-10'>
                                    <FontAwesomeIcon className='text-5xl text-warning' icon={faTriangleExclamation} />
                                    <h3>No Newspaper Added</h3>
                                </div>
                            </SwiperSlide>
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default RecentlyAdded;