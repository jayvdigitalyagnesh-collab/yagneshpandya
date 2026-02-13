import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const Workshops = () => {
    return (
        <section id="workshops" style={{
            backgroundColor: '#000000',
            color: 'white',
            padding: 0,
            overflow: 'hidden'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                minHeight: '80vh',
                alignItems: 'center'
            }} className="workshop-grid">

                {/* Content Side with MATCHING CONTAINER PADDING */}
                <div style={{
                    padding: '6rem 3rem 6rem max(2rem, calc((100vw - var(--container-width))/2 + 2rem))', // Matches Container Left Edge
                    backgroundColor: '#111111',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            display: 'block',
                            color: 'var(--color-coral)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.9rem',
                            marginBottom: '1rem'
                        }}>
                            Live Experiences
                        </span>

                        <Reveal>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                fontWeight: 900,
                                lineHeight: 0.95,
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '-1px'
                            }}>
                                Business Mastery<br />
                                <span style={{ color: 'white' }}>Seminars</span>
                            </h2>
                        </Reveal>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#999',
                            lineHeight: 1.7,
                            marginBottom: '2.5rem',
                            maxWidth: '500px'
                        }}>
                            Step away from the screen and into the room where deals happen. Yagnesh's live workshops are intensive, high-energy environments designed to break through your business plateaus.
                        </p>

                        <ul style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            listStyle: 'none',
                            marginBottom: '3rem'
                        }}>
                            {['Mastering Digital Sales', 'Brand Architecture Workshop', 'The Growth Systems Summit'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>
                                    <span style={{ color: 'var(--color-coral)' }}>▶</span> {item}
                                </li>
                            ))}
                        </ul>

                        <a href="#contact" className="btn-coral" style={{
                            display: 'inline-block',
                            textAlign: 'center',
                            minWidth: '220px',
                            padding: '1rem 2rem'
                        }}>
                            See Upcoming Dates
                        </a>
                    </motion.div>
                </div>

                {/* Image Side */}
                <div style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    minHeight: '500px'
                }}>
                    <img
                        src="/p3.png"
                        alt="Yagnesh Workshop"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'bottom',
                            position: 'absolute',
                            inset: 0
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, #111111 0%, transparent 15%)',
                        pointerEvents: 'none'
                    }} />
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .workshop-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .workshop-grid > div:first-child {
                        padding: 4rem 2rem !important; /* Reset padding on mobile */
                    }
                }
            `}} />
        </section>
    );
};

export default Workshops;
