import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import Categories from "../Categories/Categories";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    return (
        <div className="mx-20">
            <h2 className="text-center mb-16 text-black text-4xl font-bold">Explore Cutting-Edge Gadgets</h2>
            <div className="flex flex-col lg:flex-row justify-center mx-auto gap-4 my-12">
                <div className="lg:w-[20%]">
                    <Categories></Categories>
                </div>

                <div className="lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.productId}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;