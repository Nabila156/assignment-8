
import { useLoaderData } from "react-router-dom";
import Gadgets from "../Gadgets/Gadgets";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const categories = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Gadgets categories={categories}></Gadgets>
        </div>
    );
};

export default Home;