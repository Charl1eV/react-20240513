import { useSelector } from "react-redux";
import { Text } from "../text/component";

/* eslint-disable react/jsx-key */
export const Review = ({ reviewId }) => {
    const review = useSelector(state => state.review.entities[reviewId]);
    const user = useSelector(state => state.user.entities[review.userId])
    const { rating } = review;

    return (
        <div>
            <div>{user.name}</div>
            <div><Text text={review.text} /></div>
            <div>{rating}</div>
        </div>
    );
};
