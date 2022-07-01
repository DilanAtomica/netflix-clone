import React, {useEffect, useState} from 'react';
import "./Row.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper";

function Row({handleMouseLeave, handleMouseEnter, movieList, category, imageType}) {

    const [imagePath, setImagePath] = useState();

    return (
        <div className="row">
            <h3><a href="#">{category}</a><span>Show all <ArrowForwardIosIcon id="forwardIcon" /></span></h3>
            <div className="carousel">
                <Swiper id="swiper"
                        modules={[Navigation, Pagination, A11y]}
                        slidesPerView={7}
                        spaceBetween={10}
                        slidesPerGroup={7}
                        navigation
                        pagination={{ clickable: true }}
                >

                    {movieList.map(movie => (
                        <SwiperSlide id="swiperSlide" key={movie.id}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className="carouselImg" src={imageType === "landscape"
                                ? "https://image.tmdb.org/t/p/original" + movie?.backdrop_path
                                : "https://image.tmdb.org/t/p/original" + movie?.poster_path}
                                 alt="screenshot" />
                            <div className="darkPanel"></div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}

export default Row;