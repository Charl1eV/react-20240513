import { Text } from "../text/component";

/* eslint-disable react/jsx-key */
export const Review = ({ review }) => {
    return (
        <span><Text text={review.text} /></span>
    );
};
