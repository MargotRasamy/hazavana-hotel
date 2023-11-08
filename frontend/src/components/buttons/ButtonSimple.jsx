import React from "react";

const ButtonSimple = ({type, text, colored, wrapperClass, onClickEvent, size}) => {
    return (
        <button type={type} onClick={onClickEvent} className={'button button-simple button-' + size + ' ' + wrapperClass + `${colored ? ' button-colored' : ''}`}>
           { text }
        </button>
    )
} 
export default ButtonSimple;