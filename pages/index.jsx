import Head from "next/head";
import { useEffect, useState } from "react";

import AirBnb from "../components/Sections/AirBnb/AirBnb";
import DaysAndTime from "../components/Sections/DaysAndTime/DaysAndTime";
import Contact from "../components/Sections/Contact/Contact";
import Cover from "../components/Sections/Cover/Cover";
import HomeAndApartment from "../components/Sections/HomeAndApartment/HomeAndApartment";
import PostConstruction from "../components/Sections/PostConstruction/PostConstruction";
import Moving from "../components/Sections/Moving/Moving";
import Menu from "../components/Menu/Menu";
import PaymentOptions from "../components/Sections/PaymentOptions/PaymentOptions";
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
        <HomeAndApartment isMobile={isMobile} />
        <PostConstruction isMobile={isMobile} />
        <AirBnb isMobile={isMobile} />
        <Moving isMobile={isMobile} />
        <DaysAndTime isMobile={isMobile} />
        <Booking isMobile={isMobile} />
        <PaymentOptions isMobile={isMobile} />
        <Contact isMobile={isMobile} />
        <Testimonials />
        <Faqs />
      </div>
    </>
  );
};

export default Home;
