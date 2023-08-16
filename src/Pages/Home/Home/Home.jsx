import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Team from "../OurTeam/Team";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner/>
            <RecentlyAdded/>
            <Services/>
            <Team/>
            <Contact/>
        </div>
    );
};

export default Home;