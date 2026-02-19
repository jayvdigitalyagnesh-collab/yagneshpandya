import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const About = () => {
    const accolades = [
        "Digital Growth Strategist",
        "Founder of Digital Yagnesh",
        "Host of 'Talk With Yagnesh'",
        "10+ Years of Industry Leadership",
        "Helping Brands Scale to 7+ Figures"
    ];

    return (
        <section id="about" style={{
            position: 'relative',
            backgroundColor: '#111',
            color: 'white',
            overflow: 'hidden',
            minHeight: '100vh', // Full screen feel
            display: 'flex',
            flexDirection: 'column'
        }}>

            {/* Split Background Container */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '35% 65%', // Matches the rough ratio in screenshot
                height: '100%',
                flexGrow: 1,
                position: 'relative',
                zIndex: 1
            }} className="about-grid">

                {/* Left Side - Content */}
                <div style={{
                    padding: '120px 40px 100px 80px', // Extra left padding
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: 'linear-gradient(to right, #1a1a1a 90%, transparent 100%)', // Blend into image
                    zIndex: 2
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            padding: 0
                        }}>
                            {accolades.map((item, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: 'rgba(255,255,255,0.9)'
                                }}>
                                    {/* Red Square Bullet */}
                                    <span style={{
                                        width: '12px',
                                        height: '12px',
                                        backgroundColor: 'var(--color-coral)',
                                        display: 'inline-block',
                                        flexShrink: 0
                                    }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Right Side - Image */}
                <div style={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '600px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: '#000' // Placeholder bg color if image loads slow
                    }}>
                        <img
                            src="/slider/1.png"
                            alt="Yagnesh Pandya"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 20%'
                            }}
                        />
                        {/* Dark Overlay for Text Readability at bottom */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)'
                        }} />
                    </div>
                </div>
            </div>

            {/* Massive Bottom Text Layer */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                zIndex: 3,
                textAlign: 'center',
                paddingBottom: '2vh',
                pointerEvents: 'none' // Let clicks pass through
            }}>
                <Reveal width="100%">
                    <h2 style={{
                        fontSize: '8vw', // Optimized to fit ~19 chars edge-to-edge without cropping
                        width: '100%',
                        fontWeight: 900,
                        color: 'white',
                        lineHeight: 0.85,
                        margin: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        whiteSpace: 'nowrap',
                        textAlign: 'center',
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}>
                        I'M YAGNESH PANDYA.
                    </h2>
                </Reveal>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 968px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                        grid-template-rows: auto 500px;
                    }
                    .about-grid > div:first-child {
                        padding: 60px 20px !important;
                        background: #1a1a1a !important;
                    }
                }
            `}} />
        </section>
    );
};

export default About;
