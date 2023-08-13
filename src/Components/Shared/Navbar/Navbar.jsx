import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo/Logo.png"
import userProfilePic from "../../../assets/user/user.png"

const Navbar = () => {
    const location = useLocation();
    const user = true;
    const navItem = (
        <>
            <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/' ? 'text-info' : ''}`} to="/">Home</Link></li>

            <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/comics' ? 'text-info' : ''}`} to="/comics">Comics</Link></li>
            <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/education' ? 'text-info' : ''}`} to="/education">Education</Link></li>
            <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/magazines' ? 'text-info' : ''}`} to="/magazines">Magazines</Link></li>
            <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/mystery' ? 'text-info' : ''}`} to="/mystery">Mystery & Thriller</Link></li>
        </>
    );
    return (
        <div className="z-10 navbar h-full w-full bg-[#EFF6FF] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <Link to="/" className="w-16 normal-case text-xl hidden lg:block">
                    <img className="w-full" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex gap-3">
                <ul className="flex items-center justify-center gap-4 px-1">
                    {
                        navItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </label>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                        <Link
                                                to='/'
                                                className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 delay-100 btn-block text-center'

                                            >
                                                View Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={userProfilePic} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <Link to="/signin" className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/signin' ? 'text-info' : ''}`}>Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;