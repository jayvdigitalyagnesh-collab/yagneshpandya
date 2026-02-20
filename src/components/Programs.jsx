import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

import { ArrowUpRight, ShieldCheck, Zap, Globe, TrendingUp, Megaphone, PenTool, Smartphone, Code } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            title: 'Digital Yagnesh',
            tagline: 'STRATEGY & GROWTH',
            description: 'Premium digital marketing, branding, and web development for high-growth companies looking to dominate their market.',
            image: '/dy.webp',
            link: 'https://www.digitalyagnesh.com/',
            icon: <Zap size={20} />
        },
        {
            title: 'Talk With Yagnesh',
            tagline: 'AUTHORITY & MEDIA',
            description: 'Deep-dive conversations with global entrepreneurs. Scaling your authority through cinematic podcasting and storytelling.',
            image: '/podcast.webp',
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
                                Step-By-Step <br /> Programs For A <br /> RICH LIFE
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
                            {/* Visualization Part */}
                            <div style={{
                                order: idx % 2 === 0 ? 1 : 2,
                                height: '500px',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {program.title === 'Digital Yagnesh' ? (
                                    // 1. CUSTOM ANIMATED DIGITAL GALAXY
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        background: '#ffffff',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {/* Background Grid */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                                            backgroundSize: '40px 40px',
                                        }} />

                                        {/* Grid Mask (Fade out grid in center) */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'radial-gradient(circle at center, #ffffff 30%, transparent 70%)',
                                            pointerEvents: 'none'
                                        }} />

                                        {/* Central Core */}
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                zIndex: 10
                                            }}
                                        >
                                            <img
                                                src="/logo.png"
                                                alt="Digital Yagnesh"
                                                style={{ width: '100%', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
                                            />
                                        </motion.div>

                                        {/* Animated Digital Services */}
                                        {[
                                            { src: '/icons/seo.gif', fallback: Globe, color: '#3b82f6', label: 'WEB', x: -120, y: -80, delay: 0 },
                                            { src: '/icons/advertising.gif', fallback: Megaphone, color: '#ef4444', label: 'ADS', x: 120, y: -80, delay: 1 },
                                            { src: '/icons/rocket.gif', fallback: TrendingUp, color: '#22c55e', label: 'GROWTH', x: -120, y: 80, delay: 2 },
                                            { src: '/icons/personal-branding.gif', fallback: PenTool, color: '#a855f7', label: 'BRAND', x: 120, y: 80, delay: 3 },
                                            { src: '/icons/idea.gif', fallback: Smartphone, color: '#f97316', label: 'SOCIAL', x: 0, y: -140, delay: 4 },
                                            { src: '/icons/web-developer.gif', fallback: Code, color: '#06b6d4', label: 'DEV', x: 0, y: 140, delay: 1.5 },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: item.x, y: item.y, opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                animate={{
                                                    y: [item.y - 10, item.y + 10, item.y - 10],
                                                    rotate: [0, 5, -5, 0]
                                                }}
                                                transition={{
                                                    y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                                                    rotate: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
                                                    opacity: { duration: 0.5, delay: i * 0.1 }
                                                }}
                                                style={{
                                                    position: 'absolute',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    cursor: 'pointer'
                                                }}
                                                whileHover={{ scale: 1.2, zIndex: 10 }}
                                            >
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '16px',
                                                    backgroundColor: 'white',
                                                    border: '1px solid #eee',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                }}>
                                                    {/* Fallback Lucide Icon (Visible if image fails) */}
                                                    <item.fallback
                                                        size={28}
                                                        color={item.color}
                                                        style={{
                                                            position: 'absolute',
                                                        }}
                                                    />

                                                    {/* Animated GIF (Overlays the icon) */}
                                                    <img
                                                        src={item.src}
                                                        alt={item.label}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            position: 'relative',
                                                            zIndex: 2
                                                        }}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none'; // Hide broken image to show fallback
                                                        }}
                                                    />
                                                </div>
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: 800,
                                                    color: '#333',
                                                    letterSpacing: '1px'
                                                }}>
                                                    {item.label}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    // 2. STANDARD IMAGE (For other programs)
                                    <>
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
                                    </>
                                )}
                            </div>

                            {/* Content Part */}
                            < div style={{
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
            </div >

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
        </section >
    );
};

export default Programs;
