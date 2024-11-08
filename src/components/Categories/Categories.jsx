
const Categories = ({ categories, activeCategory, handleActiveCategory }) => {
      
    return (
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