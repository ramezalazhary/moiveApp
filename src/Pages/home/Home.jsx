import React from "react";

import "./style.scss";
import HeroBanner from "./HeroBanner/HeroBanner";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import { useInView } from 'react-intersection-observer';


const Home = () => {
    const [ref, inview, entry] = useInView()
    console.log(inview)
    return (
        <div className="homePage" ref={ref} >


            <HeroBanner />

            <Trending  />

            <Popular inview={inview} />

            <TopRated inview={inview} refs={ref} />

        </div>
    );
};

export default Home