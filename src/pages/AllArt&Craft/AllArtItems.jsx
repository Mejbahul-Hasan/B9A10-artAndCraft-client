import { Link, useLoaderData } from "react-router-dom";
import { Bounce, Fade } from "react-awesome-reveal";

const AllArtItems = () => {

    const allArtItems = useLoaderData();

    return (
        <>
            <div className="text-center font-bold text-xl my-5">
                <Bounce>
                    <h1>Awesome collection of Art & Craft Items: {allArtItems.length}</h1>
                </Bounce>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image Name</th>
                            <th>Image Category</th>
                            <th>Rating</th>
                            <th>Price(USD)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allArtItems.map(item => <tr key={item._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item?.item_name}</div>
                                            <div className="text-sm opacity-50"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.subcategory_name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Stock Status: {item?.stockStatus}</span>
                                </td>
                                <td>{item?.rating}</td>
                                <td>{item?.price}</td>
                                <th>
                                    <Link to={`/view-details/${item._id}`}><button className="btn btn-xs">View Details</button></Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllArtItems;