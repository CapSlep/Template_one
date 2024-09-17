import { useEffect, useState } from "react";
import { useData } from "../../DataContext";

export default function Notifications({ product }) {
    const [currentNotification, setCurrentNotification] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const data = useData();

    useEffect(() => {
        const showNextNotification = () => {
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
                if (currentNotification < data.notifications.length - 1) {
                    setTimeout(() => {
                        setCurrentNotification((prev) => prev + 1);
                    }, 5000); // Delay before showing the next notification
                }
            }, 5000); // Time notification is visible
        };

        const timer = setTimeout(showNextNotification, 5000); // Initial delay before showing the first notification

        return () => clearTimeout(timer);
    }, [currentNotification]);

    function closeNotification() {
        setIsVisible(false);
    }

    return (
        <div
            className={`notification__wrapper flex-row ${
                isVisible ? "notification__shown" : "notification__hidden"
            }`}
        >
            <div className="notification__img-wrapper">
                <img src={product.productImage} alt="Product" loading="lazy" />
            </div>
            <div className="notification__panel flex-column">
                <div className="notification__header flex-row">
                    <span className="notification__text-small">
                        {data.notifications[currentNotification].name}
                    </span>
                    <span className="notification__text-small">
                        {data.notifications[currentNotification].from}
                    </span>
                    <span className="notification__location">
                        {data.notifications[currentNotification].location}
                    </span>
                </div>
                <div className="notification__footer flex-row">
                    <span className="notification__message">
                        {data.notifications[currentNotification].text}{" "}
                        <b>{product.newPrice}!</b>
                    </span>
                </div>
            </div>
            <button onClick={closeNotification} className="notification__close">
                X
            </button>
        </div>
    );
}
