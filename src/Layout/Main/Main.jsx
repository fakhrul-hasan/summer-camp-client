
import NavBar from '../../Pages/Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer';
const Main = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;