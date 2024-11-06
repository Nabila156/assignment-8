import { useEffect, useState } from "react";
import { getStoredCartList } from "../utility/addToList";
import CartCard from "../CartCard/CArtCArd";
import { useLoaderData } from "react-router-dom";
import { GrSort } from "react-icons/gr";

const CartGadgets = () => {

    const allGadgets = useLoaderData();

    const [gadgetList, setGadgetList] = useState([]);


    useEffect(() => {
        const storedCartList = getStoredCartList();

        const cartList = allGadgets.filter(gadget => storedCartList.includes(gadget.productId))
console.log(allGadgets)
        setGadgetList(cartList);
    }, []);


    return (
        <div className="mx-20">
            <div className="m-10">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-2xl">Cart</h2>
                    <div className="flex gap-6 items-center">
                        <h2 className="font-bold text-2xl">Total Cost :</h2>
                        <div className="flex text-lg rounded-full text-[#9538E2] border border-[#9538E2] btn gap-2 items-center">
                            <button>Sort by Price</button>
                            <GrSort />
                        </div>
                        <div className="flex text-lg rounded-full bg-[#9538E2] text-white border border-[#9538E2] btn gap-2 items-center">
                            <button>Purchase</button>
                        </div>
                    </div>
                </div>

            </div>
            {
                gadgetList.map(gadget => <CartCard key={gadget.productId} gadget={gadget}></CartCard>)
            }
        </div>
    );
};

export default CartGadgets;