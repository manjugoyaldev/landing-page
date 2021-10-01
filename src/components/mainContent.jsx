import React from 'react';

// images
import office from '../assets/images/office.png';

const MainContent = () => {
    return (
        <div id={'content'} className={'content'}>
            <div className={'desc'}>
                <div className={'heading'}>GO Digital</div>
                <div className={'sub-text'}>
                    We are here to help you creating attractive and user friendly websites
                    and mobile apps to take your business online.
                </div>
            </div>
            <div className={'image'}>
                <img src={office} alt={'office'} className={'mover-img'} />
            </div>
        </div>
    )
}
export default MainContent;