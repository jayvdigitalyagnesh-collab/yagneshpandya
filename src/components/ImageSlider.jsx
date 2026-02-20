import React from 'react';
import { motion } from 'framer-motion';

const ImageSlider = () => {
    // OPTIMIZATION: Distributed all available images (1-27) to maximize loop length and prevent repetition on large screens.
    const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => `/slider/${i}.webp`);
    const row2 = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map(i => `/slider/${i}.webp`);

    const sliderStyle = {
        display: 'flex',
        gap: '20px',
        padding: '10px 0',
        willChange: 'transform', // Hardware acceleration hint
    };

    const imageStyle = {
        height: 'clamp(200px, 30vh, 300px)',
        width: 'auto',
        borderRadius: '16px',
        objectFit: 'cover',
        flexShrink: 0,
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        border: '1px solid #f0f0f0'
    };

    const containerStyle = {
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#fff',
        padding: '80px 0',
        contentVisibility: 'auto', // Skip rendering work if off-screen
        contain: 'content'
    };

    return (
        <section className="image-slider-section" style={containerStyle}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{
                    color: 'black',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    opacity: 0.9
                }}>
                    The Experience In Photos
                </h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    backgroundColor: 'var(--color-coral)',
                    margin: '1.5rem auto'
                }} />
            </div>

            {/* Row 1: Scrolling Left */}
            <div style={{ overflow: 'hidden', marginBottom: '30px' }}>
                <motion.div
                    style={{ ...sliderStyle, width: 'max-content' }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 80, // Slower speed for longer list
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...row1, ...row1].map((src, index) => (
                        <img
                            key={`row1-${index}`}
                            src={src}
                            alt={`Workshop Event ${index}`}
                            style={imageStyle}
                            loading="lazy"
                            decoding="async" // Async decoding to prevent main thread blocking
                        />
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div style={{ overflow: 'hidden' }}>
                <motion.div
                    style={{ ...sliderStyle, width: 'max-content' }}
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                        duration: 70, // Slower speed for longer list
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...row2, ...row2].map((src, index) => (
                        <img
                            key={`row2-${index}`}
                            src={src}
                            alt={`Workshop Event ${index + 15}`}
                            style={imageStyle}
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ImageSlider;
