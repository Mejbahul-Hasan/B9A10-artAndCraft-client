import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const MyCraftItem = () => {
    const { user } = useContext(AuthContext) || {};
    const [myItem, setMyItem] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://art-and-craft-server-eight.vercel.app/items-email/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyItem(data))
    }, [user, control])
    // console.log(myItem)

    const handleCustom = (e)=>{
        const customItem = myItem.filter(item=>item.customization == e.target.value);
        setMyItem(customItem);
    }

    const handleDelete = (id) => {
        // console.log(id);
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
                fetch(`https://art-and-craft-server-eight.vercel.app/items/${id}`, {
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
                            setControl(!control)
                        }
                    })

            }
        });
    }

    return (
        <>
            <div className="text-center my-4">
                <select onChange={handleCustom} className="select select-bordered join-item">
                    <option disabled selected>Customization</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
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
        </>
    );
};

export default MyCraftItem;