/* eslint-disable react/jsx-key */
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ restaurants, onTabClick, activTabIndex }) => {
    return (
        <div>
            {restaurants.map(({name}, index) => (
                <Tab onClick={() => onTabClick(index)} title={name} isActiv={activTabIndex === index} />
            ))}
        </div>
    )
};
