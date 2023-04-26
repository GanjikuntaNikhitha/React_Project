import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurntMent = () => {
    const params = useParams();
    const [restaurantMenuData, setrestaurantMenuData] = useState({});

    useEffect(()=>{
        getRestaurentsInfo();
    }, []);

    async function getRestaurentsInfo(){
        let restaurantMenu = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.7542132&lng=78.53485069999999&restaurantId=${params.id}&submitAction=ENTER`;
        const data = await fetch(restaurantMenu);
        const json = await data.json();
        setrestaurantMenuData(json.data.cards[0].card.card.info);
    }
    return (
        <div className="restaCard">
            <h1>Restaurant id : {params.id}</h1>
            <h2>{restaurantMenuData.name}</h2>
            <img src={IMG_CDN_URL + restaurantMenuData.cloudinaryImageId}></img>
            <h3>{restaurantMenuData.areaName}</h3>
            <h3>{restaurantMenuData.city}</h3>
            <h3 className="card-rating">{restaurantMenuData.avgRating}</h3>
            <h3>{restaurantMenuData.costForTwoMessage}</h3>
            <h3>{restaurantMenuData.cuisines?.join(", ")}</h3>
        </div>
    )
}

export default RestaurntMent;