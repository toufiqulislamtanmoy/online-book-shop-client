import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import dummyPic from "../../../assets/user/dummy-profile-pic-300x300-1.png"
const Team = () => {
    return (
        <div className="my-10 min-h-[60vh] bg-[#eff6ff4b] px-3 rounded-2xl">
            <SectionTitle title="Our Team" />

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-7xl lg:mx-auto mx-7 justify-items-center text-center my-10">
                <div className=""
                    data-aos="fade-up-left"
                >
                    <img className="rounded-lg h-40 w-40" src={dummyPic} alt="" />
                    <h3 className="mt-3 font-Russo">Member 1</h3>
                    <p className="text-xs">Founder</p>
                </div>
                <div className=""
                    data-aos="fade-up-left"
                    data-aos-delay="200"
                >
                    <img className="rounded-lg h-40 w-40" src={dummyPic} alt="" />
                    <h3 className="mt-3 font-Russo">Member 2</h3>
                    <p className="text-xs">Co-Founder</p>
                </div>
                <div className="" data-aos="fade-up-left"
                    data-aos-delay="400">
                    <img className="rounded-lg h-40 w-40" src={dummyPic} alt="" />
                    <h3 className="mt-3 font-Russo">Member 3</h3>
                    <p className="text-xs">Co-Founder</p>
                </div>
                <div className="" data-aos="fade-up-left"
                    data-aos-delay="600">
                    <img className="rounded-lg h-40 w-40" src={dummyPic} alt="" />
                    <h3 className="mt-3 font-Russo">Member 4</h3>
                    <p className="text-xs">Co-Founder</p>
                </div>

            </div>
        </div>
    );
};

export default Team;