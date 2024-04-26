import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProviders";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => toast.success("Logout Successful !"))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-items">All Art & Craft Items</NavLink></li>
        <li><NavLink to="/add-item">Add Craft Item</NavLink></li>
        <li><NavLink to="/my-item">My Art & Craft List</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to="/">SketchStudio</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="tooltip tooltip-left" data-tip={user?.displayName || "User name not found"} >
                            <button className="btn btn-ghost"><img className="w-10 rounded-full" alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://i.ibb.co/rGZ42tK/todd-kent-178j8t-Jr-Nlc-unsplash.jpg"} /></button>
                        </div>
                        <button onClick={handleSignOut} className="btn btn-sm">Log Out</button>
                    </>
                        : <div>
                            <Link to="/login" className="btn btn-sm">Login</Link>
                            <Link to="/register" className="btn btn-sm ml-3">Registration</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default NavBar;
