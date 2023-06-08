import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useGetRole = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: role, isLoading} = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/${user?.email}`);
            console.log(res.data);
            return res.data.role;
        }
    })
    return [role, isLoading]
};

export default useGetRole;