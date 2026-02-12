import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Mic, BookOpen } from 'lucide-react';
import About from '../components/About'; // The "I'M YAGNESH" Hero
import Contact from '../components/Contact';
import { Reveal } from '../components/Reveal';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mediaLogos = ["FORBES", "ENTREPRENEUR", "INC.", "FAST COMPANY", "BUSINESS INSIDER"];

    return (
        <div className="about-page">
            {/* 1. HERO SECTION (Already Built) */}
            <About />

            {/* 2. MEDIA BAR */}
            <div style={{ borderBottom: '1px solid #eee', padding: '2rem 0', backgroundColor: 'white' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', opacity: 0.5 }}>
                    {mediaLogos.map((logo, i) => (
                        <span key={i} style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'var(--font-primary)', letterSpacing: '2px', color: '#888' }}>
                            {logo}
                        </span>
                    ))}
                </div>
            </div>

            {/* 3. EARLY LEARNINGS SECTION */}
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
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
                                alt="Early Days"
                                style={{ width: '100%', borderRadius: '4px', boxShadow: '20px 20px 0 #f0f0f0' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. RICH LIFE GRID */}
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
                            { title: "Time Freedom", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", desc: "Wake up when you want." },
                            { title: "Global Impact", img: "https://images.unsplash.com/photo-1526304640152-d4619684e484?w=800", desc: "Build a brand that matters." },
                            { title: "Generational Wealth", img: "https://images.unsplash.com/photo-1565514020176-dbf2277478d3?w=800", desc: "Secure your family's future." }
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

            {/* 5. NEWSLETTER SIGNUP */}
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
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000"
                                alt="Yagnesh Meeting"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. STATS BANNER */}
            <section style={{ backgroundColor: '#111', color: 'white', padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000"
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

            {/* 7. BOOKS / PRODUCTS */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: '#F0F0F0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid">
                        <div style={{ order: 2 }}>{/* Text Side on Right */}
                            <Reveal>
                                <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                                    Creator of Premium <br /> Digital Programs
                                </h2>
                            </Reveal>
                            <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
                                Rigorously tested systems to help you start a business, find your dream job, or master your productivity.
                            </p>
                            <a href="#" className="btn-coral" style={{ padding: '1rem 2rem' }}>View All Programs</a>
                        </div>
                        <div style={{ order: 1 }}>
                            <img
                                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000"
                                alt="Programs"
                                style={{ width: '100%', transform: 'rotate(-2deg)', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. PODCAST DARK SECTION */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: 'black', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                    <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '600px' }}>
                        <Reveal>
                            <h2 style={{ fontSize: '3.5rem', lineHeight: 1, marginBottom: '2rem', textTransform: 'uppercase' }}>
                                The Talk With <br /> Yagnesh Podcast
                            </h2>
                        </Reveal>
                        <a href="#" className="btn-coral" style={{ padding: '1rem 2rem' }}>Listen Now</a>
                    </div>
                </div>
            </section>

            {/* Footer CTAs included in Contact or Footer component */}

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
