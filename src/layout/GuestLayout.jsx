import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";


const GuestLayout = () =>{

    return(
        <div>
            <AppHeader />
            <main>
                <Outlet />
            </main>  
            <AppFooter/>      
        </div>
    );
};

export default GuestLayout;