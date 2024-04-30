import { Link, useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";

const SubCategoryCard = () => {

    const categoryData = useLoaderData();
    const { _id, item_name, description, price, processing_time, image, subcategory_name, rating } = categoryData;

    return (
        <>
            <div className="lg:grid lg:grid-cols-3 gap-10 my-5">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="artAndCraft" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item_name}
                            <div className="badge badge-secondary">${price}</div>
                        </h2>
                        <div className="card-actions">
                            <div className="badge badge-outline">{subcategory_name}</div>
                            <div className="badge badge-outline"><FcRating />{rating}</div>
                        </div>
                        <p>{description}</p>
                        <div className="badge badge-outline">Processing Time:{processing_time}</div>
                        <Link to={`/subcategory-details/${_id}`}><button className="btn btn-sm w-full">View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubCategoryCard;