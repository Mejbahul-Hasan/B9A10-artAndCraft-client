import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdatePage = () => {
    const updatedItem = useLoaderData();
    const { _id, item_name, description, price, processing_time, image, subcategory_name, customization, stockStatus, rating } = updatedItem;

    const handleUpdateItem = e => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const description = form.description.value;
        const subcategory_name = form.subcategory_name.value;
        const customization = form.customization.value;
        const rating = form.rating.value;
        const stockStatus = form.stockStatus.value;
        const price = form.price.value;
        const processing_time = form.processing_time.value;
        const image = form.image.value;
        const updateItem = { item_name, description, subcategory_name, customization, rating, stockStatus, price, processing_time, image };
        console.log(updateItem);
        form.reset();

        fetch(`https://art-and-craft-server-eight.vercel.app/items/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateItem),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Item updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }

    return (
        <div className="bg-gray-200 rounded-2xl text-center max-w-6xl mx-auto">
            <h1 className="text-3xl py-5">Please Update Your Information:</h1>
            <form onSubmit={handleUpdateItem}>
                <div>
                    <div className="lg:flex gap-5">
                        <label className="input input-bordered flex items-center gap-2 m-5 md:w-1/2">
                            Name:
                            <input type="text" name="item_name" className="grow w-full" defaultValue={item_name}/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 m-5 md:w-1/2">
                            Description:
                            <input type="text" name="description" className="grow w-full" defaultValue={description} />
                        </label>
                    </div>
                    <div className="lg:flex gap-5">
                        <select name="subcategory_name" defaultValue={subcategory_name} className="select select-bordered join-item md:w-1/2 m-5">
                            <option disabled selected>Subcategory Name</option>
                            <option>Landscape Painting</option>
                            <option>Portrait Drawing</option>
                            <option>Watercolour Painting</option>
                            <option>Oil Painting</option>
                            <option>Charcoal Sketching</option>
                            <option>Cartoon Drawing</option>
                        </select>
                        <select name="customization" defaultValue={customization} className="select select-bordered join-item md:w-1/2 m-5">
                            <option disabled selected>Customization</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="lg:flex gap-5">
                        <select name="rating" defaultValue={rating} className="select select-bordered join-item md:w-1/2 m-5">
                            <option disabled selected>Rating</option>
                            <option>Good</option>
                            <option>Average</option>
                            <option>Bad</option>
                        </select>
                        <select name="stockStatus" defaultValue={stockStatus} className="select select-bordered join-item md:w-1/2 m-5">
                            <option disabled selected>Stock Status</option>
                            <option>In Stock</option>
                            <option>Made to Order</option>
                        </select>
                    </div>
                    <div className="lg:flex gap-5">
                        <label className="input input-bordered flex items-center gap-2 m-5 md:w-1/2">
                            Price:
                            <input type="text" name="price" className="grow w-full" defaultValue={price}/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 m-5 md:w-1/2">
                            Time:
                            <input type="text" name="processing_time" className="grow w-full" defaultValue={processing_time} />
                        </label>
                    </div>
                    <div className="gap-5 pr-10">
                        <label className="input input-bordered flex items-center gap-2 m-5 md:w-full">
                            Image:
                            <input type="text" name="image" className="grow w-full" defaultValue={image} />
                        </label>
                    </div>
                    <button className="btn btn-primary w-1/2 my-5">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePage;