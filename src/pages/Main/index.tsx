import {Outlet} from 'react-router-dom'
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";

export default function Main() {
    return(
        <div className="relative">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}
