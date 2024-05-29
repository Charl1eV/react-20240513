/* eslint-disable react/jsx-key */
import { useReducer } from "react";
import { Rating } from "../raiting/component";

const MIN_RAITING = 1;
const MAX_RAITING = 5;
const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    address: "",
    rating: MAX_RAITING,
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
            <Rating minRating={MIN_RAITING} maxRating={MAX_RAITING} form={form} dispatch={dispatch} />
            <div>
                <button onClick={() => dispatch({ type: "onSave"})}>Сохранить</button>
            </div>
        </div>
    );
};
