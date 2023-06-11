import { useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ClassCard from "../components/ClassCard/ClassCard";

const Classes = () => {
  const classes = useLoaderData();
  // const [selectedClasses] = useSelectedClass();
  // const isClassSelected=id=>{
  //   const existingClass = selectedClasses.find(c=> c.classId == id);
  //   return existingClass;
  // }

  return (
    <>
      <div className="footer p-16 bg-gradient-to-r from-[#1bb3eb] to-[#25efcb] text-white gap-0">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Yoga Classes</h2>
          <p className="w-1/2 space-y-2">
            Lorem ipsum dolor, amet consectetur adipisicing elit. Minus totam,
            minima error quibusdam voluptates rerum et, velit, asperiores ipsam
            numquam? Deleniti odio!
          </p>
        </div>
      </div>
      <section className="p-16">
        <SectionTitle
          subHeading="our classes"
          heading="Join A Class Today!"
        ></SectionTitle>
        <div className="mt-4 space-y-4">
          {classes.map((cls) => (
            <ClassCard key={cls._id} cls={cls}></ClassCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Classes;
