import { useData } from "../../DataContext"; // Import the custom hook

export default function Footer() {
    const data = useData(); // Access data from the context
    return (
        <footer className="footer container">
            <div className="footer__logo-wrapper">
                <img src="./img/footer-logo.webp" alt="" />
            </div>
            {/* <div className="footer__text-box flex-row">
                <div className="footer__harlan">
                    <img src="./img/harman-logo.svg" alt="" />
                </div>
                <span className="footer__text">{data.footerText}</span>
            </div> */}
        </footer>
    );
}
