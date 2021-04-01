import AirBnb from "../components/AirBnB/AirBnB";
import DaysAndTime from "../components/DaysAndTime/DaysAndTime";
import Contact from "../components/Contact/Contact";
import Cover from "../components/Cover/Cover";
import HomeAndApartment from "../components/HomeAndApartment/HomeAndApartment";
import PostConstruction from "../components/PostConstruction/PostConstruction";
import Moving from "../components/Moving/Moving";
import Menu from "../components/Menu/Menu";
import PaymentOptions from "../components/PaymentOptions/PaymentOptions";
import Faqs from "../components/FAQs/Faqs";
import Testimonials from "../components/Testimonials/Testimonials";
import Booking from "../components/Booking/Booking";

const Home = () => (
  <>
    <Menu />
    <Cover />
    <HomeAndApartment />
    <PostConstruction />
    <AirBnb />
    <Moving />
    <DaysAndTime />
    <Booking />
    <PaymentOptions />
    <Contact />
    <Testimonials />
    <Faqs />
  </>
);

export default Home;
