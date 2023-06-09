const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <h5 className="text-gray-300 text-lg uppercase font-semibold text-center">
        {subHeading}
      </h5>
      <h3 className="text-[#44d89e] text-4xl font-bold text-center">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
