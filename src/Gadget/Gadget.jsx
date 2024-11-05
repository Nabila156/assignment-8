import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {

    const { price, productImage, productTitle, productId } = gadget;

    return (
        <div className="card bg-white">
            <figure>
                <img className="p-4 h-56 rounded-[30px]"
                    src={productImage}
                    alt={productTitle} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productTitle}</h2>
                <p>price: {price}k</p>
                <div className="card-actions">
                   <Link to={`gadgets/${productId}`}><button className="btn bg-white text-[#9538E2] border-[#9538E2] rounded-full border">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;