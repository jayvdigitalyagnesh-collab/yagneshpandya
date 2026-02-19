import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

const EventsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const eventMedia = [
        { type: 'video', src: '/event/WhatsApp Video 2026-02-19 at 4.22.31 PM.mp4' },
        { type: 'video', src: '/event/WhatsApp Video 2026-02-19 at 4.23.56 PM.mp4' },
        { type: 'image', src: '/event/WhatsApp Image 2026-02-19 at 4.30.47 PM.jpeg' },
        { type: 'video', src: '/event/WhatsApp Video 2026-02-19 at 4.28.34 PM.mp4' },
        { type: 'image', src: '/event/WhatsApp Image 2026-02-19 at 4.31.15 PM.jpeg' },
        { type: 'video', src: '/event/WhatsApp Video 2026-02-19 at 4.29.09 PM.mp4' },
        { type: 'image', src: '/event/WhatsApp Image 2026-02-19 at 4.32.16 PM.jpeg' },
        { type: 'video', src: '/event/WhatsApp Video 2026-02-19 at 4.29.43 PM.mp4' },
        { type: 'image', src: '/event/WhatsApp Image 2026-02-19 at 4.33.11 PM.jpeg' },
        { type: 'video', src: '/event/WhatsApp Video 2026-02-19 at 4.30.21 PM.mp4' },
        { type: 'image', src: '/event/WhatsApp Image 2026-02-19 at 4.34.32 PM.jpeg' },
        { type: 'video', src: '/event/WhatsApp Video 2026-02-19 at 4.36.43 PM.mp4' },
        { type: 'image', src: '/event/WhatsApp Image 2026-02-19 at 4.35.03 PM (1).jpeg' },
        { type: 'image', src: '/event/WhatsApp Image 2026-02-19 at 4.35.03 PM.jpeg' },
    ];

    return (
        <div className="events-page" style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>

            {/* 1. HERO SECTION */}
            <section className="events-hero" style={{
                height: '100vh',
                minHeight: '600px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '8rem',
                overflow: 'hidden',
                backgroundColor: '#000'
            }}>
                <div className="hero-video-container" style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.8 // Brighter than the original 0.6, but maintains premium depth
                }}>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        src="/event/YAGNESHBAHI_REEL.mp4"
                    />
                    {/* Dark gradient for white text contrast */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)'
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Reveal>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            lineHeight: 1,
                            textTransform: 'uppercase',
                            margin: 0,
                            color: '#fff'
                        }}>
                            Events
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '600px',
                            marginTop: '1.5rem',
                            opacity: 1,
                            lineHeight: 1.4,
                            fontWeight: 500,
                            color: '#fff'
                        }}>
                            Scaling businesses and transforming lives across the globe.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* 2. MEDIA GALLERY SECTION */}
            <section style={{ padding: '8rem 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <Reveal>
                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            marginBottom: '4rem',
                            textAlign: 'center',
                            color: '#000'
                        }}>
                            Moments into Memories
                        </h2>
                    </Reveal>

                    <div className="media-masonry" style={{
                        columns: '3 300px',
                        columnGap: '24px',
                        width: '100%'
                    }}>
                        {eventMedia.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    breakInside: 'avoid',
                                    marginBottom: '24px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '16px',
                                    border: '1px solid #f0f0f0',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                    display: 'block'
                                }}
                            >
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={`Event ${index}`}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA SECTION */}
            <section style={{
                padding: '10rem 0',
                textAlign: 'center',
                backgroundColor: '#0a0a0a'
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <Reveal width="100%">
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase', color: '#fff' }}>
                            Want us at your next event?
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '4rem', color: '#ccc' }}>
                            Book Yagnesh Pandya for keynotes, workshops, or business scaling sessions.
                        </p>
                    </Reveal>
                    <Reveal width="100%" delay={0.4}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                            <a href="/contact" className="btn-coral" style={{
                                padding: '1.5rem 4rem',
                                fontSize: '1.2rem',
                                borderRadius: '50px',
                                fontWeight: 700,
                                textDecoration: 'none',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                Get in Touch
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .media-grid::-webkit-scrollbar { display: none; }
                @media (max-width: 900px) {
                    .events-hero { height: auto !important; min-height: 100vh !important; padding: 12rem 0 4rem !important; flex-direction: column !important; justify-content: flex-start !important; }
                    .hero-video-container { position: relative !important; order: 2 !important; width: 100% !important; justify-content: center !important; padding: 2rem 0 !important; }
                    .hero-video-box { width: 90% !important; height: 600px !important; }
                }
                @media (max-width: 768px) {
                    .media-grid { grid-template-columns: 1fr !important; grid-auto-rows: auto !important; }
                    .media-grid > div { height: 177.7vw !important; max-height: 700px !important; }
                }
            `}} />
        </div>
    );
};

export default EventsPage;
