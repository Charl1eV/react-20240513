/* eslint-disable react/jsx-key */
import { Button } from "../button/component";

export const Tab = ({ title, onClick, isActiv }) => {
    return (
        <span>
            <Button onClick={onClick} disabled={isActiv}>{title}</Button>
        </span>
    )
};
