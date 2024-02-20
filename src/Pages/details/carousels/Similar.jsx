import useApiFetch from "../../../Hooks/useApiFetching";

import Carousel from "../../../Components/carousel/Carousel";


const Similar = ({ mediaType, id }) => {
    const { data, loading } = useApiFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
    return (
        data?.results && data?.results.length > 0 ?
            <Carousel
                title={title}
                data={data?.results}
                loading={loading}
                endpoint={mediaType}
            /> :
            null
    );
};

export default Similar;