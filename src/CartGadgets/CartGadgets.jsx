import { useEffect, useState } from "react";
import { clearCart, getStoredCartList } from "../utility/addToList";
import CartCard from "../CartCard/CartCard";
import { useLoaderData, useNavigate } from "react-router-dom";
import { GrSort } from "react-icons/gr";
import { Helmet } from "react-helmet-async";

const CartGadgets = () => {

    const allGadgets = useLoaderData();

    const navigate = useNavigate();

    const [gadgetList, setGadgetList] = useState([]);

    const [totalCost, setTotalCost] = useState(0);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedCartList = getStoredCartList();

        const cartList = allGadgets.filter(gadget => storedCartList.includes(gadget.productId))

        setGadgetList(cartList);
    }, [allGadgets]);

    const total = gadgetList.reduce((acc, gadget) => acc + (gadget.price), 0);


    const closeModal = () => {
        setShowModal(false);
        navigate("/");
    }

    const purchase = () => {
        setTotalCost(total);
        setShowModal(true);
        clearCart();
        setGadgetList([]);
    }


    const sortByPrice = () => {
        const sortedList = [...gadgetList.sort((a, b) => parseInt(b.price) - parseInt(a.price))]
        setGadgetList(sortedList);
    }



    return (
        <div className="mx-20">

            <Helmet>
                <title>Gadget Heaven | Cart</title>
            </Helmet>

            <div className="m-10">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-2xl">Cart</h2>
                    <div className="flex gap-6 items-center">
                        <h2 className="font-bold text-2xl">Total Cost : {total.toFixed(2)}</h2>
                        <div onClick={sortByPrice} className="flex text-lg rounded-full text-[#9538E2] border border-[#9538E2] btn gap-2 items-center">
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
                gadgetList.map(gadget => <CartCard key={gadget.productId} gadget={gadget} setGadgetList={setGadgetList}></CartCard>)
            }

            {
                showModal && (
                    <div className="modal-box mx-auto mb-5 text-center">

                        <img className="mx-auto" src="/images/Group.png" alt="" />

                        <h3 className="font-bold my-6 text-red-400 text-4xl">Payment Successful</h3>
                        <hr />
                        <p className="py-4 text-slate-400 text-xl font-bold">Thanks for purchasing.</p>
                        <p className="text-slate-400 text-xl font-bold">Total : {totalCost.toFixed(2)}$</p>

                        <button onClick={closeModal} className="btn mt-4">Close</button>

                    </div>
                )
            }
        </div>
    );
};

export default CartGadgets;