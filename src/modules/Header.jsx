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
                    {/* <img src="./img/header/logo.svg" alt="LOGO" /> */}
                    <svg focusable="false" viewBox="0 0 1134 445">
                        <path
                            fill="inherit"
                            d="M602.208 334.405C642.677 334.405 670.541 307.407 670.541 268.835C670.541 230.264 642.677 203.264 602.208 203.264C561.737 203.264 533.873 230.264 533.873 268.835C533.873 307.407 561.737 334.405 602.208 334.405ZM602.208 93.3373C745.403 93.3373 800.136 186.551 800.136 268.835C800.136 358.835 737.129 444.333 603.48 444.333C460.285 444.333 404.279 351.763 404.279 268.835C404.279 181.407 463.467 93.3373 602.208 93.3373Z"
                        ></path>
                        <path
                            fill="inherit"
                            d="M826.429 0.00528719H955.889V438.429H826.429V0.00528719Z"
                        ></path>
                        <path
                            fill="inherit"
                            d="M1133.86 365.353C1133.86 321.733 1098.5 286.372 1054.88 286.372C1011.26 286.372 975.897 321.733 975.897 365.353C975.897 408.972 1011.26 444.333 1054.88 444.333C1098.5 444.333 1133.86 408.972 1133.86 365.353Z"
                        ></path>
                        <path
                            fill="inherit"
                            d="M129.459 329.649C146.852 332.903 166.191 334.288 179.073 334.288C226.097 334.288 257.017 308.408 257.017 268.717C257.017 229.677 226.741 203.147 182.939 203.147C166.835 203.147 147.496 205.372 129.459 211.228V329.649ZM0 0.00528719H129.459V107.361C154.916 97.7186 181.197 93.2186 208.564 93.2186C310.392 93.2186 384.217 167.789 384.217 270.003C384.217 347.144 331.393 438.429 211.109 438.429H0V0.00528719Z"
                        ></path>
                    </svg>
                </div>
                <div className="nav__component">
                    <a href="#" className="icon icon__search">
                        <img src="./img/header/search.svg" alt="Search" />
                    </a>
                    {/* <a href="#" className="icon icon__heart">
                        <img src="./img/header/heart.svg" alt="Search" />
                    </a> */}
                    <a href="#" className="icon icon__cart">
                        <img src="./img/header/cart.svg" alt="Search" />
                    </a>
                </div>
            </nav>
        </header>
    );
}
