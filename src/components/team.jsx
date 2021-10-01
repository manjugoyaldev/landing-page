import React from 'react';

// images
import Paras from '../assets/images/paras.jpeg';

const Team = () => {
    return (
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
                                <h4>Lorem Ipsum</h4>
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
                                <h4>Lorem Ipsum</h4>
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
    )
}
export default Team;