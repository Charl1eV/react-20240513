/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ onTabClick, activTabId }) => {
    const restaurantIds = useSelector((state) => state.restaurant.ids);

    return (
        <div>
            {restaurantIds.map((id) => (
                <Tab id={id} onClick={() => onTabClick(id)} isActiv={activTabId === id} />
            ))}
        </div>
    )
};
