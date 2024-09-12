import { useData } from "../../DataContext";

export default function Reviews() {
    const data = useData(); // Access data from the context
    return (
        <section className="reviews container">
            <h2 className="reviews__header">{data.reviewsHeader}</h2>
            <div className="reviews__content">
                {data.comments.map((comment, index) => {
                    return (
                        <div className="comment flex-column" key={index}>
                            <div className="comment__header flex-column">
                                <div className="product__stars">
                                    <img src="./img/icons/star.svg" alt="" />
                                    <img src="./img/icons/star.svg" alt="" />
                                    <img src="./img/icons/star.svg" alt="" />
                                    <img src="./img/icons/star.svg" alt="" />
                                    <img src="./img/icons/star.svg" alt="" />
                                </div>
                                {/* <h3 className="comment__title">
                                    {comment.header}
                                </h3> */}
                                <div className="comment__name">
                                    {comment.name}
                                </div>
                                <div className="comment__validation flex-row">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="22"
                                        viewBox="0 0 30 30"
                                        aria-hidden="true"
                                    >
                                        <g fill="none">
                                            <g transform="translate(-37 -384)">
                                                <g transform="translate(37 384)">
                                                    <path d="M0 0H30V30H0z"></path>
                                                    <g>
                                                        <g
                                                            fill="#F5BF03"
                                                            transform="translate(4 3)"
                                                        >
                                                            <path d="M.013 6.848V9.83c0 .76.595 1.376 1.329 1.376h8.85V5.472h-8.85c-.734 0-1.329.616-1.329 1.376zM20.658 5.472h-8.85v5.735h8.85c.734 0 1.329-.616 1.329-1.376V6.848c0-.76-.595-1.376-1.329-1.376zM1.248 24.109c0 .492.385.891.86.891h8.084V12.222H1.248V24.11zM11.808 25h8.083c.475 0 .86-.399.86-.891V12.222h-8.943V25z"></path>
                                                            <path d="M5.336 4.504c.279.161.845.375 2.542.375.935 0 1.762-.066 1.797-.07a.56.56 0 00.446-.296.6.6 0 00.009-.549C9.873 3.45 8.546.853 7.597.304A2.261 2.261 0 006.468 0c-.842 0-1.62.473-2.03 1.234-.623 1.158-.22 2.625.898 3.27zM5.42 1.8a1.195 1.195 0 011.05-.638c.202 0 .403.055.581.158.349.2 1.055 1.273 1.664 2.38-.252.009-.54.016-.837.016-1.485 0-1.902-.174-1.994-.227-.578-.333-.786-1.091-.464-1.69zM12.325 4.81c.035.003.862.069 1.797.069 1.697 0 2.263-.214 2.542-.375 1.118-.645 1.52-2.112.897-3.27A2.313 2.313 0 0015.531 0c-.393 0-.783.105-1.128.304-.95.548-2.276 3.145-2.533 3.66a.6.6 0 00.009.55.56.56 0 00.446.296zm2.624-3.49c.179-.103.38-.158.582-.158.436 0 .838.244 1.05.638.321.598.114 1.355-.464 1.689-.092.053-.51.227-1.995.227-.297 0-.584-.007-.836-.017.609-1.106 1.315-2.178 1.663-2.38z"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="comment__validation-text">
                                        {data.reviewValidation}
                                    </div>
                                </div>
                                <div className="comment__time">
                                    {comment.time}
                                </div>
                            </div>
                            <div className="comment__text">{comment.text}</div>
                            <div className="comment__images-wrapper flex-column">
                                {comment.images.map((image, index) => {
                                    return (
                                        <div
                                            className="comment__image"
                                            key={index}
                                        >
                                            <img src={image}></img>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
