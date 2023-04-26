import { RestaurantCard } from './RestaurantCard';
import React, { useEffect, useState } from "react";
import { GET_RES_API_URL } from '../config'; /* url to get Restaurant data */
import Shimmer from './shimmer';

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return filterData;
}

const RestaurantList = () => {
    // const searchText = "KFC"; variable in normal javascript
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const response = await fetch(GET_RES_API_URL);
        const res_data = await response.json();
        setRestaurants(res_data?.data?.cards[0]?.data?.data?.cards);
        setFilteredRestaurants(res_data?.data?.cards[0]?.data?.data?.cards);
    };
    
    // not render component (Early return)
    if (!restaurants) return null;
    
    // if (filteredRestaurants?.length === 0) return <h1>No Restraunt match your Filter!!</h1>;
    return (restaurants?.length === 0) ? (<Shimmer />) : (
        <>
            <div className='search-container'>
                <input type="text" className='search-input' placeholder='Search for restaurant' value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} />
                <button className='search-btn' onClick={() => {
                    // filter the data
                    // update the state param restaurant.
                    const data = filterData(searchText, restaurants);
                    if (data.length === 0) { <h1>No Matches found!!</h1> }
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaList">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
                    })
                }
            </div>
        </>
    );
}

const Body = () => {
    return (
        <RestaurantList />
    );
};

export default Body;