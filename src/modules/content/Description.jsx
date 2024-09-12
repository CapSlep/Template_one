import { useData } from "../../DataContext"; // Import the custom hook
import Timer from "../utilities/Timer";

export default function Description() {
    const data = useData(); // Access data from the context
    return (
        <section className="description">
            <Timer startTime={3}></Timer>
            <div className="description__content flex-column">
                <div className="description__prompt">
                    <img src="./img/description/icon.png" alt="!" />
                    {data.description.descriptionPromtOne}
                </div>
                <div className="description__prompt">
                    <img src="./img/description/icon.png" alt="!" />
                    {data.description.descriptionPromtTwo}
                </div>
                <div className="description__image">
                    <img src="./img/description/img-1.png" alt="" />
                </div>
            </div>
        </section>
    );
}
