import Head from "next/head";
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
import Faqs from "../components/Sections/Faqs/Faqs";
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

  return (
    <>
      <Head>
        <title>Alleviate cleaning services</title>
        <meta
          name="description"
          content="We understand that life gets in the way, so let us handle the cleaning. We offer services from AirBnB turnover to regular house cleaning. We pride ourselves in our attention to detail and ability to transform any house into a home."
        />
      </Head>
      <div className={`${isMobile ? "is-mobile" : ""}`}>
        <Menu />
        <Cover isMobile={isMobile} />
        {isMobile ? <HomeAndApartmentMobile /> : <HomeAndApartmentDesktop />}
        {isMobile ? <PostConstructionMobile /> : <PostConstructionDesktop />}
        {isMobile ? <AirBnbMobile /> : <AirBnbDesktop />}
        {isMobile ? <MovingMobile /> : <MovingDesktop />}
        {isMobile ? <DaysAndTimeMobile /> : <DaysAndTimeDesktop />}
        <Booking isMobile={isMobile} />
        {isMobile ? <PaymentOptionsMobile /> : <PaymentOptionsDesktop />}
        {isMobile ? <ContactMobile /> : <ContactDesktop />}
        <Testimonials />
        <Faqs />
      </div>
    </>
  );
};

export default Home;
