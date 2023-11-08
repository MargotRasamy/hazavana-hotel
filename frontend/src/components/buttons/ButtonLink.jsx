import React from "react";
import { NavLink } from "react-router-dom";

const ButtonLink = ({text, toPath, colored, wrapperClass}) => {
    return (
        <NavLink to={toPath} className={'button button-link ' + wrapperClass + `${colored ? ' button-colored' : ''}`}>
           { text }
        </NavLink>
    )
} 
export default ButtonLink;