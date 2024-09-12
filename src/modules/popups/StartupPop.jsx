import { useData } from "../../DataContext"; // Import the custom hook

export default function StartupPop({ onClose }) {
    const data = useData(); // Access data from the context
    return (
        <div className="popup popup__container startup__pop">
            <button className="popup__button-close" onClick={onClose}>
                X
            </button>
            <div className="startup__pop-img-wrapper">
                <img src="./img/popups/startup-pop.png" alt="" />
            </div>
            <p className="startup__pop-text">{data.startupPopText}</p>
            <p className="startup__pop-text">{data.startupPopTextSecondPart}</p>
            <button className="startup__accept" onClick={onClose}>
                {data.startupPopButton}
            </button>
        </div>
    );
}
