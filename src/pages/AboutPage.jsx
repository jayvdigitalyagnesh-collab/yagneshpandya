import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Mic, BookOpen } from 'lucide-react';
import About from '../components/About';
import Contact from '../components/Contact';
import { Reveal } from '../components/Reveal';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            {/* 1. HERO SECTION */}
            <About />

            {/* 2. EARLY LEARNINGS SECTION */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid">
                        <div>
                            <Reveal>
                                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '3rem' }}>
                                    YAGNESH'S <br />
                                    <span style={{ color: 'var(--color-coral)' }}>EARLY LEARNINGS</span>
                                </h2>
                            </Reveal>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    "Started with zero capital, scaling through pure organic strategies.",
                                    "Learned that 'hustle' isn't sustainable—systems are.",
                                    "Discovered that psychology beats technology every time.",
                                    "Built a network of high-net-worth mentors early on.",
                                    "Realized that teaching others is the fastest way to master a skill."
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                        <span style={{ color: 'var(--color-coral)', fontWeight: 900, marginTop: '5px' }}>➤</span>
                                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="/slider/27.webp"
                                alt="Early Days"
                                style={{ width: '100%', borderRadius: '4px', boxShadow: '20px 20px 0 #f0f0f0' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. RICH LIFE GRID */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: '#F8F8F8' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <Reveal width="100%">
                            <h2 className="section-title" style={{ color: 'black' }}>
                                SO WHAT IS YOUR RICH LIFE? <br /> YOU DECIDE.
                            </h2>
                        </Reveal>
                    </div>
                    <div className="grid-3">
                        {[
                            { title: "Time Freedom", img: "/slider/26.webp", desc: "Wake up when you want." },
                            { title: "Global Impact", img: "/slider/25.webp", desc: "Build a brand that matters." },
                            { title: "Generational Wealth", img: "/slider/24.webp", desc: "Secure your family's future." }
                        ].map((card, i) => (
                            <div key={i} style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
                                <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
                                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', color: 'white' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{card.title}</h3>
                                    <p style={{ fontSize: '1rem', opacity: 0.9 }}>{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. NEWSLETTER SIGNUP */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid">
                        <div>
                            <Reveal>
                                <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>Stay In The Know</h2>
                            </Reveal>
                            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                                Be the first to receive new releases, special offers, and more.
                            </p>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <input type="text" placeholder="First Name" style={{ padding: '1rem', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="email" placeholder="Email Address" style={{ padding: '1rem', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <button className="btn-coral" style={{ padding: '1rem', width: '100%', borderRadius: '4px', marginTop: '0.5rem' }}>
                                    Join Now
                                </button>
                            </form>
                        </div>
                        <div>
                            <img
                                src="/slider/22.webp"
                                alt="Yagnesh Meeting"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. STATS BANNER */}
            <section style={{ backgroundColor: '#111', color: 'white', padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid">
                        <img
                            src="/slider/20.webp"
                            alt="Yagnesh Portrait"
                            style={{ width: '100%', borderRadius: '8px', filter: 'grayscale(100%)' }}
                        />
                        <div>
                            <span style={{ color: 'var(--color-coral)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>Expertise</span>
                            <Reveal>
                                <h2 style={{ fontSize: '3rem', fontWeight: 900, margin: '1rem 0 2rem', textTransform: 'uppercase' }}>
                                    Mastering Money & <br /> Building A Rich Life
                                </h2>
                            </Reveal>
                            <div style={{ display: 'flex', gap: '3rem' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>50K+</div>
                                    <div style={{ color: '#888', fontWeight: 600 }}>YouTube<br />Subscribers</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>10M+</div>
                                    <div style={{ color: '#888', fontWeight: 600 }}>Views<br />Generated</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .responsive-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                    .about-page .btn-coral { width: 100%; text-align: center; }
                }
            `}} />
        </div>
    );
};

export default AboutPage;
