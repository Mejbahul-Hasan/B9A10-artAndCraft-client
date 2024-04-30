import { Link, useLoaderData } from "react-router-dom";


const SubCategoryCard = () => {

    const categoryData = useLoaderData();

    return (
        <>
            <h1>This page is under construction</h1>
            <div className="lg:grid lg:grid-cols-3 gap-10 my-5">
                {/* {
                    categoryData.map(item=>
                        <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                } */}
            </div>
        </>
    );
};

export default SubCategoryCard;