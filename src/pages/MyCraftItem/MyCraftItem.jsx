import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const MyCraftItem = () => {
    const { user } = useContext(AuthContext);
    const [myItem, setMyItem] = useState([]);
    // console.log(user?.email);

    useEffect(() => {
        fetch(`http://localhost:5000/items-email/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyItem(data))
    }, [user])
    // console.log(myItem)

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/items/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className="lg:grid lg:grid-cols-3 gap-10">
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
                                <Link to={`/update/${item._id}`}><button className="btn btn-secondary btn-sm">Update</button></Link>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-secondary btn-sm">Delete</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyCraftItem;