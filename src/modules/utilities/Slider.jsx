// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default ({ slidesToShow }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
        >
            {slidesToShow.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img src={slide} alt="" />
                    </SwiperSlide>
                );
            })}
            <ul className="badges">
                <li>
                    <div className="badge badge__img">
                        <img src="./img/slides/sdesc1.png" alt="" />
                    </div>
                </li>
                <li>
                    <div className="badge badge__img">
                        <img src="./img/slides/sdesc2.png" alt="" />
                    </div>
                </li>
            </ul>
        </Swiper>
    );
};
