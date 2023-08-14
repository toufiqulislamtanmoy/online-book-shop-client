import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded";

const Home = () => {
    return (
        <div>
            <Banner/>
            <RecentlyAdded/>
            <Contact/>
        </div>
    );
};

export default Home;