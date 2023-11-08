import Logo from '../assets/images/logos/logo.svg';
import BurgerMenu from './buttons/BurgerMenu';
import ButtonLink from './buttons/ButtonLink';
import { useState, useEffect } from 'react';
import '../styles/header.scss';

const Header = () => {

    const [width, setWidth] = useState(0);
    const [open, setOpen] = useState(false);

    const setMenuState = (menuState) => {
        setOpen(menuState)
    }

    const updateDimensions = () => {
        setWidth(window.innerWidth);
   
        if (width >= 959) {
            setMenuState(false)
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
    })
    

    return (
        <header className="header">
            <img className='logo' src={Logo} alt="hazavanaLogo" />
            <BurgerMenu onClickAction={ ()=> { setMenuState(!open) } } />
            <nav className={ !open ? 'closed' : '' }>
            <ButtonLink wrapperClass="nav-item text-clip" colored={false} toPath="/" text="Activités"/>
                <ButtonLink wrapperClass="nav-item text-clip" colored={false} toPath="/" text="Chambres"/>
                <ButtonLink wrapperClass="nav-item text-clip" colored={false} toPath="/" text="Tarifs"/>
                <ButtonLink wrapperClass="nav-item text-clip" colored={true} toPath="/" text="Réserver"/>
            </nav>
        </header>
    )
}

export default Header;