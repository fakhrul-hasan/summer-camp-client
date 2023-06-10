import { useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import InstructorCard from "../components/InstructorCard";

const Instructors = () => {
    const instructors = useLoaderData();
  return (
    <>
      <div className="footer p-16 bg-gradient-to-r from-[#1bb3eb] to-[#25efcb] text-white gap-0">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Meet Our Instructors</h2>
          <p className="w-1/2 space-y-2">
            Lorem ipsum dolor, amet consectetur adipisicing elit. Minus totam,
            minima error quibusdam voluptates rerum et, velit, asperiores ipsam
            numquam? Deleniti odio!
          </p>
        </div>
      </div>
      <section className="p-16 grid grid-cols-3 gap-4">
        {
            instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
        }
      </section>
    </>
  );
};

export default Instructors;
