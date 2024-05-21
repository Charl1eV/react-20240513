/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
    const [restaurant, setRestaurant] = useState(!!restaurants?.length ? restaurants[0] : null);

    function cooseRestaurant(name)  {
        if (name !== restaurant.name) {
            setRestaurant(restaurants.find((restaurant) => restaurant.name === name));
        }
    };

    return (
        <div>
            {(restaurants || []).map((restaurant) => (
                <button onClick={() => cooseRestaurant(restaurant.name)}>{restaurant.name}</button>
            ))}
            <Restaurant restaurant={restaurant} />
            {/* {(restaurants || []).map((restaurant) => (
                <Restaurant restaurant={restaurant} />
            ))} */}
        </div>
    )
};
