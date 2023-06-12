
import img1 from "../assets/class-01.png";
import img2 from "../assets/special-04.png";
import img3 from "../assets/class-5.png";
import img4 from "../assets/special-03.png";
import img5 from "../assets/special-06.png";
import img6 from "../assets/special-02.png";
import img7 from "../assets/yoga-07.png";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";
import Aos from "aos";

const FeaturesSection = () => {
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <div className="p-16">
      <SectionTitle
        subHeading="features"
        heading="The Best of Yoga"
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-20 mt-8">
        <div>
          <div data-aos="fade-right" data-aos-duration="1000" className="text-center flex flex-col h-48 items-center">
            <img src={img1} alt="" className="h-20 w-20"/>
            <h4 className="text-2xl font-bold text-gray-500">Re-Engergize</h4>
            <p>
              That this would somehow form a family the way we all became the
              Brady Bunch
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="text-center flex flex-col h-48 items-center">
            <img src={img2} alt="" className="h-20 w-20"/>
            <h4 className="text-2xl font-bold text-gray-500">Strength Building</h4>
            <p>
              That this would somehow form a family the way we all became the
              Brady Bunch
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="text-center flex flex-col h-48 items-center">
            <img src={img3} alt="" className="h-20 w-20"/>
            <h4 className="text-2xl font-bold text-gray-500">Stress Relief</h4>
            <p>
              That this would somehow form a family the way we all became the
              Brady Bunch
            </p>
          </div>
        </div>
        <div>
          {" "}
          <img data-aos="fade-up" data-aos-duration="1000" src={img7} alt="" className="h-screen mx-auto"/>
        </div>
        <div>
        <div data-aos="fade-left" data-aos-duration="1000" className="text-center flex flex-col h-48 items-center">
            <img src={img4} alt="" className="h-20 w-20"/>
            <h4 className="text-2xl font-bold text-gray-500">Relax & Refresh</h4>
            <p>
              That this would somehow form a family the way we all became the
              Brady Bunch
            </p>
          </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="text-center flex flex-col h-48 items-center">
            <img src={img5} alt="" className="h-20 w-20"/>
            <h4 className="text-2xl font-bold text-gray-500">Beauty of Body</h4>
            <p>
              That this would somehow form a family the way we all became the
              Brady Bunch
            </p>
          </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="text-center flex flex-col h-48 items-center">
            <img src={img6} alt="" className="h-20 w-20"/>
            <h4 className="text-2xl font-bold text-gray-500">Mind & Soul</h4>
            <p>
              That this would somehow form a family the way we all became the
              Brady Bunch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
