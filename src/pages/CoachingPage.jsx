import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Play, ArrowRight, Star } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const CoachingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const events = [
        { title: "Money Coaching Member Stories: Meet Sheena", date: "Tuesday, Feb 18 @ 5pm PT", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800" },
        { title: "How To Build Your Money Habits", date: "Friday, Feb 21 @ 12pm PT", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800" },
        { title: "Weekly Money Review", date: "Monday, Feb 24 @ 9am PT", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
        { title: "New Member Onboarding", date: "Tuesday, Feb 25 @ 6pm PT", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" },
        { title: "The Science Of Getting Back On Track", date: "Thursday, Feb 27 @ 11am PT", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800" }
    ];

    const recordings = [
        "Your Money Map to $100K",
        "Money For Aging Parents",
        "The Five Numbers To Know Before You Buy A House",
        "The Secrets Behind My Best Trips: How I Find the Upgrades Most Travelers Miss"
    ];

    return (
        <div className="coaching-page">
            {/* 1. HERO SECTION */}
            <section style={{
                height: '80vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2600"
                        alt="Crowd at Event"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }}
                    />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 900, lineHeight: 0.9, marginBottom: '2rem', textTransform: 'uppercase' }}
                    >
                        The Fast Track <br /> To A <span style={{ color: 'var(--color-coral)' }}>Rich Life</span>
                    </motion.h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Join the program that has helped thousands of people take control of their finances and live their Rich Life.
                    </p>
                    <button className="btn-coral" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem', fontWeight: 700 }}>Join Now</button>
                </div>
            </section>

            {/* 2. INSTANT CONTROL */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: 'white', textAlign: 'center' }}>
                <div className="container">
                    <Reveal width="100%">
                        <h2 className="section-title" style={{ color: 'black', marginBottom: '1rem' }}>
                            INSTANT CONTROL OVER <br /> YOUR MONEY
                        </h2>
                    </Reveal>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: '#666' }}>
                        Stop wondering where your money goes. Use our battle-tested systems to automate your finances and save hours every month.
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200"
                        alt="Workbook Preview"
                        style={{ width: '80%', maxWidth: '800px', margin: '0 auto', display: 'block', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', borderRadius: '8px' }}
                    />
                </div>
            </section>

            {/* 3. GET ANSWERS FAST (Dark) - UPDATED TO MATCH SCREENSHOT */}
            <section style={{ padding: '6rem 0', backgroundColor: 'black', color: 'white' }}>
                <div className="container">
                    <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 40%) 1fr', gap: '5rem', alignItems: 'center' }}>
                        {/* Text Content */}
                        <div>
                            <Reveal>
                                <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase', lineHeight: 1 }}>
                                    Get Answers Fast
                                </h2>
                            </Reveal>
                            <p style={{ fontSize: '1.2rem', color: '#e0e0e0', lineHeight: 1.6, marginBottom: '2rem' }}>
                                Get clear answers from Yagnesh on live group calls. Be part of a community that pushes you forward. Work through the money issues that keep slowing you down.
                            </p>
                        </div>

                        {/* Video Container with Double Border Effect */}
                        <div style={{ position: 'relative', padding: '15px' }}>
                            {/* Outer White Border */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                border: '1px solid rgba(255,255,255,0.8)',
                                borderRadius: '24px',
                                pointerEvents: 'none'
                            }}></div>

                            {/* Inner Video Box */}
                            <div style={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                aspectRatio: '16/9',
                                backgroundColor: '#111'
                            }}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/sURQUtze_z8?controls=0"
                                    title="Get Answers Video"
                                    style={{ border: 'none' }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ONGOING SUPPORT (Light) */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: 'white' }}>
                <div className="container">
                    <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800"
                                alt="Support Team"
                                style={{ width: '100%', borderRadius: '8px', boxShadow: '20px 20px 0 #eee' }}
                            />
                        </div>
                        <div>
                            <Reveal>
                                <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase' }}>Ongoing Support</h2>
                            </Reveal>
                            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.6, marginBottom: '2rem' }}>
                                Building a Rich Life isn't a one-time event. It's a journey. We'll be there with you every step of the way to ensure you stay on track.
                            </p>
                            <button className="btn-coral">See Membership Plans</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA MID-PAGE */}
            <section style={{
                padding: '6rem 0',
                background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1600)',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <Reveal width="100%">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>Join Now & Start Building Your Rich Life</h2>
                    </Reveal>
                    <button className="btn-coral" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>Join Now</button>
                </div>
            </section>

            {/* 6. UPCOMING EVENTS */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: '#FAFAFA' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <Reveal width="100%">
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem', color: 'black' }}>
                            UPCOMING EVENTS FOR MEMBERS
                        </h2>
                    </Reveal>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {events.map((evt, i) => (
                            <div key={i} style={{
                                display: 'grid', gridTemplateColumns: 'minmax(200px, 30%) 1fr', gap: '2rem',
                                backgroundColor: 'white', padding: '1.5rem', alignItems: 'center', border: '1px solid #eee'
                            }} className="event-card">
                                <img src={evt.img} alt={evt.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>{evt.title}</h3>
                                    <p style={{ color: 'var(--color-coral)', fontWeight: 600, marginBottom: '1.5rem' }}>{evt.date}</p>
                                    <button className="btn-coral" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Count Me In</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. RECORDINGS INCLUDED */}
            <section style={{ padding: 'var(--section-padding)', backgroundColor: 'white' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <Reveal>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '2.5rem' }}>
                            RECORDINGS INCLUDED <br /> IN MONEY COACHING
                        </h2>
                    </Reveal>
                    <p style={{ marginBottom: '3rem', color: '#666', fontSize: '1.1rem' }}>
                        Instant access to deep-dive workshops on specific financial topics.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {recordings.map((rec, i) => (
                            <div key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{rec}</h3>
                                <p style={{ color: '#666', marginBottom: '1rem' }}>
                                    Detailed step-by-step walkthroughs to master this specific area of your financial life.
                                </p>
                                <button style={{
                                    backgroundColor: 'transparent', color: 'var(--color-coral)',
                                    border: 'none', fontWeight: 700, textTransform: 'uppercase',
                                    cursor: 'pointer', padding: 0
                                }}>
                                    Read More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section style={{
                height: '600px',
                background: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600) no-repeat center center/cover',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <Reveal width="100%">
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase' }}>
                            Join Now & Implement Your <br /> Financial Plan in 48 Hours
                        </h2>
                    </Reveal>
                    <button className="btn-coral" style={{ padding: '1.5rem 4rem', fontSize: '1.3rem' }}>Join Now</button>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .event-card { grid-template-columns: 1fr !important; }
                    .responsive-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                    h1 { font-size: 3rem !important; }
                }
            `}} />
        </div>
    );
};

export default CoachingPage;
