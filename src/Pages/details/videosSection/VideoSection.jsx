import React, { useState } from "react";

import "./style.scss";

import { PlayIcon } from "../Playbtn";
import ContentWraper from "../../../Components/contentWraper/ContentWraper";
import Img from "../../../Components/lazyLoaingImg/Img";
import VideoPopup from "../../../Components/videoPopup/VideoPopup";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
const VideoSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWraper>
                <div className="sectionHeading">Official Videos</div>


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
                    className="videos"
                >
                    {!loading ? (

                        data?.results?.map((video) => (

                            <SwiperSlide
                                key={video.id}
                                className="videoItem"
                                onClick={() => {
                                    setVideoId(video.key);
                                    setShow(true);
                                }} >


                                <div className="videoThumbnail">
                                    <Img
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                    />
                                    <PlayIcon />
                                </div>
                                <div className="videoTitle">{video.name}</div>

                            </SwiperSlide>

                        ))

                    ) : (
                        <div className="videoSkeleton">
                            {loadingSkeleton()}
                            {loadingSkeleton()}
                            {loadingSkeleton()}
                            {loadingSkeleton()}
                        </div>
                    )}
                </Swiper>
            </ContentWraper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div >
    );
};

export default VideoSection;