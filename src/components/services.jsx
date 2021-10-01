import React from 'react';

// images
import Design from '../assets/images/design.png';
import cart from '../assets/images/cart.png';
import dev from '../assets/images/dev.jpg';

const Services = () => {
    return (
        <div id={'services-block'} className={'block'}>
            <h3 className={'title'}>Our Services</h3>
            <div className={'title-border'} />
            <div className={'service-list row'}>
                <div className={'col-lg-4'}>
                    <div className={'img-container'}>
                        <img src={Design} height={'70px'} alt={''} />
                    </div>
                    <div className={'service-header'}>
                        Web Designing
                    </div>
                    <div className={'service-desc'}>
                        <p>
                            We designed softwares using many different frameworks like material-ui,
                            antd, react-bootstrap, bootstrap etc. You will get a responsive software
                            which looks good in almost all screen sizes.
                        </p>
                    </div>
                </div>
                <div className={'col-lg-4 field'}>
                <div className={'img-container'}>
                        <img src={dev} height={'70px'} alt={''} />
                    </div>
                    <div className={'service-header'}>
                        Web Development
                    </div>
                    <div className={'service-desc'}>
                        <p>
                            As of now, we have started our development in many Javascript frameworks
                            like Angular, React and Vue. You will get a well designed and fully functional 
                            website based on your requirements.
                        </p>
                    </div>
                </div>
                <div className={'col-lg-4 field'}>
                <div className={'img-container'}>
                        <img src={cart} height={'70px'} alt={''} />
                    </div>
                    <div className={'service-header'}>
                        E-commerce softwares
                    </div>
                    <div className={'service-desc'}>
                        <p>
                            You will get a feature-rich and user-friendly website for your business
                            with payment integration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;