import { useLoaderData, useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const GadgetDetails = () => {

    const { productId: id } = useParams();

    const data = useLoaderData();

    const selectedGadget = data.find(gadget => gadget.productId === id);

    const { productTitle, productImage, price, availability, specification, description, rating } = selectedGadget;

    return (
        <div className="card lg:card-side w-[60%] mx-auto p-4 bg-white border">
            <figure className="w-[40%]">
                <img
                    src={productImage}
                    alt={productTitle} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{productTitle}</h2>
                <p className="text-lg font-semibold">Price : {price}k</p>
                {
                    availability ? <p className="text-center text-green-500 text-sm border w-1/5 px-1 bg-[#EAF5E6] rounded-full border-green-500">In Stock</p> : <p className="text-center text-red-500 text-sm border w-1/3 px-1 bg-red-50 rounded-full border-red-500">Not Available</p>
                }
                <p className="text-sm text-slate-500">{description}</p>
                <p className="text-base font-semibold">Specification:</p>
                <ol className="list-decimal ml-5 text-sm text-slate-500">
                    {specification.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
                <div class="rating rating-sm ml-4">
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                </div>
                <p className="text-base font-semibold bg-slate-200 p-2 w-1/3 rounded-full text-center">Rating : {rating}</p>
                <div className="flex gap-6 items-center">
                    <button className="btn text-white bg-[#9538E2]">Add To Cart<CiShoppingCart className="text-xl"/></button>
                    <CiHeart className="cursor-pointer text-4xl border rounded-full p-1" />
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;