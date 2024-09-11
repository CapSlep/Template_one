import React, { useEffect, useState, useRef } from "react";
import { useData } from "../../DataContext"; // Import the custom hook

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
        return {
            minutes: mins < 10 ? `0${mins}` : mins,
            seconds: secs < 10 ? `0${secs}` : secs,
        };
    };

    const { minutes, seconds } = formatTime(timeLeft);

    return (
        <div className="timer flex-column" ref={timerRef}>
            <p className="timer__text-promo timer__text-strong">
                {data.timer.timerSetsStart} {startTime}{" "}
                {data.timer.timerSetsEnd}
            </p>
            <p className="timer__countdown flex-row">
                <span className="timer__minutes">{minutes}</span>
                <span className="timer__colon">:</span>
                <span className="timer__seconds">{seconds}</span>
            </p>
        </div>
    );
}
