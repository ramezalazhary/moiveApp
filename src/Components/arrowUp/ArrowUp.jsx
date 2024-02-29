import React, { useEffect, useState } from 'react';
import './style.scss'
import { IoIosArrowDropupCircle } from "react-icons/io";

function ArrowUp() {
    const [position, setPosition] = useState(true);

    const controlNavbar = () => {

        if (window.scrollY > 300) {
            setPosition(false)
        } else {
            setPosition(true)
        }

    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);


    const handleClick = () => {
        window.scroll(0, 0)
    }
    return !position ? (
        <div
            className={`arrowUp `}
            onClick={handleClick}
        >
            <IoIosArrowDropupCircle />


        </div>

    ) : (null)
}

export default React.memo(ArrowUp)