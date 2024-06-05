/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { useState } from "react";
import { Restaurant } from "../restaurant/component";
import { RestaurantTabs } from "../restaurant-tabs/component";

export const Restaurants = () => {
    const initialId = useSelector(state => state.restaurant.ids[0]);
    const [activeRestaurantId, setActiveRestaurantId] = useState(initialId);

    return (
        <div>
            <RestaurantTabs onTabClick={setActiveRestaurantId} activTabIndex={activeRestaurantId} />
            <Restaurant restaurantId={activeRestaurantId} />
        </div>
    )
};
