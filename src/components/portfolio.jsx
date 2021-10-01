import React from 'react';

// images 
import homeDark from '../assets/images/homeDark.png';
import listDark from '../assets/images/listDark.png';
import listLight from '../assets/images/listLight.png';
import listMobile from '../assets/images/listmobile.png';

const workArray = [homeDark, listDark, listLight, listMobile];

const Portfolio = () => {
    return (
        <div id={'portfolio'} className={'block'}>
            <h3 className={'title'}>Portfolio</h3>
            <div className={'title-border'} />
            <div className={'portfolio-block'}>
                {
                    workArray.map((i) => {
                        return (
                            <div className={'work-col'}>
                                <img src={i} height={200} alt={''} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Portfolio;