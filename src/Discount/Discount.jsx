import React from 'react';

const Discount = () => {
    return (
        <div className='mx-20 my-10'>
            <h1 className='font-bold text-3xl'>Our Current Offer</h1>
            <p className="text-xl font-medium mt-5 bg-white p-4 rounded-xl">
                Get 20% off on all gadgets this week! Use code <span className="font-bold text-red-500">GADGET20 </span>
                at checkout.
            </p>
            <h2 className='mt-7 font-bold text-black text-xl bg-[#9538E2] p-2 text-center rounded-xl'>CALCULATE YOUR DISCOUNTED PRICE</h2>
            <div className='flex justify-between items-center border-2 p-5 mt-6 rounded-xl'>

                <div>
                    <label for="discount" className='text-lg font-bold'>Total Price :</label>
                    <input className='bg-purple-200 ml-2 border-2 rounded-xl text-black p-2' placeholder='Total Price' type="text" />
                </div>

                <div>
                    <label for="discount" className='text-lg font-bold'>Your Discount :</label>
                    <input className='bg-purple-200 ml-2 border-2 rounded-xl text-black p-2' placeholder='Discount' type="text" />

                </div>

                <button className='text-lg font-bold btn bg-purple-200 text-black'>CALCULATE</button>
            </div>
        </div>
    );
};

export default Discount;