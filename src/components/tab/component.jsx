/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Button } from "../button/component";

export const Tab = ({ id, onClick, isActiv }) => {
    const { name } = useSelector((state) => state.restaurant.entities[id]);
    return (
        <span>
            <Button onClick={onClick} disabled={isActiv}>{name}</Button>
        </span>
    )
};
