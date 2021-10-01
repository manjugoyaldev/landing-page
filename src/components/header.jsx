import React from 'react';

// images
import logo from '../assets/images/Deepminds.png';

// icons
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <div id={'header'} className={'header sticky'}>
            <div className={'container'}>
                <a className={'logo'}>
                    <img src={logo} alt={''} />
                </a>
                <div className={'menu-toggler'}>
                    <MenuOutlined />
                </div>
                <div className={'list-container-main'}>
                    <div className={'list-container'}>
                        <ul>
                            <li><a href={'#content'}>Home</a></li>
                            <li><a href={'#about-us-block'}>About</a></li>
                            <li><a href={'#services-block'}>Services</a></li>
                            <li><a href={'#portfolio'}>Portfolio</a></li>
                            <li><a href={'#team'}>Team</a></li>
                            <li><a href={'#contact'}>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;