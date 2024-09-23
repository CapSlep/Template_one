import { useData } from "../../DataContext"; // Import the custom hook

export default function Header({}) {
    const data = useData(); // Access data from the context
    return (
        <header>
            <div className="shipping-promo">{data.header.shippingText}</div>
            <nav>
                {/* <a href="#" className="icon burger">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="header__icon-svg"
                    >
                        <path d="M3.75 5.25h16.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zm0 6h16.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5zm0 6h16.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5z"></path>
                    </svg>
                </a> */}
                <div className="logo">
                    <img src="./img/header/logo.svg" alt="LOGO" />
                    {/* <span>.com.mx</span> */}
                </div>
                <div className="nav__component">
                    <a href="#" className="icon icon__profile">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="header__icon-svg"
                        >
                            <path d="M12 12a5.25 5.25 0 1 1 0-10.5A5.25 5.25 0 0 1 12 12zm0-1.5A3.75 3.75 0 1 0 12 3a3.75 3.75 0 0 0 0 7.5zm-8.047 4.482C6.63 13.995 9.314 13.5 12 13.5c2.686 0 5.37.495 8.047 1.482A3.75 3.75 0 0 1 22.5 18.5v3.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V18.5c0-1.57.98-2.975 2.453-3.518zM21 18.5a2.25 2.25 0 0 0-1.472-2.11C17.014 15.461 14.506 15 12 15c-2.506 0-5.014.462-7.528 1.39A2.25 2.25 0 0 0 3 18.5V21h18v-2.5z"></path>
                        </svg>
                    </a>
                    <a href="#" className="icon icon__heart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="header__icon-svg"
                        >
                            <path d="M21.6 5.55l.07.115c2.73 5.458-.506 10.582-9.32 15.248a.75.75 0 0 1-.7 0C2.835 16.247-.4 11.123 2.33 5.665l.073-.119C4.83 2.351 8.86 2.182 12.006 4.97c3.221-2.796 7.185-2.625 9.594.58zm-1.24.847c-1.968-2.56-5.154-2.542-7.83.133a.75.75 0 0 1-1.068-.007C8.88 3.866 5.628 3.843 3.64 6.399c-2.182 4.453.483 8.748 8.36 13 7.878-4.253 10.543-8.548 8.36-13.002z"></path>
                        </svg>
                    </a>
                    <a href="#" className="icon icon__cart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="header__icon-svg"
                        >
                            <path d="M6.229 4.5H21.75a.75.75 0 0 1 .735.897l-1.5 7.5a.75.75 0 0 1-.735.603H7.129l.3 3H18.75a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.746-.675L4.57 3H2.25a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .746.675L6.23 4.5zm.15 1.5l.6 6h12.656l1.2-6H6.38zM7.5 22.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm10.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                        </svg>
                        <span className="icon__cart-number">1</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}
