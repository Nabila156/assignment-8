import { useEffect, useState } from "react";
import { clearCart, getStoredCartList } from "../utility/addToList";
import CartCard from "../CartCard/CartCard";
import { useLoaderData } from "react-router-dom";
import { GrSort } from "react-icons/gr";

const CartGadgets = () => {

    const allGadgets = useLoaderData();

    const [gadgetList, setGadgetList] = useState([]);


    useEffect(() => {
        const storedCartList = getStoredCartList();

        const cartList = allGadgets.filter(gadget => storedCartList.includes(gadget.productId))

        setGadgetList(cartList);
    }, [allGadgets]);

    let total = gadgetList.reduce((acc, gadget) => acc + (gadget.price), 0);


    const purchase = () =>{
        clearCart();
        setGadgetList([]);
    }


    return (
        <div className="mx-20">
            <div className="m-10">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-2xl">Cart</h2>
                    <div className="flex gap-6 items-center">
                        <h2 className="font-bold text-2xl">Total Cost : {total.toFixed(2)}</h2>
                        <div className="flex text-lg rounded-full text-[#9538E2] border border-[#9538E2] btn gap-2 items-center">
                            <button>Sort by Price</button>
                            <GrSort />
                        </div>
                        <div onClick={purchase} disabled={gadgetList.length === 0} className="text-lg rounded-full bg-[#9538E2] text-white border border-[#9538E2] btn gap-2">
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