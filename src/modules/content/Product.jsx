import { useData } from "../../DataContext"; // Import the custom hook
import Slider from "../utilities/Slider";
import Timer from "../utilities/Timer";

export default function Product({ product, setProduct }) {
    const data = useData(); // Access data from the context

    function handleProductSelection(selectedName) {
        const filteredProducts = Object.values(data.products).filter(
            (product) => {
                return product.sliderName === selectedName;
            }
        );

        setProduct(filteredProducts[0]); // Assuming you want to set the first match
    }

    return (
        <section className="product__block flex-column container">
            <div className="product__info flex-column">
                <div className="product__title-block flex-row">
                    <div className="product__title-element flex-column">
                        <h1 className="product__name">{data.pageTitle}</h1>
                        <span className="product__name-under">
                            {data.productSection.underHeader}
                        </span>
                        <div className="product__tile-icons flex-row">
                            <div className="product__tile-icon">
                                <img
                                    src="./img/productSection/icon-1.svg"
                                    alt=""
                                />
                            </div>
                            <div className="product__tile-icon">
                                <img
                                    src="./img/productSection/icon-2.svg"
                                    alt=""
                                />
                            </div>
                            <div className="product__tile-icon">
                                <img
                                    src="./img/productSection/icon-3.svg"
                                    alt=""
                                />
                            </div>
                            <div className="product__tile-icon">
                                <img
                                    src="./img/productSection/icon-4.svg"
                                    alt=""
                                />
                            </div>
                            <div className="product__tile-icon">
                                <img
                                    src="./img/productSection/icon-5.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__price-block flex-row">
                    <div className="price-new">{product.newPrice}</div>
                    <b className="product__price-monthes">
                        {data.productSection.priceMonthes}
                    </b>
                    <span className="product__price-zones">
                        {data.productSection.priceMonthesZones}
                    </span>
                </div>
            </div>

            <div className="product__info flex-column">
                <div className="product__features">
                    <ul>
                        {data.productSection.productFeatures.map(
                            (feature, index) => {
                                return (
                                    <li key={index}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="#1972d2"
                                            viewBox="0 0 20 20"
                                        >
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="10"
                                                fill="#deeeff"
                                            ></circle>
                                            <path
                                                fill="1972d2"
                                                fillRule="evenodd"
                                                d="M15.4 7.9c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-6 5.9-2-1.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.7 2.6c.4.4 1 .4 1.4 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        {feature}
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>

                <div className="stars__box flex-column">
                    <div className="product__stars">
                        <img src="./img/icons/star.svg" alt="" />
                        <img src="./img/icons/star.svg" alt="" />
                        <img src="./img/icons/star.svg" alt="" />
                        <img src="./img/icons/star.svg" alt="" />
                        <img src="./img/icons/star.svg" alt="" />
                        <div className="product__stars-text">4.9 / 5</div>
                    </div>
                    <div className="product__title-reviews-amount">
                        (2635 {data.reviewsHeader})
                    </div>
                </div>
                <div className="product__availability flex-row">
                    <div className="product__availability-img">
                        <img src="./img/productSection/img-1.jpg" alt="" />
                    </div>
                    <span>{data.productSection.productBenef}</span>
                </div>
            </div>
        </section>
    );
}
