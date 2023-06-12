import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import yoga1 from "../../src/assets/yoga01.png";
import yoga2 from "../../src/assets/yoga02.png";

import { Autoplay, Pagination, Navigation } from "swiper";
import About from "./About";
import ClassSection from "./ClassSection";
import AboutUsSection from "./AboutUsSection";
import FeaturesSection from "./FeaturesSection";
import InstructorsSection from "./InstructorsSection";
import { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
      <div>
        <Helmet>
        <title>Spiritual Bliss | Home</title>
      </Helmet>
      <div data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out">
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="lg:flex justify-center items-center gap-8 w-full p-16 bg-gradient-to-r from-[#25efcb] to-[#1bb3eb] text-white text-center lg:text-left">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-7xl font-semibold">
                Divi Yoga Studio{" "}
                <span className="font-bold">Balance, Mind & Body</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                adipisci doloremque provident natus numquam, modi magni ab unde,
                illum cum dignissimos! Molestiae consequuntur necessitatibus ab.
              </p>
              <Link to='/classes'><button className="uppercase bg-white text-[#25efcb] px-8 py-4 text-lg font-semibold rounded-3xl mt-8">
                get started
              </button></Link>
            </div>
            <div className="lg:w-1/2">
              <img src={yoga1} alt="" className="h-72 lg:h-screen mt-4 lg:mt-0" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="lg:flex justify-center items-center gap-8 w-full p-16 bg-gradient-to-r from-[#25efcb] to-[#1bb3eb] text-white text-center lg:text-left">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-7xl font-semibold">
                Divi Yoga Studio{" "}
                <span className="font-bold">Balance, Mind & Body</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                adipisci doloremque provident natus numquam, modi magni ab unde,
                illum cum dignissimos! Molestiae consequuntur necessitatibus ab.
              </p>
              <Link to='/classes'><button className="uppercase bg-white text-[#25efcb] px-8 py-4 text-lg font-semibold rounded-3xl mt-8">
                get started
              </button></Link>
            </div>
            <div className="lg:w-1/2">
              <img src={yoga2} alt="" className="h-72 lg:h-screen mt-4 lg:mt-0" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
        {/* about section */}
        <About></About>
        {/* class section */}
        <ClassSection></ClassSection>
        <AboutUsSection></AboutUsSection>
        <FeaturesSection></FeaturesSection>
        <InstructorsSection></InstructorsSection>
      </div>
  );
};

export default Home;
