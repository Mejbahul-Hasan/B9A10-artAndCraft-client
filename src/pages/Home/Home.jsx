import { Link, useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import Slider from "../../components/Slider";
import TwoSection from "../../components/TwoSection";
import ArtCategories from "../../components/ArtCategories";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {

    const cardItems = useLoaderData();

    const [text] = useTypewriter({
        words: ['Craft Items', 'Section!'],
        loop: 10,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [text_2] = useTypewriter({
        words: ['Art & Craft', 'Categories', 'Section!'],
        loop: 10,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [text_3] = useTypewriter({
        words: ['Two Extra', 'Sections!'],
        loop: 10,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    return (
        <>
            <div className="my-5">
                <Slider />
            </div>
            <div className="bg-purple-100 h-20 rounded-xl text-center py-5">
                <span className="text-2xl font-bold">{text}</span>
                <Cursor cursorColor='red' />
            </div>
            <div className="lg:grid lg:grid-cols-3 gap-10 my-5">
                {
                    cardItems.map(item =>
                        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={item?.image} alt="artAndCraft" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item?.item_name}
                                    <div className="badge badge-secondary">${item?.price}</div>
                                </h2>
                                <div className="card-actions">
                                    <div className="badge badge-outline">{item?.subcategory_name}</div>
                                    <div className="badge badge-outline"><FcRating />{item?.rating}</div>
                                </div>
                                <p>{item?.description}</p>
                                <Link to={`/view-details/${item._id}`}><button className="btn btn-sm w-full">View Details</button></Link>
                            </div>
                        </div>)
                }
            </div>
            <div>
                <div className="bg-purple-100 h-20 rounded-xl text-center py-5">
                    <span className="text-2xl font-bold">{text_2}</span>
                    <Cursor cursorColor='red' />
                </div>
                <ArtCategories />
                <div className="bg-purple-100 h-20 rounded-xl text-center py-5">
                    <span className="text-2xl font-bold">{text_3}</span>
                    <Cursor cursorColor='red' />
                </div>
                <TwoSection />
            </div>
        </>
    );
};

export default Home;