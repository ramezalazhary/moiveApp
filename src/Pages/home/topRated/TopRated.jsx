import React, { useState } from "react";

import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";


import ContentWraper from "../../../Components/contentWraper/ContentWraper";
import useApiFetch from "../../../Hooks/useApiFetching";
import Carousel from "../../../Components/carousel/Carousel";
import { useInView } from "react-intersection-observer";


const TopRated = () => {
    const [ref, inview] = useInView()
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useApiFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };



    return (
        <div className="carouselSection" ref={ref}>
           {inview&&<>
                <ContentWraper>
                    <span className="carouselTitle">Top Rated</span>
                    <SwitchTabs
                        data={["Movies", "TV Shows"]}
                        onTabChange={onTabChange}
                    />
                </ContentWraper>
                <Carousel
                    data={data?.results}
                    loading={loading}
                    endpoint={endpoint}
                />
           </> }
        </div>
    ) 
};

export default TopRated