import React from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'row'}>
                <div className={'col-lg-3'}>
                    <h4>About Us</h4>
                    <p>
                        Get in touch with us for getting your business online.
                    </p>
                </div>
                <div className={'col-lg-3'}>
                    <h4>Company</h4>
                    <address>
                        DeepMinds Pvt. Ltd.<br/>
                        U-7, Exceluss Mall<br/>
                        Althan,<br/>
                        Surat, Gujarat
                    </address>
                </div>
                <div className={'col-lg-3'}>
                    <h4>Email us at:</h4>
                    <address>
                        missgoyal13@gmail.com
                    </address>
                    <h4>Call us at:</h4>
                    <address>
                        9376959291
                    </address>
                </div>
                <div className={'col-lg-3'}>
                    <h4>Follow us:</h4>
                    <div className={'row'}>
                        <div className={'col-lg-4'}>
                            <div className={'icon-border'}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                        </div>
                        <div className={'col-lg-4'}>
                            <div className={'icon-border'}>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </div>
                        </div>
                        <div className={'col-lg-4'}>
                            <div className={'icon-border'}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;