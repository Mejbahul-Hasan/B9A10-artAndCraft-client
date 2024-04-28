import { useLoaderData } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { FcRating } from "react-icons/fc";

const ViewDetails = () => {

    const detailItem = useLoaderData();

    return (
        <div className="hero rounded-2xl bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={detailItem?.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{detailItem?.item_name}</h1>
                    <h1 className="text-md font-bold">Category: {detailItem?.subcategory_name}</h1>
                    <div className="lg:flex lg:gap-5">
                        <h2 className="card-title">
                            <IoIosPricetags />
                            <div className="badge badge-secondary">USD{detailItem?.price}</div>
                        </h2>
                        <h2 className="card-title my-2">
                            <FcRating />
                            <div className="badge badge-secondary">{detailItem?.rating}</div>
                        </h2>
                    </div>
                    <p className="py-6 text-xl">{detailItem?.description}</p>
                    <div>
                        <h2 className="card-title">
                            Customization Required:
                            <div className="badge badge-secondary">{detailItem?.customization}</div>
                        </h2>
                        <h2 className="card-title">
                            Stock Status:
                            <div className="badge badge-secondary">{detailItem?.stockStatus}</div>
                        </h2>
                        <h2 className="card-title">
                            Processing Time:
                            <div className="badge badge-secondary">{detailItem?.processing_time}</div>
                        </h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;