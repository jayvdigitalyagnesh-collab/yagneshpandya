import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            title: 'Digital Yagnesh',
            tagline: 'STRATEGY & GROWTH',
            description: 'Premium digital marketing, branding, and web development for high-growth companies looking to dominate their market.',
            image: '/dy.png',
            link: 'https://www.digitalyagnesh.com/',
            icon: <Zap size={20} />
        },
        {
            title: 'Talk With Yagnesh',
            tagline: 'AUTHORITY & MEDIA',
            description: 'Deep-dive conversations with global entrepreneurs. Scaling your authority through cinematic podcasting and storytelling.',
            image: '/podcast.png',
            link: 'https://www.youtube.com/@talkwithyagnesh',
            icon: <ShieldCheck size={20} />
        }
    ];

    return (
        <section id="programs" style={{
            backgroundColor: '#ffffff',
            padding: '10rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle Design Element */}
            <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.03) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Section Header */}
                <div style={{ marginBottom: '6rem', maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            fontWeight: 700,
                            letterSpacing: '0.2rem',
                            color: 'var(--color-coral)',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            fontSize: '0.85rem'
                        }}>
                            {/* <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-coral)' }}></span> */}
                            {/* Elite Ecosystem */}
                        </span>

                        <Reveal>
                            <h2 style={{
                                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                lineHeight: 0.9,
                                letterSpacing: '-0.03em',
                                marginBottom: '2rem'
                            }}>
                                Step-By-Step <br /> Programs For A <br />
                                <span style={{
                                    color: 'transparent',
                                    WebkitTextStroke: '1px #000',
                                    fontWeight: 900
                                }}>RICH LIFE</span>
                            </h2>
                        </Reveal>

                        <p style={{
                            fontSize: '1.3rem',
                            color: '#555',
                            maxWidth: '550px',
                            lineHeight: 1.6,
                            fontWeight: 400
                        }}>
                            Battle-tested strategies, word-for-word scripts, and the exact roadmap used by 7+ figure entrepreneurs.
                        </p>
                    </motion.div>
                </div>

                {/* Creative Large Cards */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4rem'
                }}>
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: idx % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                                gap: '0',
                                backgroundColor: '#fff',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                boxShadow: '0 30px 100px rgba(0,0,0,0.06)',
                                border: '1px solid #f0f0f0'
                            }}
                            className="program-creative-card"
                        >
                            {/* Image Part */}
                            <div style={{
                                order: idx % 2 === 0 ? 1 : 2,
                                height: '500px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                                    src={program.image}
                                    alt={program.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 60%)'
                                }} />
                            </div>

                            {/* Content Part */}
                            <div style={{
                                order: idx % 2 === 0 ? 2 : 1,
                                padding: '5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                backgroundColor: '#fff'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    color: 'var(--color-coral)',
                                    marginBottom: '1rem',
                                    fontWeight: 800,
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.1rem'
                                }}>
                                    {program.icon}
                                    {program.tagline}
                                </div>

                                <h3 style={{
                                    fontSize: '3.5rem',
                                    marginBottom: '1.5rem',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    lineHeight: 1,
                                    letterSpacing: '-0.02em'
                                }}>
                                    {program.title}
                                </h3>

                                <p style={{
                                    color: '#666',
                                    marginBottom: '3rem',
                                    lineHeight: '1.8',
                                    fontSize: '1.15rem',
                                    maxWidth: '400px'
                                }}>
                                    {program.description}
                                </p>

                                <motion.a
                                    href={program.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ gap: '1.5rem' }}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        color: '#000',
                                        textDecoration: 'none',
                                        fontWeight: 800,
                                        fontSize: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05rem'
                                    }}
                                >
                                    Explore  <ArrowUpRight size={20} color="var(--color-coral)" strokeWidth={3} />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 1024px) {
                    .program-creative-card {
                        grid-template-columns: 1fr !important;
                    }
                    .program-creative-card > div:first-child { order: 1 !important; height: 350px !important; }
                    .program-creative-card > div:last-child { order: 2 !important; padding: 3rem 2rem !important; }
                }
            `}} />
        </section>
    );
};

export default Programs;
