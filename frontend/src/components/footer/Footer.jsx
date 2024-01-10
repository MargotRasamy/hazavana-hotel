import React  from "react";
import MinimalFooter from "./MinimalFooter";
import ButtonLink from "../buttons/ButtonLink";

const Footer = () => {
    return (
        <div className="footer">
            <div className='page-section page-section--footer footer-content'>
            
                <div className="heading">
                    <div className="info">
                        <h5>Adresse</h5>
                        <p>Quartier Mahavelona Foulpointe, Madagascar</p>
                        <ButtonLink underlined text="Comment s'y rendre ?" />
                    </div>
                    <div className="info">
                        <h5>Contact</h5>
                        <p>+261 33 093 98 98</p>
                        <p>+261 34 053 98 98</p>
                        <p>michelrasamy@gmail.com</p>
                    </div>
                </div>
                <MinimalFooter />
            </div>

        </div>
    )
}

export default Footer;