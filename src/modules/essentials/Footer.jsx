import { useData } from "../../DataContext"; // Import the custom hook

export default function Footer() {
    const data = useData(); // Access data from the context
    return (
        <footer className="footer">
            <div className="footer__logo-wrapper">
                <img src="./img/footer/footer-logo.png" alt="" />
            </div>
            <div className="footer__text-box flex-row">
                <span className="footer__text">{data.footerText}</span>
            </div>
        </footer>
    );
}
