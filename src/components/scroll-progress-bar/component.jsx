/* eslint-disable react/jsx-key */
import { useState } from "react";
import './style.css';

export const ScrollProgressBar = () => {
    const [width, setWidth] = useState(0);

    function setScrollWidth() {
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        setWidth((scrollTop / (scrollHeight - clientHeight)) * 100);
    };

    window.addEventListener("scroll", setScrollWidth);

    return <div class="scrollProgressBar" style={{ width: `${width}%` }}></div>
};
