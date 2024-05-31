/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import './style.css';

export const ScrollProgressBar = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const setScrollWidth = () => {
            const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
            setWidth((scrollTop / (scrollHeight - clientHeight)) * 100);
        };
    
        window.addEventListener("scroll", setScrollWidth);
        return () => {
            window.removeEventListener("scroll", setScrollWidth);
        }
    }, []);

    return <div className="scrollProgressBar" style={{ width: `${width}%` }}></div>
};
