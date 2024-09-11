import { useData } from "../../DataContext"; // Import the custom hook

export default function PromoPop({ onClose }) {
    const data = useData(); // Access data from the context
    return (
        <div className="popup popup__container startup__pop">
            <button className="popup__button-close" onClick={onClose}>
                X
            </button>
            <div className="startup__pop-img-wrapper">
                <img src="./img/popups/startupPop.jpg" alt="" />
            </div>
            <p className="startup__pop-text">{data.startupPopText}</p>
            <button className="startup__accept" onClick={onClose}>
                {data.startupPopButton}
            </button>
        </div>
    );
}
