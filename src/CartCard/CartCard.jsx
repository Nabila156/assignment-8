import React from 'react';

const CartCard = ({ gadget }) => {
    return (
        <div className='flex items-center gap-8 overflow-hidden mb-8 rounded-2xl bg-white'>
            <img className='w-[40%] h-[250px]' src={gadget.productImage} alt="" />
            <div>
                <h2 className='text-2xl font-bold'>{gadget.productTitle}</h2>
                <p className='mt-4 font-medium text-slate-500'>{gadget.description}</p>
                <p className='mt-4 text-lg font-semibold'>Price : {gadget.price}</p>
            </div>
        </div>
    );
};

export default CartCard;