import { Link } from "react-router-dom";
import classFooterImg from "../assets/classFooterImg.png";

const AboutUsSection = () => {
  return (
    <div className="p-16 bg-gradient-to-r from-[#f7ce68] to-[#fbab7e] text-white gap-8 lg:h-screen flex flex-col-reverse lg:flex-row justify-center items-center">
      <div className="lg:w-1/2 space-y-8">
        <h3 className="text-xl uppercase text-[#c69c59]">Why choose us</h3>
        <h2 className="text-4xl font-bold">
          Customized Instruction For Every Student
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          accusamus deleniti modi fugit, vero officiis voluptatibus aut harum
          odit consequatur culpa laborum deserunt hic, atque delectus tempora
          officia dolore natus a sequi tenetur quo eligendi! Dicta quisquam
          voluptates assumenda quod excepturi facere. Iste, veniam rem?
        </p>
        <Link to='/classes'><button className="uppercase bg-white text-[#25efcb] px-8 py-4 text-lg font-semibold rounded-3xl mt-8">
          join us now
        </button></Link>
      </div>
      <div className="lg:w-1/2 object-contain h-full">
        <img src={classFooterImg} alt="" className="h-full" />
      </div>
    </div>
  );
};

export default AboutUsSection;
