import React from 'react';
import '../css/landingPage.css';

// pages
import AboutUs from './aboutUs';
import Services from './services';
import Header from './header';
import Portfolio from './portfolio';
import Team from './team';
import ContactUs from './contactUs';
import MainContent from './mainContent';
import Footer from './footer';

const LandingPage = () => {
    return (
        <div className={'landing'}>
            <Header />
            <MainContent />
            <AboutUs />
            <Services />
            <Portfolio />
            <Team />
            <ContactUs />
            <Footer />
            <div className={'copyright-block'}>
                2021 &copy; AbcComp Pvt. Ltd.
            </div>
        </div>
    )
}
export default LandingPage;