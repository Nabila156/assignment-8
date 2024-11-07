
import { useLoaderData } from "react-router-dom";
import Gadgets from "../../Gadgets/Gadgets";

const Home = () => {

    const categories = useLoaderData();
    return (
        <div>
           <Gadgets categories={categories}></Gadgets>
        </div>
    );
};

export default Home;