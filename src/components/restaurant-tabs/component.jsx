/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ onTabClick, activTabId }) => {
    const restaurants = useSelector((state) => state.restaurant.entities);
    return (
        <div>
            {Object.values(restaurants).map(({ name, id}) => (
                <Tab onClick={() => onTabClick(id)} title={name} isActiv={activTabId === id} />
            ))}
        </div>
    )
};
