import { useEffect, useState } from "react";
import PopularClassCard from "../components/PopularClassCard";
import SectionTitle from "../components/SectionTitle";

const ClassSection = () => {
  const [classes, setClasses] = useState();
  const [classLoading, setClassLoading] = useState(true);
  useEffect(()=>{
    fetch('http://localhost:5000/classes')
    .then(res=>res.json())
    .then(data=>{
      setClasses(data);
      setClassLoading(false);
    });
  },[])
  if(classLoading){
    return <span className="loading loading-bars loading-md"></span>
  }
  return (
    <div className="bg-[#fafbfc] p-16">
      {/* <h5 className="text-gray-300 text-lg uppercase font-semibold text-center">
        our classes
      </h5>
      <h3 className="text-[#44d89e] text-4xl font-bold text-center">
        Join A Class Today!
      </h3> */}
      <SectionTitle subHeading='our classes' heading='Join A Class Today!'></SectionTitle>
      <div>
        {
          // classes.map(cls=><PopularClassCard key={cls._id} cls={cls}></PopularClassCard>)
        }
      </div>
    </div>
  );
};

export default ClassSection;
