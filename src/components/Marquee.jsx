import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    const keywords = [
        "BRANDING",
        "PODCASTING",
        "STRATEGY",
        "GROWTH",
        "AUTHORITY",
        "IMPACT",
        "BRANDING",
        "PODCASTING",
        "STRATEGY",
        "GROWTH",
        "AUTHORITY",
        "IMPACT"
    ];

    return (
        <div style={{
            backgroundColor: '#D4AF37',
            padding: '1.2rem 0',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            zIndex: 5
        }}>
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <motion.div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4rem',
                        paddingRight: '4rem'
                    }}
                    animate={{
                        x: [0, "-100%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50,
                            ease: "linear",
                        },
                    }}
                >
                    {keywords.map((word, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4rem'
                        }}>
                            <span style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
                                fontWeight: 900,
                                color: 'black',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '1px'
                            }}>
                                {word}
                            </span>
                            <span style={{
                                fontSize: '1.5rem',
                                color: 'rgba(0,0,0,0.5)',
                            }}>
                                ★
                            </span>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4rem',
                        paddingRight: '4rem'
                    }}
                    animate={{
                        x: [0, "-100%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50,
                            ease: "linear",
                        },
                    }}
                >
                    {keywords.map((word, i) => (
                        <div key={i + 'repeat'} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4rem'
                        }}>
                            <span style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
                                fontWeight: 900,
                                color: 'black',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '1px'
                            }}>
                                {word}
                            </span>
                            <span style={{
                                fontSize: '1.5rem',
                                color: 'rgba(0,0,0,0.5)',
                            }}>
                                ★
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
