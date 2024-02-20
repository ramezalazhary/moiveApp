import React, { useState } from "react";




import ContentWraper from "../../../Components/contentWraper/ContentWraper";
import Carousel from "../../../Components/carousel/Carousel";
import useApiFetch from "../../../Hooks/useApiFetching";
import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useApiFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWraper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWraper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;