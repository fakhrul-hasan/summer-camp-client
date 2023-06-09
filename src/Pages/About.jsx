import React from 'react';
import img from '../assets/about-img.png';

const About = () => {
    return (
        <div className='flex p-16 gap-8 w-full'>
            <div className='w-1/2 space-y-8'>
                <h5 className='text-gray-300 text-lg uppercase font-semibold'>about us</h5>
                <h3 className='text-[#25efcb] text-4xl font-bold'>High Quality & Professional Yoga Club</h3>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam necessitatibus fugiat alias iure cum ullam, facere sunt rem tempora ad magni voluptatum! Quos possimus sapiente necessitatibus delectus a numquam sequi, magnam accusantium esse quam?</p>
                <div className='flex gap-6'>
                    <div>
                        <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/img-12.png" alt="" className='h-14 w-28' />
                    </div>
                    <div className='space-y-8'>
                        <p className='text-gray-500'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla repellat ducimus tempora commodi cupiditate fugiat repellendus ut eveniet harum voluptates."</p>
                        <h6 className='font-bold text-gray-500'>Anthony Webster, CEO Spiritual Bliss</h6>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default About;