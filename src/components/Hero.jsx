import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const Hero = () => {
    // YouTube Video ID
    const videoId = "sURQUtze_z8";

    return (
        <>


            <section style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
                paddingBottom: '8vh'
            }}>

                {/* CSS Video Background */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100vw',
                    height: '100vh',
                    minWidth: '177.77vh',
                    minHeight: '56.25vw',
                    zIndex: 0,
                    pointerEvents: 'none',
                    overflow: 'hidden'
                }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0`}
                        title="Hero Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: 'scale(1.3)',
                            border: 'none'
                        }}
                    ></iframe>
                </div>

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%)',
                    zIndex: 1
                }} />

                {/* Content - ALIGNED TO GLOBAL CONTAINER */}
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '900px' }}>
                        <Reveal>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)',
                                fontWeight: 900,
                                color: 'white',
                                lineHeight: 0.9,
                                marginBottom: '2rem',
                                textTransform: 'none',
                                letterSpacing: '-1px',
                                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                            }}>
                                Helping Entrepreneurs<br />
                                & Businesses Scale
                            </h1>
                        </Reveal>

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            href="#programs"
                            className="btn-coral"
                            style={{
                                fontSize: '1.1rem',
                                padding: '1.2rem 3rem',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                                display: 'inline-block'
                            }}>
                            Explore Programs & Podcast
                        </motion.a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
