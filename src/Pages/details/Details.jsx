import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import useApiFetch from "../../Hooks/useApiFetching";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import VideoSection from "./videosSection/VideoSection";
import Cast from "./cats/Cast";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";



const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useApiFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useApiFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;