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
      setClasses(data.slice(0, 6));
      setClassLoading(false);
    });
  },[])
  if(classLoading){
    return <span className="loading loading-bars loading-md"></span>
  }
  return (
    <section className="bg-[#fafbfc] p-16">
      <SectionTitle subHeading='our classes' heading='Join A Class Today!'></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-4 mt-8">
        {
          classes.map(cls=><PopularClassCard key={cls._id} cls={cls}></PopularClassCard>)
        }
      </div>
    </section>
  );
};

export default ClassSection;
