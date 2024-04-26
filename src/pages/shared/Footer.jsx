import { IoHome } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-10">
            <aside>
                <IoHome />
                <p>SweetHome<br />Providing reliable shelter since 1912</p>
            </aside>
            <nav>
                <h6 className="footer-title">Contact Us</h6>
                <a className="link link-hover">Staten Island, NY 10314, USA</a>
                <a className="link link-hover">+111 222 369 45</a>
                <a className="link link-hover">+123 456 789 11</a>
                <a className="link link-hover">sweethome@example.com</a>
            </nav>
            <nav>
                <h6 className="footer-title">Categories</h6>
                <a className="link link-hover">Recent Property</a>
                <a className="link link-hover">To Sell</a>
                <a className="link link-hover">To Buy</a>
                <a className="link link-hover">To Rent</a>
            </nav>
            <nav>
                <h6 className="footer-title">Links</h6>
                <a className="link link-hover">Latest News</a>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">FAQ Page</a>
                <a className="link link-hover">Contact Us</a>
            </nav>
        </footer>
    );
};

export default Footer;