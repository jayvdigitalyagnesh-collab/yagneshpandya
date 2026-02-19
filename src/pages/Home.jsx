import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About'; // We can keep the hero version or remove it - user said "where is about page, separate page", so I'll remove About from Homepage
import Programs from '../components/Programs';
import Workshops from '../components/Workshops';
import ImageSlider from '../components/ImageSlider';
import Podcast from '../components/Podcast';
import YoutubeGrid from '../components/YoutubeGrid';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            {/* About section is REMOVED from Home so it's exclusive to /about page */}
            <Programs />
            <Workshops />
            <ImageSlider />
            <Podcast />
            <YoutubeGrid title="Talk With Yagnesh On YouTube" maxResults={12} />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
