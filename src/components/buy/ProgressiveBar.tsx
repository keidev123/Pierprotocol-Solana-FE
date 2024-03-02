import React, { useState, useRef, useCallback, FC } from "react";

const ProgressBar = ({ max, value, setValue, onChange }) => {
    // const [progress, setProgress] = useState(0);
    const progressBarRef = useRef(null);

    const getProgressFromMouseEvent = useCallback(
        (event) => {
            const progressBar = progressBarRef.current;
            const { left, width } = progressBar.getBoundingClientRect();
            const newProgress = Math.min(Math.max(0, event.clientX - left), width);
            return (newProgress / width) * max;
        },
        [max]
    );

    const handleMouseDown = (event) => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = useCallback(
        (event) => {
            let newProgress = getProgressFromMouseEvent(event);
            newProgress = Math.ceil(newProgress)
            setValue(newProgress);
            onChange(newProgress);
        },
        [getProgressFromMouseEvent, onChange]
    );

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    const width = (value / max) * 100 + "%";

    return (
        <div className="progress-bar" ref={progressBarRef}>
            <div className="progress-bar-filled" style={{ width }} />
            <div className="progress-bar-unfilled" style={{ width: (1 - (value / max)) * 100 + "%" }} />
            <div
                className="progress-bar-handle"
                style={{ left: width }}
                onMouseDown={handleMouseDown}
            />
        </div>
    );
}

export default ProgressBar;
