import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Banner from "../../Banner/Banner";
import BannerImage from "../../BannerImage/BannerImage";

const Navbar = () => {

    const links = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink>Statistics</NavLink></li>
        <li><NavLink>Dashboard</NavLink></li>

    </>

    return (
        <div className="p-10">
            <div className="px-8 rounded-xl bg-[#9538E2]">
                <div className="navbar">
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
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <a className="font-bold text-white text-xl">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end text-4xl">
                        <CiShoppingCart className="bg-white rounded-full p-1" />
                        <CiHeart className="bg-white rounded-full p-1 ml-3" />
                    </div>

                </div>

                <Banner></Banner>

            </div>

            <BannerImage></BannerImage>
        </div>
    );
};

export default Navbar;