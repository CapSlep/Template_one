import Header from "./modules/Header";
import Product from "./modules/Product";
import Blog from "./modules/Blog";
import Reviews from "./modules/Reviews";
import Footer from "./modules/Footer";
import BuyButton from "./modules/BuyButton";
import Facebook from "./modules/Facebook";
import PopManager from "./modules/PopManager";

import { useData } from "./DataContext"; // Import the custom hook
import { useState } from "react";

export default function App() {
    const data = useData();

    let chosenProduct = data.products.product_1;
    const [product, setProduct] = useState(chosenProduct);

    function getUrl() {
        // Retrieve the macro from the button's data-attribute
        // const offerButton = document.querySelector(".checkout__button");
        // const redirectLink = offerButton.getAttribute("data-offer");

        let redirectLink = document.querySelector("#redirectLink").href;

        if (!redirectLink) {
            console.error("Offer link not found");
            return;
        }

        // Set parameters for redirection
        let adRedirectName = data.productName;
        let img_url = product.slider[0];

        // Send the fbq event
        fbq("track", "InitiateCheckout");

        // Check if the link already has parameters
        var separator = redirectLink.includes("?") ? "&" : "?";

        // Redirect with new parameters
        window.location.href =
            redirectLink +
            separator +
            "adRedirectName=" +
            encodeURIComponent(adRedirectName) +
            "&adRedirectImg=" +
            encodeURIComponent(img_url);
    }

    function buyHandler(event) {
        event.preventDefault();
        // Вызываем функцию getUrl для изменения URL и перенаправления
        getUrl();
    }

    // Define which popups you want to be available
    const popupsToShow = [
        "show_startup",
        // Add other popup types as needed
    ];

    return (
        <>
            <PopManager
                popupsToShow={popupsToShow}
                showStartup={true}
            ></PopManager>
            <Header></Header>
            <Product product={product} setProduct={setProduct}></Product>
            {/* <Blog></Blog> */}
            <Reviews></Reviews>
            <Footer></Footer>
            <Facebook></Facebook>
            <BuyButton buyHandler={buyHandler}></BuyButton>
        </>
    );
}
