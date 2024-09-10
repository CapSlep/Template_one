import Header from "./modules/Header";
import Product from "./modules/Product";
import Blog from "./modules/Blog";
import Reviews from "./modules/Reviews";
import Footer from "./modules/Footer";
import BuyButton from "./modules/BuyButton";
import Facebook from "./modules/Facebook";
import PopManager from "./modules/PopManager";
import Description from "./modules/Description";
import Checkout from "./modules/Checkout";

import { useData } from "./DataContext"; // Import the custom hook
import { useState, useEffect } from "react";

export default function App() {
    const data = useData();

    let chosenProduct = data.products.product_1;
    const [product, setProduct] = useState(chosenProduct);
    const [openCheckout, setOpenCheckout] = useState(false);

    function sendForm() {
        console.log("submit");

        let codeCountry = data.checkout.countryPhone;

        // Add your custom JavaScript code here to execute when the form is submitted successfully
        // For example:
        fbq("track", "InitiateCheckout");
        console.log("Form submitted successfully!");

        // Get values from input fields
        var firstName = document.getElementById("nameField").value;
        var lastName = document.getElementById("familyField").value;
        var address = document.getElementById("addressField").value;
        var zip = document.getElementById("zipField").value;
        var city = document.getElementById("cityField").value;
        var phone = document.getElementById("phoneField").value;
        var email = document.getElementById("emailField").value;

        let adRedirectName = data.productName;
        let adRedirectImg = document.querySelector("#selectedProductPath").src;

        // Get country code

        // Get the redirect link
        let redirectLink = document.querySelector("#redirectLink").href;

        // Check if the redirect link already has parameters
        var separator = redirectLink.includes("?") ? "&" : "?";

        // Construct the redirect link with form values as parameters
        var constructedLink =
            redirectLink +
            separator +
            "codeCountry=" +
            encodeURIComponent(codeCountry) +
            "&firstName=" +
            encodeURIComponent(firstName) +
            "&lastName=" +
            encodeURIComponent(lastName) +
            "&phone=" +
            encodeURIComponent(phone) +
            "&address=" +
            encodeURIComponent(address) +
            "&zip=" +
            encodeURIComponent(zip) +
            "&email=" +
            encodeURIComponent(email) +
            "&adRedirectName=" +
            encodeURIComponent(adRedirectName) +
            "&city=" +
            encodeURIComponent(city) +
            "&adRedirectImg=" +
            encodeURIComponent(adRedirectImg);

        console.log(constructedLink);

        let arr = [
            ["nameField", firstName],
            ["familyField", lastName],
            ["addressField", address],
            ["zipField", zip],
            ["phoneField", phone],
            ["cityField", city],
            ["emailField", email],
        ];

        window.location.href = constructedLink;

        console.log("Form submitted successfully!", constructedLink);
    }

    function getUrl() {
        // Retrieve the macro from the button's data-attribute
        // const offerButton = document.querySelector(".checkout__button");
        // const redirectLink = offerButton.getAttribute("data-offer");

        let redirectLink = document.querySelector("#redirectLink").href;
        let selectedProductPath = document.querySelector(
            "#selectedProductPath"
        ).src;

        if (!redirectLink) {
            console.error("Offer link not found");
            return;
        }

        // Set parameters for redirection
        let adRedirectName = data.productName;

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
            encodeURIComponent(selectedProductPath);
    }

    function buyHandler(event) {
        event.preventDefault();
        setOpenCheckout(true);
    }

    function formSubmit(event) {
        event.preventDefault();
        sendForm();
    }

    // Define which popups you want to be available
    const popupsToShow = [
        "show_startup",
        // Add other popup types as needed
    ];

    useEffect(() => {
        document.title = data.productName;
    }, []);

    return (
        <>
            <img
                id="selectedProductPath"
                src={product.slider[0]}
                style={{ display: "none" }}
            />
            <PopManager
                popupsToShow={popupsToShow}
                showStartup={true}
            ></PopManager>
            <Header></Header>

            {openCheckout ? (
                <Checkout
                    product={product}
                    formSendHandler={formSubmit}
                ></Checkout>
            ) : (
                <>
                    <Product
                        product={product}
                        setProduct={setProduct}
                    ></Product>
                    <Description></Description>
                    <Reviews></Reviews>
                    <BuyButton
                        buyHandler={buyHandler}
                        buttonType={"button"}
                    ></BuyButton>
                </>
            )}

            <Footer></Footer>
            <Facebook></Facebook>
        </>
    );
}
