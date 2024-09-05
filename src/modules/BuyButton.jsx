import { useData } from "../DataContext"; // Import the custom hook

export default function BuyButton({ buyHandler }) {
    const data = useData(); // Access data from the context
    return (
        <div className="buy-wrapper">
            <button
                onClick={buyHandler}
                className="buy__button"
                data-offer="{offer}" // Store the macro here
            >
                {data.buyButtonText}
            </button>
        </div>
    );
}
