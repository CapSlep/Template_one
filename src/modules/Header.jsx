import { useData } from "../DataContext"; // Import the custom hook

export default function Header({}) {
    const data = useData(); // Access data from the context
    return (
        <header>
            <div className="shipping-promo">{data.header.shippingText}</div>
            <nav>
                <a href="#" className="burger">
                    <svg
                        width="25"
                        height="18"
                        viewBox="0 0 22 14"
                        fill=""
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect y="6" width="22" height="2" rx="1"></rect>
                        <rect y="12" width="22" height="2" rx="1"></rect>
                        <rect width="22" height="2" rx="1"></rect>
                    </svg>
                </a>
                <div className="logo">
                    <img src="./img/header/logo.png" alt="LOGO" />
                </div>
                <div className="nav__component">
                    <a href="#" className="icon icon__search">
                        <img src="./img/header/search.svg" alt="Search" />
                    </a>
                    <a href="#" className="icon icon__heart">
                        <img src="./img/header/heart.svg" alt="Search" />
                    </a>
                    <a href="#" className="icon icon__cart">
                        <img src="./img/header/cart.svg" alt="Search" />
                    </a>
                </div>
            </nav>
        </header>
    );
}
