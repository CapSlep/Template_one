import { useData } from "../DataContext"; // Import the custom hook
import Timer from "./utilities/Timer";
import BuyButton from "./utilities/BuyButton";

export default function Checkout({ product, formSendHandler }) {
    const data = useData(); // Access data from the context
    return (
        <div className="checkout container">
            <Timer startTime={2} setsAmount={2}></Timer>
            <form className="checkout__form" onSubmit={formSendHandler}>
                <div className="checkout__main">
                    <div className="checkout__header">
                        <div className="checkout__image">
                            <img
                                src={product?.productImage}
                                alt="Product Image"
                            />
                        </div>
                        <div className="checkout__header-details">
                            <div className="checkout__header-name">
                                {product?.productName}
                            </div>
                            <div className="checkout__header-price ">
                                <span className="price-new">
                                    {product?.newPrice}
                                </span>
                                <span className="price-old">
                                    {product?.oldPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                    <fieldset className="checkout__fieldset">
                        <h3 className="checkout__fieldset-header">
                            {data.checkout.delivery.title}
                        </h3>
                        <div className="form-group">
                            <label
                                id="cityFieldLabel"
                                className="form-control-label"
                                htmlFor="cityField"
                            >
                                {data.checkout.delivery.city}
                            </label>
                            <input
                                id="cityField"
                                type="text"
                                className="form-control"
                                name="city"
                                required
                            ></input>
                        </div>

                        <div className="form-group">
                            <label
                                id="addressFieldLabel"
                                className="form-control-label"
                                htmlFor="addressField"
                            >
                                {data.checkout.delivery.address}
                            </label>
                            <input
                                id="addressField"
                                type="text"
                                className="form-control"
                                name="address"
                                required
                            ></input>
                        </div>

                        <div className="form-group">
                            <label
                                id="zipFieldLabel"
                                className="form-control-label"
                                htmlFor="zipField"
                            >
                                {data.checkout.delivery.postcode}
                            </label>
                            <input
                                id="zipField"
                                type="text"
                                className="form-control"
                                name="zip"
                                required
                            ></input>
                        </div>
                    </fieldset>

                    <fieldset className="checkout__fieldset">
                        <h3 className="checkout__fieldset-header">
                            {data.checkout.info.title}
                        </h3>

                        <div className="form-group">
                            <label
                                id="nameFieldLabel"
                                className="form-control-label"
                                htmlFor="nameField"
                            >
                                {data.checkout.info.firstName}
                            </label>
                            <input
                                id="nameField"
                                type="text"
                                className="form-control"
                                name="name"
                                required
                            ></input>
                        </div>

                        <div className="form-group">
                            <label
                                id="familyFieldLabel"
                                className="form-control-label"
                                htmlFor="familyField"
                            >
                                {data.checkout.info.lastName}
                            </label>
                            <input
                                id="familyField"
                                type="text"
                                className="form-control"
                                name="family"
                                required
                            ></input>
                        </div>

                        <div className="form-group">
                            <label
                                id="phoneFieldLabel"
                                className="form-control-label"
                                htmlFor="phoneField"
                            >
                                {data.checkout.info.phone}
                            </label>
                            <div className="form__phone-wrapper">
                                <div className="form__phone-flag-wrapper">
                                    <div
                                        className={`form__phone-flag iti__flag iti__${data.checkout.countryCode}`}
                                    ></div>
                                    <div className="form__phone-dial-code">
                                        +{data.checkout.countryPhone}
                                    </div>
                                </div>
                                <input
                                    id="phoneField"
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    required
                                ></input>
                            </div>
                        </div>

                        <div className="form-group">
                            <label
                                id="emailFieldLabel"
                                className="form-control-label"
                                htmlFor="emailField"
                            >
                                {data.checkout.info.email}
                            </label>
                            <input
                                id="emailField"
                                type="email"
                                className="form-control"
                                name="email"
                                required
                            ></input>
                        </div>
                    </fieldset>
                </div>
                <div className="checkout__fieldset checkout__payment">
                    <h3 className="checkout__fieldset-header">
                        {data.checkout.payment.title}
                    </h3>
                    <div className="form-check">
                        <input
                            name="online_pay"
                            type="radio"
                            className="shipping-method-checkbox"
                            value="001"
                        ></input>
                        <label className="shipping-method-option">
                            <span
                                id="paymentMethodLabel"
                                className="form-control-label"
                            >
                                {data.checkout.payment.text}
                            </span>
                        </label>
                    </div>
                </div>
                <div className="chekout__summary checkout__fieldset ">
                    <h3 className="checkout__fieldset-header">
                        {data.checkout.summary.title}
                    </h3>
                    <div className="checkout__summary-card">
                        <div className="checkout__summary-item">
                            <span className="checkout__summary-item-name">
                                {data.checkout.summary.deliveryTime}
                            </span>
                            <span className="checkout__summary-item-value">
                                {data.checkout.summary.deliveryDays}
                            </span>
                        </div>
                        <div className="checkout__summary-item">
                            <span className="checkout__summary-item-name">
                                {data.checkout.summary.subtotal}
                            </span>
                            <span className="checkout__summary-item-value">
                                {data.newPrice}
                            </span>
                        </div>
                        <div className="checkout__summary-item">
                            <span className="checkout__summary-item-name">
                                {data.checkout.summary.deliveryAmountTitle}
                            </span>
                            <span className="checkout__summary-item-value">
                                {data.zeroPrice}
                            </span>
                        </div>
                        <div className="checkout__summary-item">
                            <span className="checkout__summary-item-name">
                                {data.checkout.summary.total}
                            </span>
                            <span className="checkout__summary-item-value">
                                {data.newPrice}
                            </span>
                        </div>
                    </div>
                </div>

                <BuyButton buttonType={"submit"}></BuyButton>
            </form>
        </div>
    );
}
