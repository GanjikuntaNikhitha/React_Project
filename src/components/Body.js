import { restaurantList } from '../config';
import { RestaurantCard } from './RestaurantCard';
import React, { useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return filterData;
}

const RestaurantList = () => {
    // const searchText = "KFC"; variable in normal javascript
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <React.Fragment>
            <div className='search-container'>
                <input type="text" className='search-input' placeholder='Search for restaurant' value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} />
                <button className='search-btn' onClick={() => {
                    // filter the data
                    // update the state param restaurant.
                    const data = filterData(searchText, restaurants);
                    setRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaList">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
                    })
                }
            </div>
        </React.Fragment>
    );
}

const Body = () => {
    return (
        <RestaurantList />
    );
};

export default Body;