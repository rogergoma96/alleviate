import { useEffect, useState } from "react";

import AirBnbDesktop from "../components/Sections/AirBnb/AirBnbDesktop";
import AirBnbMobile from "../components/Sections/AirBnb/AirBnbMobile";
import DaysAndTimeDesktop from "../components/Sections/DaysAndTime/DaysAndTimeDesktop";
import DaysAndTimeMobile from "../components/Sections/DaysAndTime/DaysAndTimeMobile";
import ContactDesktop from "../components/Sections/Contact/ContactDesktop";
import ContactMobile from "../components/Sections/Contact/ContactMobile";
import Cover from "../components/Sections/Cover/Cover";
import HomeAndApartmentDesktop from "../components/Sections/HomeAndApartment/HomeAndApartmentDesktop";
import HomeAndApartmentMobile from "../components/Sections/HomeAndApartment/HomeAndApartmentMobile";
import PostConstructionDesktop from "../components/Sections/PostConstruction/PostConstructionDesktop";
import PostConstructionMobile from "../components/Sections/PostConstruction/PostConstructionMobile";
import MovingDesktop from "../components/Sections/Moving/MovingDesktop";
import MovingMobile from "../components/Sections/Moving/MovingMobile";
import Menu from "../components/Menu/Menu";
import PaymentOptionsDesktop from "../components/Sections/PaymentOptions/PaymentOptionsDesktop";
import PaymentOptionsMobile from "../components/Sections/PaymentOptions/PaymentOptionsMobile";
import Faqs from "../components/Sections/FAQs/Faqs";
import Testimonials from "../components/Sections/Testimonials/Testimonials";
import Booking from "../components/Sections/Booking/Booking";

const Home = () => {
  const [isMobile, setIsMobile] = useState(null);

  const checkDevice = () => {
    if (window.innerWidth > 700) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    checkDevice();

    window.addEventListener("resize", () => {
      checkDevice();
    });
  }, []);

  if (isMobile === null) {
    return null;
  }

  if (isMobile) {
    return (
      <div className="is-mobile">
        <Menu />
        <Cover isMobile={isMobile} />
        <HomeAndApartmentMobile />
        <PostConstructionMobile />
        <AirBnbMobile />
        <MovingMobile />
        <DaysAndTimeMobile />
        <Booking />
        <PaymentOptionsMobile />
        <ContactMobile />
        <Testimonials />
        <Faqs />
      </div>
    );
  }

  return (
    <>
      <Menu />
      <Cover />
      <HomeAndApartmentDesktop />
      <PostConstructionDesktop />
      <AirBnbDesktop />
      <MovingDesktop />
      <DaysAndTimeDesktop />
      <Booking />
      <PaymentOptionsDesktop />
      <ContactDesktop />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default Home;
