import { Name } from "../name/component";

/* eslint-disable react/jsx-key */
export const Menu = ({ menu }) => {
    return (
        <span><Name name={menu.name} /></span>
    );
};
