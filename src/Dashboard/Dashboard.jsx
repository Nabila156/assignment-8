import { GrSort } from "react-icons/gr";

const Dashboard = () => {
    return (
        <div className="m-10 px-20">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl">Cart</h2>
                <div className="flex gap-6 items-center">
                   <h2 className="font-bold text-2xl">Total Cost :</h2>
                   <div className="flex text-lg rounded-full text-[#9538E2] border border-[#9538E2] btn gap-2 items-center">
                        <button>Sort by Price</button>
                        <GrSort />
                   </div>
                   <div className="flex text-lg rounded-full bg-[#9538E2] text-white border border-[#9538E2] btn gap-2 items-center">
                        <button>Purchase</button>
                   </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;