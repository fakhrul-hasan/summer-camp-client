import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
const InstructorCard = ({instructor}) => {
    const {photoURL, name, email} = instructor;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photoURL}
          alt="Shoes"
          className="rounded-xl h-56 w-56"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>email: {email}</p>
        <div className="card-actions mt-4">
          <FaFacebookF className="text-[#25efcb]"/>
          <FaTwitter className="text-[#25efcb]"/>
          <FaGooglePlusG className="text-[#25efcb]"/>
          <FaLinkedinIn className="text-[#25efcb]"/>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
