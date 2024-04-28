import { Link, useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import Slider from "../../components/Slider";

const Home = () => {

    const cardItems = useLoaderData();

    return (
        <>
            <div className="my-5">
                <Slider />
            </div>
            <div>
                <h1>Total Data: {cardItems.length}</h1>
            </div>
            <div className="lg:grid lg:grid-cols-3 gap-10">
                {
                    cardItems.map(item =>
                        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={item.image} alt="artAndCraft" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.item_name}
                                    <div className="badge badge-secondary">${item.price}</div>
                                </h2>
                                <div className="card-actions">
                                    <div className="badge badge-outline">{item.subcategory_name}</div>
                                    <div className="badge badge-outline"><FcRating />{item.rating}</div>
                                </div>
                                <p>{item.description}</p>
                                <Link to={`/view-details/${item._id}`}><button className="btn btn-sm w-full">View Details</button></Link>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default Home;