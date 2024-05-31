/* eslint-disable react/jsx-key */
import { useReducer } from "react";
import { Rating } from "../rating/component";

const MIN_RATING = 1;
const MAX_RATING = 5;
const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    address: "",
    rating: MAX_RATING,
};

function reducer(state, { type, payload } = {}) {
    switch (type) {
        case "setName":
            return { ...DEFAULT_FORM_VALUE, name: payload };
        case "setText":
            return { ...state, text: payload };
        case "setRating":
            return { ...state, rating: payload };
        case "onSave":
            return { ...DEFAULT_FORM_VALUE };
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    return (
        <div>
            <div>
                <span>Name</span>
                <input
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                        dispatch({ type: "setName", payload: event.target.value })
                    }
                />
            </div>
            <div>
                <span>Text</span>
                <input
                    type="text"
                    value={form.text}
                    onChange={(event) =>
                        dispatch({ type: "setText", payload: event.target.value })
                    }
                />
            </div>
            <Rating max={MAX_RATING} value={form.rating} onButtonClick={(index) => dispatch({ type: "setRating", payload: index + 1 })} />
            <div>
                <button onClick={() => dispatch({ type: "onSave"})}>Сохранить</button>
            </div>
        </div>
    );
};
