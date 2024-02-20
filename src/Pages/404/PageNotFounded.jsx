import React from "react";

import "./style.scss";
import ContentWraper from "../../Components/contentWraper/ContentWraper";



const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWraper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWraper>
    </div>
  );
};

export default PageNotFound;