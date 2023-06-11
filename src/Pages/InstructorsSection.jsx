
import { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import InstructorCard from '../components/InstructorCard';

const InstructorsSection = () => {
    const [instructors, setInstructors] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data.slice(0,6));
            setLoading(false);
        })
    },[])
    if (loading) {
        return <span className="loading loading-bars loading-md"></span>;
      }
    return (
        <section className='p-4 lg:p-16'>
            <SectionTitle subHeading='expert instructors' heading='Meet Our Team'></SectionTitle>
            <div className='grid lg:grid-cols-3 gap-8 mt-8'>
                {
                    instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                }
            </div>
        </section>
    );
};

export default InstructorsSection;