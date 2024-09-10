import { useData } from "../DataContext"; // Import the custom hook

export default function BuyButton({ buyHandler = null, buttonType }) {
    const data = useData(); // Access data from the context
    return (
        <div className="buy-wrapper">
            <button
                type={buttonType}
                onClick={buyHandler}
                className="buy__button"
            >
                {data.buyButtonText}
            </button>
        </div>
    );
}
