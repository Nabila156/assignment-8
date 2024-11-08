import React from 'react';
import { TiDelete } from "react-icons/ti";
import { removeCartGadget, removeWishlistGadget } from '../utility/addToList';

const CartCard = ({ gadget, setGadgetList }) => {

    const {productImage, productTitle, description, price, productId} = gadget;

    const updatedCartList = ()=>{
        removeCartGadget(productId);
        const newList = prevList=> prevList.filter(item=> item.productId !== productId) ;
        setGadgetList(newList);
    }
    const updatedWishList = ()=>{
        removeWishlistGadget(productId);
        const newList = prevList=> prevList.filter(item=> item.productId !== productId) ;
        setGadgetList(newList);
    }

    const removeItem =()=>{
        updatedCartList();
        updatedWishList();
    }

    return (
        <div className='flex px-10 py-4 items-center gap-8 overflow-hidden mb-8 rounded-2xl bg-white'>
            <img className='w-[20%] h-[250px]' src={productImage} alt="gadget" />
            <div className='w-[80%] flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-bold'>{productTitle}</h2>
                    <p className='mt-4 font-medium text-slate-500'>{description}</p>
                    <p className='mt-4 text-lg font-semibold'>Price : {price}</p>
                </div>
                <div onClick={removeItem} className='text-6xl'>
                    <TiDelete />
                </div>
            </div>
        </div >
    );
};

export default CartCard;