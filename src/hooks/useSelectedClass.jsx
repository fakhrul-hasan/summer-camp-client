import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthContext } from '../Providers/AuthProvider';

const useSelectedClass = () => {
    const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading && Boolean(user?.email),
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/selectedClasses?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [classes, refetch]
};

export default useSelectedClass;