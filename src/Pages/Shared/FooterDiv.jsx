import { Link } from 'react-router-dom';

const FooterDiv = () => {
    return (
        <div className="footer p-16 bg-gradient-to-r from-[#25efcb] to-[#1bb3eb] text-white gap-0">
        <div className="grid-cols-1">
          <h2 className="text-3xl font-bold">Ready to Make a Change?</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus totam, ab minima error quibusdam voluptates rerum et, velit, asperiores ipsam numquam? Deleniti odio corporis culpa!</p>
        </div>
        <div className="grid-cols-1">
        <Link to='/classes'><button className="uppercase border-2 border-white px-8 py-4 text-lg font-semibold rounded-3xl">become a member</button></Link>
        <Link to='/classes'><button className="uppercase bg-white text-[#25efcb] px-8 py-4 text-lg font-semibold rounded-3xl">take a class</button></Link>
        </div>
      </div>
    );
};

export default FooterDiv;