
const Categories = ({ categories, activeCategory, handleActiveCategory }) => {
// const Categories = ({ gadgets, activeCategory, handleActiveCategory }) => {
    // const Categories = () => {
      
    return (
        // <div className="bg-white p-4 rounded-3xl flex flex-col">
        //     <button className="btn mb-4 rounded-full">All Products</button>
        //     <button className="btn mb-4 rounded-full">Laptop</button>
        //     <button className="btn mb-4 rounded-full">Phone</button>
        //     <button className="btn mb-4 rounded-full">Accessories</button>
        //     <button className="btn mb-4 rounded-full">Smart Watch</button>
        //     <button className="btn mb-4 rounded-full">MacBook</button>
        //     <button className="btn rounded-full">Iphone</button>
        // </div>

           
//         <div className="bg-white p-4 rounded-3xl flex flex-col">
//             {
//                 gadgets.map ((gadget, index)=> (
//                     <button className={`btn mb-4 rounded-full ${activeCategory === gadget.category ? "bg-[#9538E2] text-white" : "bg-gray-200"
//                             }`} 
//                     key={index}
//                     onClick={() => handleActiveCategory(gadget.category)  
//                      }>{gadget.category}</button>
//     ))
// }
//         </div >
        <div className="bg-white p-4 rounded-3xl flex flex-col">
            {
                categories.map ((category, index)=> (
                    <button className={`btn mb-4 rounded-full ${activeCategory === category.category ? "bg-[#9538E2] text-white" : "bg-gray-200"
                            }`} 
                    key={index}
                    onClick={() => handleActiveCategory(category.category)  
                     }>{category.category}</button>
    ))
}
        </div >
    );
};

export default Categories;