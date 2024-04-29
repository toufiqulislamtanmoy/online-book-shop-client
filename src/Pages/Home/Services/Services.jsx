import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../../../Components/Shared/SectionTitle/SectionTitle';
const services = [
    {
        id: 1,
        title: "Extensive Book Collection",
        description: "Access a vast collection of physical books covering various genres and subjects."
    },
    {
        id: 2,
        title: "User-Friendly Book Browsing",
        description: "Easily browse and search for books of interest through our intuitive platform."
    },
    {
        id: 3,
        title: "Detailed Book Information",
        description: "Explore comprehensive details and descriptions for each book on our platform."
    },
    {
        id: 4,
        title: "Real-Time Availability Checking",
        description: "Check the availability of books instantly before placing a borrow request."
    },
    {
        id: 5,
        title: "Secure Borrowing Process",
        description: "Seamlessly request to borrow books through our secure system."
    },
    {
        id: 6,
        title: "Efficient Admin Review",
        description: "Benefit from quick and reliable review of borrow requests by our platform administrators."
    },
    {
        id: 7,
        title: "Personalized User Dashboard",
        description: "Manage your borrowed books and due dates conveniently from your personalized dashboard."
    },
    {
        id: 8,
        title: "Flexible Borrowing Options",
        description: "Request extensions or return borrowed books easily based on your schedule."
    },
    {
        id: 9,
        title: "Responsive Customer Support",
        description: "Receive assistance and support from our dedicated team for any queries or issues."
    },
    {
        id: 10,
        title: "Transparent Communication",
        description: "Stay informed throughout the borrowing process with timely notifications and updates."
    },
    {
        id: 11,
        title: "Community Engagement",
        description: "Connect with fellow book enthusiasts and share recommendations within our community."
    }
];



const Services = () => {
    AOS.init({
        offset: 200,
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 100,
    });
    return (
        <div className="my-10 bg-[#feffef4b] px-3 rounded-2xl">
            <SectionTitle title="Services" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {
                    services?.map((service, ind) =>
                        <div
                            data-aos="fade-down-left"
                            data-aos-delay={200 * ind}
                            key={service.id} className="bg-gray-300/25 p-5 mx-10 border-[1px] border-yellow-500/25 rounded-lg shadow-[1px_-1px_1px_2px_#d064eea5] space-y-2">
                            <h1 className='font-Libre'>{service.title}</h1>
                            <p className='text-xs'>{service.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;