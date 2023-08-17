import img1 from "../../../assets/Banner/1.png"
import img2 from "../../../assets/Banner/2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../../../Components/Shared/SectionTitle/SectionTitle';
const Services = () => {
    AOS.init({
        offset: 200,
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 100,
    });
    return (
        <div className="my-10 bg-[#eff6ff4b] px-3 rounded-2xl">
            <SectionTitle title="Services" />

            <div className="lg:flex items-center justify-start gap-5" data-aos="fade-down-right">
                <div className="w-full lg:w-1/3 px-5 lg:px-0">
                    <h2 className="block lg:hidden text-3xl font-bold font-Libre my-5 border-b-2 py-3">Borrow Book</h2>
                    <img className="rounded-lg" src={img1} alt="" />
                </div>
                <div className="w-full lg:w-2/3  px-5 lg:px-0">
                    <h2 className="py-3 hidden lg:block text-3xl font-bold font-Libre my-5 border-b-2">Borrow Book</h2>
                    <p className="my-1 font-Poppins text-justify">
                        Borrow-a-Book is an integral part of our comprehensive service offerings, designed to facilitate seamless access to a world of knowledge. With this service, patrons gain the opportunity to explore a diverse array of literary treasures, ranging from classic literature to modern research publications.
                    </p>
                    <p className="my-1 font-Poppins text-justify">
                        Our user-friendly interface allows members to browse through our extensive catalog, select their desired books, and conveniently borrow them for a specified duration. Whether you are a passionate reader, a dedicated student, or a curious mind, Borrow-a-Book empowers you to embark on intellectual journeys, fostering a culture of continuous learning and enrichment.
                    </p>
                    <p className="my-1 font-Poppins text-justify">
                        Join us in embracing the joy of reading and the pursuit of knowledge through this remarkable service.
                    </p>
                </div>
            </div>
            {/*  */}
            <div className="lg:flex flex-row-reverse items-center justify-start gap-5" data-aos="fade-down-left">
                <div className="w-full lg:w-1/3 px-5 lg:px-0">
                    <h2 className="block lg:hidden text-3xl font-bold font-Libre my-5 border-b-2 py-3">Download Books</h2>
                    <img className="rounded-lg" src={img2} alt="" />
                </div>
                <div className="w-full lg:w-2/3  px-5 lg:px-0 my-10">
                    <h2 className="py-3 hidden lg:block text-3xl font-bold font-Libre my-5 border-b-2">Download Books</h2>
                    <p className="my-1 font-Poppins text-justify">
                        Download-a-Book stands as a cornerstone of our exceptional service lineup, tailored to provide effortless access to a world of literary marvels. This offering grants users the privilege to delve into a vast expanse of reading materials, spanning timeless classics to cutting-edge research documents.
                    </p>
                    <p className="my-1 font-Poppins text-justify">
                        Through a user-intuitive interface, members can seamlessly navigate our extensive repository, handpick their desired titles, and promptly download them for personal consumption. Whether you are an avid reader, a dedicated scholar, or an inquisitive mind, Download-a-Book empowers you to embark on intellectual escapades, nurturing a culture of perpetual learning and enrichment.
                    </p>
                    <p className="my-1 font-Poppins text-justify">
                        Join us in embracing the boundless pleasure of reading and the ceaseless pursuit of wisdom through this exceptional service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;