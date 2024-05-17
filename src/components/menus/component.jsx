import { Menu } from "../menu/component";

/* eslint-disable react/jsx-key */
export const Menus = ({ menus }) => {
    return (
      <div>
        <ul>
        {menus.map((menu) => (
        <li>
          <Menu menu={menu} />
        </li>
      ))}
        </ul>
      </div>
    );
  };
  