import React from "react";

import "./style.scss";
import ContentWraper from "../../Components/contentWraper/ContentWraper";
import { useNavigate } from "react-router-dom";



const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="pageNotFound" onClick={()=> navigate('/')}>
      <ContentWraper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWraper>
    </div>
  );
};

export default PageNotFound;