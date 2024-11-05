
const Gadget = ({ gadget }) => {
    return (
        <div className="card bg-white">
            <figure>
                <img className="p-4 h-56 rounded-[30px]"
                    src={gadget.product_image}
                    alt="Gadget" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{gadget.product_title}</h2>
                <p>price: {gadget.price}k</p>
                <div className="card-actions">
                    <button className="btn bg-white text-[#9538E2] border-[#9538E2] rounded-full border">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;