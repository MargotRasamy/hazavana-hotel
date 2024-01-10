import React from "react";
import { NavLink } from "react-router-dom";

const ButtonLink = ({text, toPath, colored, wrapperClass, underlined}) => {
    return (
        <NavLink to={toPath} className={'button button-link ' + wrapperClass + `${colored ? ' button-colored' : ''}` + `${underlined ? ' button-link--underlined' : ''}`}>
           { text }
        </NavLink>
    )
} 
export default ButtonLink;