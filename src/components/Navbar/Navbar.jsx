import { NavLink, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Banner from "../../Banner/Banner";
import BannerImage from "../../BannerImage/BannerImage";
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const navigateCart = ()=>{
        navigate('/dashboard/cart');
    }
    const navigateWishlist = ()=>{
        navigate('/dashboard/wishlist');
    }

    const location = useLocation();

    const isHomePage = location.pathname === "/";

    const links = <>

        <li className={`font-medium ${isHomePage ? "text-white" : "text-black"}`}><NavLink to="/">Home</NavLink></li>
        <li className={`font-medium ${isHomePage ? "text-white" : "text-black"}`}><NavLink to="/statistics">Statistics</NavLink></li>
        <li className={`font-medium ${isHomePage ? "text-white" : "text-black"}`}><NavLink to="/dashboard">Dashboard</NavLink></li>

    </>

    return (
        <div className={`${isHomePage ? 'px-20 py-12' : 'p-0'}`}>
            <div className={`${isHomePage ? 'bg-[#9538E2] px-8 rounded-xl' : 'px-0'} `}>
                <div className={`navbar ${isHomePage ? '' : 'bg-white lg:px-24'}`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <a className={`font-bold text-xl ${isHomePage ? 'text-white' : 'text-black'}`}>Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end text-4xl">
                        <CiShoppingCart onClick={navigateCart} className="bg-white border rounded-full p-1" />
                        <CiHeart onClick={navigateWishlist} className="bg-white border rounded-full p-1 ml-3" />
                    </div>

                </div>

                <div className={`${isHomePage ? '' : ' bg-[#9538E2]'}`}>
                    <Banner></Banner>
                </div>

            </div>

            {
                isHomePage ? <BannerImage></BannerImage> : ''
            }
        </div>
    );
};

export default Navbar;