import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";



import avatar from "../../../assets/avatar.png";
import ContentWraper from "../../../Components/contentWraper/ContentWraper";
import Img from "../../../Components/lazyLoaingImg/Img";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Cast = ({ data, loading }) => {
    const { urlRes } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="castSection">
            <ContentWraper>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <Swiper
                        breakpoints={{
                            1200: {
                                slidesPerView: 6,
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
                        className="listItems"
                    >
                        {data?.map((item, ind) => {
                            if (ind === 20 || !item.profile_path) return;

                            let imgUrl = item.profile_path
                                ? urlRes.profile + item.profile_path
                                : avatar;

                            return (
                                <SwiperSlide key={item.id} className="listItem">
                                    <div className="profileImg" >
                                        <Img src={imgUrl} />
                                    </div>
                                    <div className="name">{item.name}</div>
                                    <div className="character">
                                        {item.character}
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                    </div>
                )}
            </ContentWraper>
        </div>
    );
};

export default Cast;