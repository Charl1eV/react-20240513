/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Restaurant } from "../restaurant/component";
import { RestaurantTabs } from "../restaurant-tabs/component";

export const Restaurants = ({ restaurants }) => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    if (!restaurants) {
        return <div>No Restaurants</div>;
    }

    return (
        <div>
            <RestaurantTabs restaurants={restaurants} onTabClick={setActiveRestaurantIndex} activTabIndex={activeRestaurantIndex} />
            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
    )
};
