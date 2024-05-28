/* eslint-disable react/jsx-key */

export const Tab = ({ title, onClick, isActiv }) => {
    return (
        <span>
            <button onClick={onClick} disabled={isActiv}>{title}</button>
        </span>
    )
};
