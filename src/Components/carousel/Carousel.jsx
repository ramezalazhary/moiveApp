import React, { useRef, useState } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWraper from "../contentWraper/ContentWraper";

import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";


import "./style.scss";
import Genres from "../genres/Genres";
import Img from "../lazyLoaingImg/Img";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules


const Carousel = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef();
    const { urlRes } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

    return (

        <div className="carousel">
            <ContentWraper>
                {title && <div className="carouselTitle">{title}</div>}
                <Swiper
                    breakpoints={{
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        920: {
                            slidesPerView: 5,
                            spaceBetween: 12,
                        },
                        720: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        250: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },

                    }}

                    className="carouselItems"
                >
                    {!loading ? (
                        <div className="carouselItems" ref={carouselContainer}>
                            {data?.map((item) => {
                                const posterUrl = item?.poster_path
                                    ? urlRes?.poster + item?.poster_path
                                    : PosterFallback;
                                return (
                                    <SwiperSlide key={item.id}
                                        className="carouselItem"
                                        onClick={() =>
                                            navigate(
                                                `/${item.media_type || endpoint}/${item.id
                                                }`
                                            )
                                        } >

                                        <div className="posterBlock">
                                            <Img src={posterUrl} />
                                            <CircleRating
                                                rating={item.vote_average.toFixed(1)}
                                            />
                                            <Genres
                                                data={item.genre_ids.slice(0, 2)}
                                            />
                                        </div>
                                        <div className="textBlock">
                                            <span className="title">
                                                {item.title || item.name}
                                            </span>
                                            <span className="date">
                                                {dayjs(item.release_date || item.first_air_date).format(
                                                    "MMM D, YYYY"
                                                )}
                                            </span>
                                        </div>


                                    </SwiperSlide>


                                );
                            })}
                        </div>
                    ) : (
                        <div className="loadingSkeleton">
                            <div className="skeletonItem">
                                <div className="posterBlock skeleton"> </div>
                                <div className="textBlock">
                                    <div className="title skeleton"> </div>
                                    <div className="date skeleton"> </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Swiper>

            </ContentWraper>
        </div>
    );
};

export default Carousel;

