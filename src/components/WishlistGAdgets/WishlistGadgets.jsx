import { useEffect, useState } from "react";
import CartCard from "../CartCard/CartCard";
import { getStoredWishList } from "../../utility/addToList";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WishlistGadgets = () => {

    const allGadgets = useLoaderData();

    const [gadgetList, setGadgetList] = useState([]);


    useEffect(() => {
        const storedWishList = getStoredWishList();

        const wishList = allGadgets.filter(gadget => storedWishList.includes(gadget.productId))

        setGadgetList(wishList);
    }, []);



    return (
        <div className="mx-20 m-10">

            <Helmet>
                <title>Gadget Heaven | Wishlist</title>
            </Helmet>

            <h2 className="my-8 font-bold text-2xl">Wishlist</h2>
            {
                gadgetList.map(gadget => <CartCard key={gadget.productId} gadget={gadget} setGadgetList={setGadgetList}></CartCard>)
            }
        </div>
    );
};

export default WishlistGadgets;