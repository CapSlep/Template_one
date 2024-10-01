//Essential imports
import Header from "./modules/essentials/Header";
import Footer from "./modules/essentials/Footer";
import Facebook from "./modules/utilities/Facebook";
import Checkout from "./modules/Checkout";
import Main from "./modules/essentials/Main";
import Notifications from "./modules/utilities/Notifications";
import Loader from "./modules/utilities/Loader";

//popups imports
import PopManager from "./modules/popups/PopManager";
import StartupPop from "./modules/popups/StartupPop";
import PromoPop from "./modules/popups/PromoPop";

//Hooks
import { useData } from "./DataContext";
import { useState, useEffect } from "react";

const statsEndpoint = "https://zaim.cc/api/postback/keitaro_prefill/";

const useForm = true;

function getSubid() {
    const subidElement = document.getElementById("userSubid");
    const subid = subidElement ? subidElement.getAttribute("data-subid") : null;

    return subid;
}

// Function to send information using a non-blocking AJAX request
function sendInfo(data) {
    // Log the data to the console for debugging
    console.log("Data being sent:", data);

    // Use the fetch API to send the request
    fetch(statsEndpoint, {
        // Replace with your endpoint
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            // Check if the response status is not in the 200 range
            if (!response.ok) {
                // Convert response to JSON to inspect error details
                return response.json().then((errorDetails) => {
                    throw new Error(
                        `Server responded with status: ${response.status} - ${
                            errorDetails.message || "Unknown error"
                        }`
                    );
                });
            }
        })
        .catch((error) => {
            // Log detailed error message
            console.error("Failed to send info:", error.message);
        });

    // Do not wait for the response, proceed with the redirect or other actions
}

export default function App() {
    const data = useData();

    const [product, setProduct] = useState(data.products[0]);
    const [openCheckout, setOpenCheckout] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

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

        const phoneNumber = phone.replace(/\s+/g, "");

        const postData = {
            subid: getSubid(),
            first_name: firstName,
            last_name: lastName,
            phone_number: codeCountry + phoneNumber,
            email: email,
            locale: data.checkout.countryCode,
        };
        sendInfo(postData);

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

        const postData = {
            subid: getSubid(),
        };

        // sendInfo(postData);

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
            setShowLoader(true);
        }
    }

    function formSubmit(event) {
        event.preventDefault();
        sendForm();
        setShowLoader(true);
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
            {showLoader ? (
                <Loader></Loader>
            ) : (
                <>
                    <Header></Header>

                    {openCheckout ? (
                        <Checkout
                            product={product}
                            formSendHandler={formSubmit}
                        />
                    ) : (
                        <Main
                            product={product}
                            setProduct={setProduct}
                            buyHandler={buyHandler}
                        />
                    )}
                    <Footer></Footer>
                </>
            )}

            <Notifications product={product}></Notifications>
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
