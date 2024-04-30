import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtCategories = () => {

    const [newItems, setNewItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newItems')
            .then(res => res.json())
            .then(data => {
                setNewItems(data)
            })
    }, [])


    return (
        <>
            <div className="lg:grid lg:grid-cols-3 gap-10 my-5">
                {
                    newItems.map(item =>
                        <Link key={item._id} to={`/subcategory-card/${item?.subcategory_name}`}>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src={item?.image} alt="Craft" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.item_name}</h2>
                                    <h2 className="card-title">Category: {item?.subcategory_name}</h2>
                                    <p>{item?.description}</p>
                                </div>
                            </div>
                        </Link>)
                }
            </div>
        </>
    );
};

export default ArtCategories;