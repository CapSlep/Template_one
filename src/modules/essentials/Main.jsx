import Product from "../content/Product";
import Blog from "../content/Blog";
import Reviews from "../content/Reviews";
import Description from "../content/Description";
import BuyButton from "../utilities/BuyButton";

export default function Main({ product, setProduct, buyHandler }) {
    return (
        <main className="main__wrapper">
            <Product product={product} setProduct={setProduct}></Product>
            <Description></Description>
            <Reviews></Reviews>
            <BuyButton buyHandler={buyHandler}></BuyButton>
        </main>
    );
}
