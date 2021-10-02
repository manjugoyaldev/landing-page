import React from 'react';

// components
import { Input, Button } from 'antd';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const { TextArea } = Input;

const ContactUs = () => {
    return (
        <div id={'contact'} className={'block'}>
            <h3 className={'title'}>Get In Touch</h3>
            <div className={'title-border'} />
            <div className={'contact-card'}>
                <div className={'row'}>
                    <div className={'col-lg-8 contact-form'}>
                        <div className={'row'}>
                            <div className={'col-lg-6'}>
                                <Input placeholder={'Name'} />
                            </div>
                            <div className={'col-lg-6 email-text-margin'}>
                                <Input placeholder={'Email'} />
                            </div>
                        </div>
                        <div className={'text-margin'}>
                            <Input placeholder={'Subject'} />
                        </div>
                        <div className={'text-margin'}>
                            <TextArea rows={8} placeholder={'Message'} />
                        </div>
                        <div className={'text-margin btn-container'}>
                            <Button className={'send-btn'}>
                                Send Message
                            </Button>
                        </div>
                    </div>
                    <div className={'col-lg-4 contact-data-block'}>
                        <div className={'contact-data'}>
                            <div className={'icon-container'}>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                            <div className={'contact-detail'}>
                                <div className={'contact-detail'}>Call :</div>
                                <div>+91 9376959291</div>
                            </div>
                        </div>
                        <div className={'contact-data'}>
                            <div className={'icon-container'}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className={'contact-detail'}>
                                <div className={'contact-detail'}>Email :</div>
                                <div>missgoyal13@gmail.com</div>
                            </div>
                        </div>
                        <div className={'contact-data'}>
                            <div className={'icon-container'}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className={'contact-detail'}>
                                <div className={'contact-detail'}>Location :</div>
                                <div>U-7, Exceluss Mall, Althan, Surat</div>
                            </div>
                        </div>
                        <div className={'follow-block'}>
                            <h3>Follow</h3>
                            <div className={'row'}>
                                <div className={'col-lg-4 col-sm-4'}>
                                    <div className={'icon-border'}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </div>
                                </div>
                                <div className={'col-lg-4 col-sm-4'}>
                                    <div className={'icon-border'}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </div>
                                </div>
                                <div className={'col-lg-4 col-sm-4'}>
                                    <div className={'icon-border'}>
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;