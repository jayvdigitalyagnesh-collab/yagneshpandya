import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const Podcast = () => {
    return (
        <section id="podcast" style={{
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
            }} className="podcast-grid">

                {/* Image Side (Left) */}
                <div style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    minHeight: '500px',
                    order: 1
                }}>
                    <img
                        src="/slider/23.webp"
                        alt="Talk With Yagnesh Podcast"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            inset: 0
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(-90deg, #111111 0%, transparent 15%)',
                        pointerEvents: 'none'
                    }} />
                </div>

                {/* Content Side (Right) */}
                <div style={{
                    padding: '6rem max(2rem, calc((100vw - var(--container-width))/2 + 2rem)) 6rem 3rem', // Matches Container Right Edge
                    backgroundColor: '#111111',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    order: 2
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
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
                            Listen & Learn
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
                                Talk With Yagnesh<br />
                                <span style={{ color: 'white' }}>Podcast</span>
                            </h2>
                        </Reveal>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#999',
                            lineHeight: 1.7,
                            marginBottom: '2.5rem',
                            maxWidth: '500px'
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
                        </div>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .podcast-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .podcast-grid > div:first-child {
                        order: 2 !important;
                    }
                    .podcast-grid > div:last-child {
                        order: 1 !important;
                        padding: 4rem 2rem !important;
                    }
                }
            `}} />
        </section>
    );
};

export default Podcast;
