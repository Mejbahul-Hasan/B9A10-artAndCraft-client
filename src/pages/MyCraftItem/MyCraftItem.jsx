import { useLoaderData } from "react-router-dom";

const MyCraftItem = () => {

    const myItem = useLoaderData();

    return (
        <div>
            <h1>My items are : {myItem.length}</h1>
        </div>
    );
};

export default MyCraftItem;