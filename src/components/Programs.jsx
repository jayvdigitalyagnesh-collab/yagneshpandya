import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const Programs = () => {
    const programs = [
        {
            title: 'Digital Yagnesh',
            description: 'Premium digital marketing, branding, and web development for high-growth companies.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            link: 'https://www.digitalyagnesh.com/'
        },
        {
            title: 'Talk With Yagnesh',
            description: 'Deep-dive conversations with entrepreneurs and innovators. Real stories, actionable insights.',
            image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
            link: 'https://www.youtube.com/@talkwithyagnesh'
        }
    ];

    return (
        <section id="programs" style={{ backgroundColor: 'white', padding: 'var(--section-padding)' }}>
            <div className="container">

                {/* Header - Now Left Aligned for Consistency */}
                <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
                    <span style={{
                        display: 'block',
                        fontWeight: 800,
                        letterSpacing: '2px',
                        color: '#AAA',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem'
                    }}>
                        Programs & Products
                    </span>
                    <Reveal>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            lineHeight: 1,
                            marginBottom: '1rem'
                        }}>
                            Step-By-Step Programs For<br />
                            Creating Your <span style={{ color: 'var(--color-coral)' }}>Rich Life</span>
                        </h2>
                    </Reveal>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-gray)',
                        maxWidth: '600px',
                        lineHeight: 1.6
                    }}>
                        Word-for-word scripts and exact tactics, all rigorously tested by thousands of clients.
                    </p>
                </div>

                <div className="grid-2">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            className="card"
                            style={{
                                backgroundColor: 'white',
                                overflow: 'hidden',
                                borderRadius: '8px', // Slightly rounded
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                border: '1px solid #eee'
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '350px', // Taller image for impact
                                overflow: 'hidden',
                                backgroundColor: '#f0f0f0'
                            }}>
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            <div style={{ padding: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '2rem',
                                    marginBottom: '1rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    lineHeight: 1
                                }}>
                                    {program.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-gray)',
                                    marginBottom: '2rem',
                                    lineHeight: '1.7',
                                    fontSize: '1.05rem'
                                }}>
                                    {program.description}
                                </p>
                                <a
                                    href={program.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--color-coral)',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    Get Started →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
