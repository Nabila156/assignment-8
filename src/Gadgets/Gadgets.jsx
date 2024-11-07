import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import Categories from "../Categories/Categories";

const Gadgets = ({categories}) => {
// const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    const [activeCategory, setActiveCategory] = useState("All Products");

    const filterGadgets = activeCategory === "All Products" 
       ? gadgets : gadgets.filter(gadget => gadget.category === activeCategory);

    const handleActiveCategory = (category) =>{
        setActiveCategory(category);
    }   

    return (
        <div className="mx-20">
            <h2 className="text-center mb-16 text-black text-4xl font-bold">Explore Cutting-Edge Gadgets</h2>
            <div className="flex flex-col lg:flex-row justify-between mx-auto my-12">
                <div className="lg:w-[20%]">
                     <Categories categories={categories} activeCategory={activeCategory} handleActiveCategory={handleActiveCategory}></Categories>
                     {/* <Categories gadgets={gadgets} activeCategory={activeCategory} handleActiveCategory={handleActiveCategory}></Categories> */}
                </div>

                <div className="lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    { 
                        filterGadgets.length === 0 ? <h1 className="text-3xl font-bold text-red-600">No data found</h1> : filterGadgets.map(gadget => <Gadget gadget={gadget} key={gadget.productId}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;