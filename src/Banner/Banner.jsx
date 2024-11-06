import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Banner = () => {

    const location = useLocation();

    const isHomePage = location.pathname === "/";
    
    const isGadgetDetails = location.pathname.startsWith("/gadgets/");

    const isDashboard = location.pathname === "/dashboard";

    const isWishlist = location.pathname === "/dashboard/wishlist";

    const isCart = location.pathname === "/dashboard/cart";

    const isStatistics = location.pathname === "/statistics";

    const [isCartActive, setIsCartActive] = useState(true)

    const handleToggle = ()=>{
        setIsCartActive(!isCartActive)
    }

    return (
        <div className={`text-center ${isHomePage || isGadgetDetails? 'pb-44' : 'pb-10'}`}>
            {
                isHomePage && <h1 className="text-white mt-7 md:leading-[70px] font-bold text-3xl md:text-5xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            }
            {
                isGadgetDetails && <h1 className="text-white pt-10 md:leading-[70px] font-bold text-2xl md:text-4xl">Product Details</h1>
            }
            {
                (isDashboard || isCart || isWishlist) && (
                  <h1 className="text-white pt-10 md:leading-[70px] font-bold text-2xl md:text-4xl">Dashboard</h1>
                )  
            }
            {
                isStatistics && <h1 className="text-white pt-10 md:leading-[70px] font-bold text-2xl md:text-4xl">Statistics</h1>
            }
            {
               isHomePage && <button className="btn mt-8 rounded-full text-[#9538E2] font-bold text-lg bg-white">Shop Now</button>
                 
            }
            <p className="text-white mt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            {
                (isDashboard || isCart || isWishlist) &&(
                    <div className="mt-8 flex justify-center items-center gap-6">
                        <NavLink to="/dashboard/cart" onClick={handleToggle}><button className={`${isCartActive ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'} btn text-center text-xl rounded-full py-1 px-10`}>Cart</button></NavLink> 
                        <NavLink to="/dashboard/wishlist" onClick={handleToggle}><button className={`${!isCartActive ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'} btn text-center text-xl rounded-full py-1 px-10`}>Wishlist</button></NavLink>
                    </div>
                )
            }
        </div>
    );
};

export default Banner;