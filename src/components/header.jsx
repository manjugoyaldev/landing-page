import React, { useState, useEffect } from 'react';

// images
import logo from '../assets/images/Deepminds.png';

// icons
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
    const [ isMenuVisible, setIsMenuVisible ] = useState(false);
    const [ isMobileView, setIsMobileView ] = useState(window.innerWidth < 768);

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

    const handleResize = () => {
        setIsMobileView(window.innerWidth);
    }

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    return (
        <div id={'header'} className={'header sticky'}>
            <div className={'container'}>
                <div className={'toggler'}>
                    <a className={'logo'}>
                        <img src={logo} alt={''} />
                    </a>
                    <div className={'menu-toggler'}>
                        <MenuOutlined onClick={toggleMenu} />
                    </div>
                </div>
                <div className={`list-container-main ${(isMobileView && isMenuVisible) ? 'show' : ''}`}>
                    <div className={'list-container'}>
                        <ul>
                            <li onClick={() => isMobileView && toggleMenu()}><a href={'#content'}>Home</a></li>
                            <li onClick={() => isMobileView && toggleMenu()}><a href={'#about-us-block'}>About</a></li>
                            <li onClick={() => isMobileView && toggleMenu()}><a href={'#services-block'}>Services</a></li>
                            <li onClick={() => isMobileView && toggleMenu()}><a href={'#portfolio'}>Portfolio</a></li>
                            <li onClick={() => isMobileView && toggleMenu()}><a href={'#team'}>Team</a></li>
                            <li onClick={() => isMobileView && toggleMenu()}><a href={'#contact'}>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;