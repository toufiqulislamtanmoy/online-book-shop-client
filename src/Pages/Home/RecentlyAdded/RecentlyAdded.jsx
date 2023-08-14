import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./style.css"
import { EffectCards } from 'swiper/modules';
import { Link } from "react-router-dom";
const RecentlyAdded = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("dummyData.json").then(res => res.json()).then(data => {
            setBooks(data)
        })
    }, [])
    return (
        
        <div className="border-b-4 border-t-4 my-10">
            <SectionTitle title={"Recently Added Books"} />
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >

                {
                    books.map(book => <SwiperSlide key={book.id}>
                        <Link to={`/bookdetail/${book.id}`} className="">
                            <img src={book.coverImage} alt="" />
                            <h2 className="bg-white text-black py- text-center">{book.title}</h2>
                        </Link>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default RecentlyAdded;