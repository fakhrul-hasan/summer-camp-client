import React from 'react';
import errorImage from '../assets/errorImage.jpg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <Link to='/' className='fixed'><button className="uppercase bg-[#25efcb] text-white px-8 py-4 text-lg font-semibold rounded-3xl">back to home</button></Link>
            <img src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;