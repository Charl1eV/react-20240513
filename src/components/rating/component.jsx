/* eslint-disable react/jsx-key */

export const Rating = ({ min, max, rating, dispatch }) => {

    return (
        <div>
            <span>Rating</span>
            <input
                type="number"
                min={min}
                max={max}
                value={rating}
                readOnly={true}
            />
            <div>
                {[...new Array(max)].map((item, index) =>
                    <button onClick={() => dispatch({ type: "setRating", payload: index + 1 })} disabled={rating === index + 1}>{index + 1}</button>
                )}
            </div>
        </div>
    )
};
