import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Headphones, ArrowRight, ExternalLink } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import YoutubeGrid from '../components/YoutubeGrid';

// --- ⚠️ ACTION REQUIRED: REPLACE THESE WITH YOUR ACTUAL YOUTUBE API CREDENTIALS ⚠️ ---
// --- YouTube API Configuration ---
const API_KEY = 'AIzaSyB36ZIGtZtKlzayJzRO-RWnyfsK2l0ptCQ';
const CHANNEL_ID = 'UCvjj3UnvjzxJytHOmR82sDw';
// ----------------------------------

const PodcastPage = () => {
    // Statistically set the most recent video ID
    const [latestVideoId] = React.useState('UM0BDMwReHk');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="podcast-page">
            {/* 1. HERO SECTION */}
            <section style={{
                position: 'relative',
                height: '100vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                overflow: 'hidden',
                backgroundColor: 'black'
            }}>
                {/* Background Image Layer */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    overflow: 'hidden'
                }}>
                    {/* The Image on the Right - No width cap to show full image naturally */}
                    <div style={{ height: '100%', position: 'relative' }}>
                        <img
                            src="/p4.png"
                            alt="Yagnesh Session"
                            style={{
                                height: '100%',
                                width: 'auto',
                                objectFit: 'contain',
                                filter: 'grayscale(100%) brightness(0.8)'
                            }}
                        />
                        {/* Smooth blend from the left black side into the image */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to right, black 0%, transparent 20%)'
                        }}></div>
                    </div>

                    {/* Overall slight dark overlay for text contrast on the left */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)',
                        pointerEvents: 'none'
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '6rem', paddingBottom: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '900px' }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                            fontWeight: 900,
                            lineHeight: 0.9,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '-2px'
                        }}>
                            Talk With <br />
                            Yagnesh Pandya
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            marginBottom: '3rem',
                            opacity: 0.9,
                            maxWidth: '600px',
                            lineHeight: 1.6,
                            fontWeight: 500
                        }}>
                            In my podcast, I speak with founders and leaders about the psychology of growth. Listen to real stories of success, failure, and the money mindset behind closed doors.
                        </p>

                        {/* Two Buttons: Coral Filled & White Outline */}
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#episodes" className="btn-coral" style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                borderRadius: '4px',
                                fontWeight: 700
                            }}>
                                Browse Episodes
                            </a>
                            <a href="#contact" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem 2.5rem',
                                border: '1px solid rgba(255,255,255,0.3)',
                                backgroundColor: 'rgba(0,0,0,0.2)', // Slight bg for readability
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => { e.target.style.borderColor = 'white'; e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
                                onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.3)'; e.target.style.backgroundColor = 'rgba(0,0,0,0.2)'; }}
                            >
                                Sponsor Inquiry
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. LATEST EPISODE */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: 'white' }}>
                <div className="container" id="episodes">
                    <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                        <Reveal>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>THE LATEST EPISODE</h2>
                        </Reveal>
                    </div>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, backgroundColor: '#000', borderRadius: '8px', overflow: 'hidden' }}>
                        <iframe
                            src={`https://www.youtube.com/embed/${latestVideoId}`}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            allowFullScreen
                            title="Latest Episode"
                        />
                    </div>
                </div>
            </section>

            {/* 3. ALL EPISODES GRID - DYNAMIC */}
            <YoutubeGrid title="All Podcast Episodes" maxResults={12} useEmbeds={true} />

            {/* 4. APPLY SECTION - REFACTORED TO MATCH USER SCREENSHOT */}
            <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div className="responsive-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '5rem',
                        alignItems: 'center'
                    }}>
                        {/* Left: Studio Image with Grey Background */}
                        <div style={{ backgroundColor: '#F0F0F0', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%', minHeight: '500px' }}>
                            <img
                                src="/p1.png"
                                alt="Yagnesh Portrait"
                                style={{ width: '85%', height: 'auto', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                            />
                        </div>

                        {/* Right: Minimalist Bold Text */}
                        <div>
                            <Reveal>
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: 900,
                                    lineHeight: 1,
                                    marginBottom: '2.5rem',
                                    textTransform: 'uppercase',
                                    color: 'black'
                                }}>
                                    Want to be on <br /> the Podcast?
                                </h2>
                            </Reveal>
                            {/* Minimalist Button */}
                            <a href="#apply" className="btn-coral" style={{
                                padding: '1.2rem 3rem',
                                fontSize: '1.1rem',
                                borderRadius: '4px',
                                fontWeight: 700,
                                display: 'inline-block'
                            }}>
                                Apply Here!
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LEAD MAGNET / DARK SECTION */}
            <section style={{
                padding: '8rem 0',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/p2.png)', // Using p2.png
                backgroundSize: 'cover',
                backgroundPosition: 'center 20%',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <Reveal width="100%">
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>
                            As heard on the <br /> podcast...
                        </h2>
                    </Reveal>
                    <p style={{ fontSize: '1.2rem', color: '#eee', marginBottom: '3rem', lineHeight: 1.5 }}>
                        As heard on the podcast... Get Yagnesh's Conscious Spending Plan so you can spend guilt-free on the things you love:
                    </p>
                    <div style={{ maxWidth: '550px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="text"
                            placeholder="First Name"
                            style={{
                                padding: '1.2rem',
                                borderRadius: '4px',
                                border: 'none',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            style={{
                                padding: '1.2rem',
                                borderRadius: '4px',
                                border: 'none',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                        <button className="btn-coral" style={{
                            width: '100%',
                            padding: '1.2rem',
                            borderRadius: '4px',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            marginTop: '0.5rem'
                        }}>
                            Send me the Plan (FREE)
                        </button>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .responsive-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                }
            `}} />
        </div>
    );
};

export default PodcastPage;
