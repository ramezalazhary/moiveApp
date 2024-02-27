import React, { useState } from "react";



import ContentWraper from "../../../Components/contentWraper/ContentWraper";
import Carousel from "../../../Components/carousel/Carousel";
import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";
import useApiFetch from "../../../Hooks/useApiFetching";
import { useInView } from "react-intersection-observer";


const Popular = () => {
    const [ref, inview, entry] = useInView();

    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useApiFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection" ref={ref}>
            {inview && <>
                <ContentWraper>
                    <span className="carouselTitle">What's Popular</span>
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

            </>}
        </div>
    );
};

export default Popular;