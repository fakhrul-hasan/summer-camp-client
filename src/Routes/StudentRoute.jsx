import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useGetRole from '../hooks/useGetRole';

const StudentRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [role, isLoading] = useGetRole();
    const location = useLocation();
    if(loading || isLoading){
        return <span className="loading loading-bars loading-md"></span>
    }
    if(user && role !== 'Instructor' && role !== 'Admin'){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default StudentRoute;