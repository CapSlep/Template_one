//Essential imports
import Header from "./modules/essentials/Header";
import Footer from "./modules/essentials/Footer";
import Facebook from "./modules/utilities/Facebook";
import Checkout from "./modules/Checkout";
import Main from "./modules/essentials/Main";

//popups imports
import PopManager from "./modules/popups/PopManager";
import StartupPop from "./modules/popups/StartupPop";
import PromoPop from "./modules/popups/PromoPop";

//Hooks
import { useData } from "./DataContext";
import { useState, useEffect } from "react";

export default function App() {
    const data = useData();

    const [product, setProduct] = useState(data.products[0]);
    const [openCheckout, setOpenCheckout] = useState(false);

    const useForm = true;

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

        let adRedirectName = product.productName;
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

    function sendWithoutForm() {
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
        let adRedirectName = product.productName;

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
        if (useForm) {
            setOpenCheckout(true);
        } else {
            sendWithoutForm();
        }
    }

    function formSubmit(event) {
        event.preventDefault();
        sendForm();
    }

    const popupsHolder = {
        popupTypes: {
            SHOW_STARTUP: "startup",
            SHOW_PROMO: "promo",
        },
        popups: [
            {
                popupType: "startup",
                popupComponent: StartupPop,
            },
            {
                popupType: "promo",
                popupComponent: PromoPop,
            },
        ],
    };

    useEffect(() => {
        document.title = product.productName;
    }, []);

    return (
        <>
            <Header></Header>

            {openCheckout ? (
                <Checkout
                    product={product}
                    formSendHandler={formSubmit}
                ></Checkout>
            ) : (
                <Main
                    product={product}
                    setProduct={setProduct}
                    buyHandler={buyHandler}
                />
            )}

            <Footer></Footer>

            <Facebook></Facebook>
            <PopManager
                popupTypes={popupsHolder.popupTypes}
                popupsToShow={popupsHolder.popups}
                showStartup={true}
            ></PopManager>
            <img
                id="selectedProductPath"
                src={product.productImage}
                style={{ display: "none" }}
            />
        </>
    );
}
