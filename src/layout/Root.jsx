import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;