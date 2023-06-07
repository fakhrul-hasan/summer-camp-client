import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import yoga1 from '../../src/assets/yoga01.png';
import yoga2 from '../../src/assets/yoga02.png';

import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
    return (
        <div>
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
        <SwiperSlide className="flex justify-center items-center gap-8 w-full p-16 bg-gradient-to-r from-[#25efcb] to-[#1bb3eb] text-white">
            <div className="w-1/2">
                <h2 className="text-7xl font-semibold">Divi Yoga Studio <span className="font-bold">Balance, Mind & Body</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia adipisci doloremque provident natus numquam, modi magni ab unde, illum cum dignissimos! Molestiae consequuntur necessitatibus ab.</p>
                <button className="uppercase bg-white text-[#25efcb] px-8 py-4 text-lg font-semibold rounded-3xl">get started</button>
            </div>
            <div className="w-1/2">
                <img src={yoga1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center gap-8 w-full p-16 bg-gradient-to-r from-[#25efcb] to-[#1bb3eb] text-white">
            <div className="w-1/2">
                <h2 className="text-7xl font-semibold">Divi Yoga Studio <span className="font-bold">Balance, Mind & Body</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia adipisci doloremque provident natus numquam, modi magni ab unde, illum cum dignissimos! Molestiae consequuntur necessitatibus ab.</p>
                <button className="uppercase bg-white text-[#25efcb] px-8 py-4 text-lg font-semibold rounded-3xl">get started</button>
            </div>
            <div className="w-1/2">
                <img src={yoga2} alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Home;