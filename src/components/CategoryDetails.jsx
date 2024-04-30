import { useLoaderData } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { FcRating } from "react-icons/fc";


const CategoryDetails = () => {

    const categoryData = useLoaderData();
    const { _id, item_name, description, price, processing_time, image, subcategory_name, rating } = categoryData;

    return (
        <>
            <div className="hero rounded-2xl bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{item_name}</h1>
                        <h1 className="text-md font-bold">Category: {subcategory_name}</h1>
                        <div className="lg:flex lg:gap-5">
                            <h2 className="card-title">
                                <IoIosPricetags />
                                <div className="badge badge-secondary">USD{price}</div>
                            </h2>
                            <h2 className="card-title my-2">
                                <FcRating />
                                <div className="badge badge-secondary">{rating}</div>
                            </h2>
                        </div>
                        <p className="py-6 text-xl">{description}</p>
                        <div>
                            <h2 className="card-title">
                                Processing Time:
                                <div className="badge badge-secondary">{processing_time}</div>
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryDetails;