import React, { useEffect, useState, useRef } from "react";
import { useData } from "../DataContext"; // Import the custom hook

export default function Timer({ startTime = 1, setsAmount = 1 }) {
    const [timeLeft, setTimeLeft] = useState(startTime * 60);
    const [isVisible, setIsVisible] = useState(false);
    const timerRef = useRef(null);
    const data = useData(); // Access data from the context

    useEffect(() => {
        // Set up the Intersection Observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when at least 10% of the element is visible
        );

        if (timerRef.current) {
            observer.observe(timerRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (timerRef.current) {
                observer.unobserve(timerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let timerId;
        if (isVisible && timeLeft > 0) {
            timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (!isVisible) {
            // Pause the timer when not visible
            clearInterval(timerId);
        }

        // Cleanup the interval when the component unmounts or dependencies change
        return () => clearInterval(timerId);
    }, [isVisible, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="timer container flex-column" ref={timerRef}>
            <p className="timer__countdown">{formatTime(timeLeft)}</p>
            <p className="timer__text-promo">
                {data.timer.timerText} ({setsAmount}) {data.timer.timerSets}
            </p>
        </div>
    );
}
