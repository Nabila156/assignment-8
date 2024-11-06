import { useEffect, useState } from "react";
import { getStoredCartList } from "../utility/addToList";
import CartCard from "../CartCard/CArtCArd";

const CartGadgets = () => {

    const [addToCart, setAddToCart] = useState([]);

    const [gadgetList, setGadgetList] = useState([]);

    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => setAddToCart(data))
    }, []);

    useEffect(() => {
        const storedCartList = getStoredCartList();
     
        const cartList = addToCart.filter(gadget => storedCartList.includes(gadget.productId))
        console.log(storedCartList, addToCart)
        setGadgetList(cartList);
    },[addToCart]);


    return (
        <div>
            <h2>{gadgetList.length}</h2>
            {
                gadgetList.map(gadget => <CartCard key={gadget.productId} gadget={gadget}></CartCard>)
            }
        </div>
    );
};

export default CartGadgets;