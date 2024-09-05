import { useData } from "../DataContext"; // Import the custom hook

export default function Blog() {
    const data = useData(); // Access data from the context
    return (
        <section className="blog">
            {data.blogs.map((blog, index) => {
                return (
                    <div key={index} className="blog__element">
                        <div className="blog__image-wrapper">
                            <img src={blog.image} alt="" />
                        </div>
                        <div className="blog__content container">
                            <h2 className="blog__header">{blog.header}</h2>
                            <p className="blog__text">{blog.text}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
