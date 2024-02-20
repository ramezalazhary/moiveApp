import React from "react";


import useApiFetch from "../../../Hooks/useApiFetching";
import Carousel from "../../../Components/carousel/Carousel";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading } = useApiFetch(
        `/${mediaType}/${id}/recommendations`
    );

    if (data?.results) return;

    return (
        data?.results &&
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;