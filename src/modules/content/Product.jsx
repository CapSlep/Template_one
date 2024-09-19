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
        <section className="product__block">
            <div className="product__info container flex-row">
                <div className="product__title-block flex-row">
                    <div className="product__title-element flex-column">
                        <div className="product__name">
                            {product.productName}
                        </div>
                        <div className="product__stars">
                            <img src="./img/icons/star.svg" alt="" />
                            <img src="./img/icons/star.svg" alt="" />
                            <img src="./img/icons/star.svg" alt="" />
                            <img src="./img/icons/star.svg" alt="" />
                            <img src="./img/icons/star-half.svg" alt="" />
                            <div className="product__title-reviews-amount">
                                (90)
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__price-block flex-row">
                    <div className="price-new">{product.newPrice}</div>
                    <div className="price-old">{product.oldPrice}</div>
                </div>
            </div>

            <Slider slidesToShow={product.slider}></Slider>
            <Timer startTime={5} setsAmount={4}></Timer>
            <div className="product__info container">
                <div className="product__features">
                    <ul>
                        {data.productSection.productFeatures.map(
                            (feature, index) => {
                                return <li key={index}>{feature}</li>;
                            }
                        )}
                    </ul>
                </div>
                <div className="product__availability">
                    {data.productSection.productAvailabillity}
                </div>
                <div className="product__buy-reason">
                    {data.productSection.buyReasons.map((reason, index) => {
                        return <span key={index}>{reason}</span>;
                    })}
                </div>
            </div>
        </section>
    );
}
