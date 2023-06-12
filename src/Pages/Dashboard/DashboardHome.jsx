
import useGetRole from "../../hooks/useGetRole";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet";

const DashboardHome = () => {
  const [role] = useGetRole();
  return (
    <div>
      <Helmet>
        <title>Dashboard | Home</title>
      </Helmet>
      {role === "Admin" && (
        <>
          <SectionTitle heading="Admin Home"></SectionTitle>
        </>
      )}
      {role === "Instructor" && (
        <SectionTitle heading="Instructor Home"></SectionTitle>
      )}
      {role !== "Admin" && role !== "Instructor" && (
        <SectionTitle heading="Student Home"></SectionTitle>
      )}
    </div>
  );
};

export default DashboardHome;
