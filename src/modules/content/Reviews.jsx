import { useState } from "react";
import { useData } from "../../DataContext";

export default function Reviews() {
    const data = useData(); // Access data from the context

    const [comment, setComment] = useState("");
    const handleTextareaChange = (event) => {
        setComment(event.target.value);
    };

    // Function to handle button click
    const handleButtonClick = (e) => {
        e.preventDefault();

        // Clear the textarea by resetting the state
        setComment("");
    };

    return (
        <section className="reviews">
            <div className="reviews__header-box">
                <h2 className="reviews__header">{data.reviewsHeader}</h2>
                <div className="comment-form__body">
                    <img src="./img/comments/unnamed.png" alt=""></img>
                    <textarea
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={handleTextareaChange}
                    ></textarea>
                    <button
                        disabled={!comment.trim()}
                        onClick={handleButtonClick}
                    >
                        {data.reviewPublish}
                    </button>
                    <div className="comment-form__icons">
                        <img src="./img/comments/smile.png" alt=""></img>
                        <img src="./img/comments/camera.png" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="reviews__content">
                {data.comments.map((comment, index) => {
                    return (
                        <div
                            className={`comment__container ${
                                comment.indent ? "indent-" + comment.indent : ""
                            } `}
                            key={index}
                        >
                            <div className="comment__avatar">
                                <img src={comment.avatar} alt="" />
                            </div>
                            <div className="comment__content">
                                <div className="comment__name">
                                    {comment.name}
                                </div>
                                <div className="comment__text">
                                    {comment.text}
                                    {comment.image ? (
                                        <img src={comment.image} alt=""></img>
                                    ) : null}
                                </div>
                                <ul className="comment__actions">
                                    <span>
                                        <img
                                            src="./img/comments/like.png"
                                            alt=""
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="./img/comments/love.png"
                                            alt=""
                                        />
                                    </span>
                                    <span>
                                        <img
                                            src="./img/comments/smile.svg"
                                            alt=""
                                        />
                                    </span>
                                    <div>{comment.likes}</div>
                                </ul>
                            </div>
                            <div className="comment__time">
                                <span>{comment.hours}</span>
                                <span>{comment.likeText}</span>
                                <span>{comment.comment}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
