import { useData } from "../../DataContext"; // Import the custom hook

export default function Loader() {
    const data = useData(); // Access data from the context
    return (
        <div className="loader__final">
            <h2 className="section__title">{data.finalLoader}</h2>
            <div className="loader__inner">
                <img src="./img/loader.gif" alt="" className="loader_gif" />
            </div>
        </div>
    );
}
