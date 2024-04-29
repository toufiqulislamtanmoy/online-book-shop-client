import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/Logo.png"
import {
    FaFacebook,
    FaTwitter,
    FaInstagramSquare
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" footer p-5 lg:p-10 bg-[#EFF6FF] text-base-content">
            <div>
                <img className="w-24" src={logo} alt="" />
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Social Contact</span>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <Link to="https://www.facebook.com/sharier007" className="hover:text-info" ><FaFacebook /></Link>
                    <Link  className="hover:text-info" to="https://www.facebook.com/sharier007"><FaTwitter /></Link>
                    <Link className="hover:text-info" to="https://www.instagram.com/sharier007/"><FaInstagramSquare /></Link>
                </div>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered  pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;