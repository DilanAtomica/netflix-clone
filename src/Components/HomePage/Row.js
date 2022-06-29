import React from 'react';
import "./Row.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper";

function Row({handleMouseLeave, handleMouseEnter}) {
    return (
        <div className="row">
            <h3><a href="#">Trending Now</a><span>Show all <ArrowForwardIosIcon id="forwardIcon" /></span></h3>
            <div className="carousel">
                <Swiper id="swiper"
                        modules={[Navigation, Pagination, A11y]}
                        slidesPerView={7}
                        spaceBetween={20}
                        slidesPerGroup={7}
                        navigation
                        pagination={{ clickable: true }}
                >
                    <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img style={{}} className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Row;