import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About'; // We can keep the hero version or remove it - user said "where is about page, separate page", so I'll remove About from Homepage
import Programs from '../components/Programs';
import Workshops from '../components/Workshops';
import Podcast from '../components/Podcast';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            {/* About section is REMOVED from Home so it's exclusive to /about page */}
            <Programs />
            <Workshops />
            <Podcast />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
