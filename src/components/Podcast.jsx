import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const Podcast = () => {
    return (
        <section id="podcast" style={{
            backgroundColor: '#000000', // Matches Footer logic
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            padding: '6rem 0' // Consistent Padding
        }}>
            {/* Background Image / Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2, // Increased slightly
                zIndex: 0
            }} />

            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, #000 0%, rgba(0,0,0,0.6) 100%)', // Gradient to ensure readability on left
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '800px' }}>

                    {/* Consistent Left-Aligned Eyebrow */}
                    <span style={{
                        display: 'block',
                        fontWeight: 800,
                        letterSpacing: '2px',
                        color: 'var(--color-coral)',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem'
                    }}>
                        Listen & Learn
                    </span>

                    <Reveal>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 900,
                            color: 'white',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            lineHeight: 0.95,
                            letterSpacing: '-1px'
                        }}>
                            Talk With Yagnesh<br />Podcast
                        </h2>
                    </Reveal>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: '2.5rem',
                        lineHeight: '1.7',
                        maxWidth: '600px'
                    }}>
                        Real conversations with real entrepreneurs. Decoding success stories, growth strategies, and the mindset behind building profitable businesses.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a
                            href="https://www.youtube.com/@talkwithyagnesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-coral"
                            style={{
                                fontSize: '1rem',
                                padding: '1rem 2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            Watch on YouTube <span>↗</span>
                        </a>

                        <a
                            href="#"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                padding: '1rem 2rem',
                                border: '1px solid rgba(255,255,255,0.3)',
                                borderRadius: '4px',
                                fontWeight: 600,
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            Listen on Spotify
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Podcast;
