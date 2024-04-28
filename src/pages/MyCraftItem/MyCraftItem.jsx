import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";


const MyCraftItem = () => {
    const { user } = useContext(AuthContext);
    const [myItem, setMyItem] = useState([]);
    // console.log(user?.email);

    useEffect(() => {
        fetch(`http://localhost:5000/items-email/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyItem(data))
    }, [user])

    console.log(myItem)

    return (
        <div>
            {
                myItem.map(item =>
                    <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="artAndCraft" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.item_name}
                                <div className="badge badge-secondary">${item.price}</div>
                                <div className="badge badge-secondary"><FcRating />{item.rating}</div>
                            </h2>
                            <div className="card-actions">
                                <div className="badge badge-outline">Customization Required:{item.customization}</div>
                                <div className="badge badge-outline">{item.stockStatus}</div>
                            </div>
                            <p>{item.description}</p>
                            <div className="flex gap-5 justify-center">
                                <Link to={"/update"}><button className="btn btn-secondary btn-sm">Update</button></Link>
                                <Link><button className="btn btn-secondary btn-sm">Delete</button></Link>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyCraftItem;