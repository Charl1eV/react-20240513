/* eslint-disable react/jsx-key */

export const Rating = ({ minRating, maxRating, form, dispatch }) => {
    const raitingButtons = [];
    for (let i = minRating; i <= maxRating; i++) {
        raitingButtons.push({ name: i });
    }

    return (
        <div>
            <span>Rating</span>
            <input
                type="number"
                min={minRating}
                max={maxRating}
                value={form.rating}
                readOnly={true}
            />
            <div>
                {raitingButtons.map(({ name }) =>
                    <button onClick={() => dispatch({ type: "setRating", payload: name })} disabled={form.rating === name}>{name}</button>
                )}
            </div>
        </div>
    )
};
