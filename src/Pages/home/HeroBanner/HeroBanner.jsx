import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './style.scss';
import useApiFetch from '../../../Hooks/useApiFetching';
import { useSelector } from 'react-redux';
import ContentWraper from '../../../Components/contentWraper/ContentWraper';
import Img from '../../../Components/lazyLoaingImg/Img';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
export default function HeroBanner() {
    const [query, setQuery] = useState("");
    const [backGround, setBackGround] = useState("");
    const { urlRes } = useSelector(state => state.home)
    const { data, loading } = useApiFetch("/movie/now_playing")
    const navigate = useNavigate();

    useEffect(() => {

        if (!data) return;
        choosenBackGround()

        const scroll = setInterval(() => { choosenBackGround() }, 10000);




        return () => clearInterval(scroll)
    }, [data, urlRes]);

    const choosenBackGround = () => {

        const ImageUrl = urlRes?.backdrop +
            data?.results[Math.floor(Math.random() * 20)].backdrop_path

        setBackGround(ImageUrl)
    }
    const searchQueryHandler = (event) => {

        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    return (


        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={backGround} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWraper>
                <div className="heroBannerContent">
                    <span className="title">Welcome,</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button className='btn-search' aria-label="search-btn"><IoSearch /></button>
                    </div>
                </div>
            </ContentWraper>
        </div>

    );
}
