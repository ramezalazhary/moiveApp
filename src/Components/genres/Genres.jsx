import React
            from "react";

import { useSelector }
                  from "react-redux";

import "./style.scss";

const Genres = ({
    data

}) => {
    const {
        genres
    }

        = useSelector((state) => state.home);

    return (<div className="genres" > {
        data?.map((e) => {
            if (!genres[e]?.name) return;

            return (<div key={e}

                className="genre" > {
                    genres[e]?.name
                }

            </div>);
        })
    }

    </div>);
}

    ;

export default Genres;