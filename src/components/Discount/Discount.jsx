import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const Discount = () => {
    const [totalPrice, setTotalPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(20);
    const [finalPrice, setFinalPrice] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const calculateDiscount = () => {
        const price = parseFloat(totalPrice);
        if (price < 0 || discountPercentage < 0) {
            toast('Please enter a valid price and discount.');
            return;
        }
        else {
            const discount = (price * discountPercentage) / 100;
            const total = totalPrice - discount
            setFinalPrice(total.toFixed(2));
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='mx-20 my-10'>

            <Helmet>
                <title>Gadget Heaven | Discount</title>
            </Helmet>

            <h1 className='font-bold text-3xl'>Our Current Offer</h1>
            <p className="text-xl font-medium mt-5 bg-white p-4 rounded-xl">
                Get 20% off on all gadgets! Use code <span className="font-bold text-red-500">GADGET20 </span>
                at checkout.
            </p>
            <h2 className='mt-7 font-bold text-black text-xl bg-[#9538E2] p-2 text-center rounded-xl'>CALCULATE YOUR DISCOUNTED PRICE</h2>
            <div className='flex justify-between items-center border-2 p-5 mt-6 rounded-xl'>

                <div>
                    <label htmlFor="totalPrice" className='text-lg font-bold'>Total Price :</label>
                    <input
                        className='bg-purple-200 ml-2 border-2 rounded-xl text-black p-2'
                        placeholder='Total Price'
                        type="number"
                        value={totalPrice}
                        onChange={(e) => setTotalPrice(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="discountPercentage" className='text-lg font-bold'>Discount Percentage :</label>
                    <input
                        className='bg-purple-200 ml-2 border-2 rounded-xl text-black p-2'
                        placeholder='Discount Percentage'
                        type="number"
                        value={discountPercentage}
                        onChange={(e) => setDiscountPercentage(e.target.value)}
                    />
                </div>

                <button
                    className='text-lg font-bold btn bg-purple-200 text-black'
                    onClick={calculateDiscount}
                >
                    CALCULATE
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-xl w-1/3">
                        <h2 className="font-bold text-2xl mb-4">Discounted Price</h2>
                        <p className="text-xl">Your final price after discount is: <strong>${finalPrice}</strong></p>
                        <button
                            className="mt-5 bg-red-500 text-white p-2 rounded-lg"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Discount;
