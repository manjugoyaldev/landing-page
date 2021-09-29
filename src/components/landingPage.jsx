import React from 'react';
import '../css/landingPage.css';

import { Input, Button } from 'antd';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// images
import office from '../assets/images/office.png';
import Design from '../assets/images/design.png';
import cart from '../assets/images/cart.png';
import dev from '../assets/images/dev.jpg';
import homeDark from '../assets/images/homeDark.png';
import listDark from '../assets/images/listDark.png';
import listLight from '../assets/images/listLight.png';
import listMobile from '../assets/images/listmobile.png';
import Paras from '../assets/images/paras.jpeg';

const { TextArea } = Input;

const workArray = [homeDark, listDark, listLight, listMobile];

const LandingPage = () => {
    return (
        <div>
            <div id={'header'} className={'header sticky'}>
                <div className={'logo'}>Deep Minds</div>   
                <ul>
                    <li><a href={'#content'}>Home</a></li>
                    <li><a href={'#about-us-block'}>About</a></li>
                    <li><a href={'#services-block'}>Services</a></li>
                    <li><a href={'#portfolio'}>Portfolio</a></li>
                    <li><a href={'#team'}>Team</a></li>
                    <li><a href={'#contact'}>Contact Us</a></li>
                </ul>
            </div>
            <div id={'content'} className={'content'}>
                <div className={'desc'}>
                    <div className={'heading'}>GO Digital</div>
                    <div className={'sub-text'}>
                        We are here to help you creating attractive and user friendly websites
                        and mobile apps to take your business online.
                    </div>
                </div>
                <div className={'image'}>
                    <img src={office} alt={'office'} height={500} className={'mover-img'} />
                </div>
            </div>
            <div id={'about-us-block'} className={'block'}>
                <h3 className={'title'}>About Us</h3>
                <div className={'title-border'} />
                <div className={'para-block'}>
                    <p>
                        DeepMinds is an India based IT outsourcing company that offers high quality and cost-effective
                        software development services to its clients.
                    </p>
                    <p>
                        We provide High quality and standard software engineering and programming services
                        according to the client's requirements in flexible pricing.
                    </p>
                    <p>
                        Our wide range of services includes Web designing, web development, e-commerce
                        services, Product development and many more.
                    </p>
                    <p>
                        We are a growing start-up. Our primary goal is to satisfy our clients to the best
                        from our services.
                    </p>
                </div>
            </div>
            <div id={'services-block'} className={'block'}>
                <h3 className={'title'}>Our Services</h3>
                <div className={'title-border'} />
                <div className={'service-list row'}>
                    <div className={'col-lg-4'}>
                        <div className={'img-container'}>
                            <img src={Design} height={'70px'} />
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
                    <div className={'col-lg-4'}>
                    <div className={'img-container'}>
                            <img src={dev} height={'70px'} />
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
                    <div className={'col-lg-4'}>
                    <div className={'img-container'}>
                            <img src={cart} height={'70px'} />
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
            <div id={'portfolio'} className={'block'}>
                <h3 className={'title'}>Portfolio</h3>
                <div className={'title-border'} />
                <div className={'portfolio-block'}>
                    {
                        workArray.map((i) => {
                            return (
                                <div className={'work-col'}>
                                    <img src={i} height={200} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'section bg-team'}>
                <div className={'bg-overlay'} />
                <div id={'team'} className={'block team-section'}>
                    <h3 className={'title team-title'}>Our Team</h3>
                    <div className={'title-border'} />
                    <div className={'team-container row'}>
                        <div className={'col-lg-6'}>
                            <div className={'team-content'}>
                                <h3>"Senior Management"</h3>
                                <p>
                                    The Managing Director, CEO as well as HR lead of the company who manages 
                                    all financial aspects of the company and introduce new ideas for our growth.
                                </p>
                            </div>
                            <div className={'team-member'}>
                                <div>
                                    <h4>Paras Bansal</h4>
                                    <h5>MD & CEO</h5>
                                </div>
                                <div className={'team-member-profile'}>
                                    <div className={'profile-img-container'}>
                                        <img src={Paras} alt={'p'} height={'132%'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-lg-6'}>
                            <div className={'team-content'}>
                                <h3>"Senior Management"</h3>
                                <p>
                                    The Managing Director and CTO of the company who is responsible for having
                                    new technologies in the company and for implementing new ideas with the help of team.
                                </p>
                            </div>
                            <div className={'team-member'}>
                                <div>
                                    <h4>Deeksha Bansal</h4>
                                    <h5>MD & CTO</h5>
                                </div>
                                <div className={'team-member-profile ml-3'}>
                                    <div className={'profile-img-container'}>
                                        <img src={Paras} alt={'p'} height={'132%'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={'contact'} className={'block'}>
                <h3 className={'title'}>Get In Touch</h3>
                <div className={'title-border'} />
                <div className={'contact-card'}>
                    <div className={'row'}>
                        <div className={'col-lg-8'}>
                            <div className={'row'}>
                                <div className={'col-lg-6'}>
                                    <Input placeholder={'Name'} />
                                </div>
                                <div className={'col-lg-6'}>
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
                        <div className={'col-lg-4'}>
                            <div className={'contact-data'}>
                                <div className={'icon-container'}>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </div>
                                <div className={'contact-detail'}>
                                    <div className={'contact-detail'}>Call :</div>
                                    <div>+91 9376979291</div>
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
                                    <div>213, Exceluss Mall, Althan, Surat</div>
                                </div>
                            </div>
                            <div className={'follow-block'}>
                                <h3>Follow</h3>
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
                </div>
            </div>
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
                            Deep Minds Pvt. Ltd.<br/>
                            213, Exeluss Mall<br/>
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
                            9376979291
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
            <div className={'copyright-block'}>
                2021 &copy; DeepMinds Pvt. Ltd.
            </div>
        </div>
    )
}
export default LandingPage;