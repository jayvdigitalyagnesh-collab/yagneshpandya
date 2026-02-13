import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import Contact from '../components/Contact';

const EventsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
 
    const events = [
        {
            date: "FEB 11",
            title: "RICH LIFE EXPERT SESSIONS: HOW TO BUILD YOUR MONEY HABITS",
            guest: "WITH MIKE MICHALOWICZ",
            description: "Mike Michalowicz is the author of Profit First, Clockwork, and other best-selling books. He joins us to break down how to automate your finances.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
            category: "Expert Session",
            btn: "Register Now"
        },
        {
            date: "FEB 12",
            title: "WEEKLY MONEY REVIEW",
            guest: "",
            description: "Join us for a dedicated hour to review your numbers. Bring your questions and let's get you back on track with your CSP.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            category: "Weekly Money Review",
            btn: "Add to Calendar"
        },
        {
            date: "FEB 17",
            title: "NEW MEMBER ONBOARDING",
            guest: "",
            description: "New to Money Coaching? Start here! We'll cover everything you need to know to get the most out of your program membership.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
            category: "New Member Onboarding",
            btn: "Add to Calendar"
        },
        {
            date: "FEB 17",
            title: "RICH LIFE EXPERT SESSIONS: THE SCIENCE OF GETTING BACK ON TRACK",
            guest: "WITH STEVE KAMB",
            description: "Steve Kamb is the founder of NerdFitness. We'll talk about the psychology of habit formation and how to get back on track when you slip up.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
            category: "Expert Session",
            btn: "Register Now"
        }
    ];

    const pastEvents = [
        "How To Plan A Wedding Without Going Broke",
        "The 5 Numbers You Need To Know Before Buying A House",
        "Investing 101: How To Start From Scratch",
        "How To Negotiate Your Salary (And Get A $10k Raise)",
        "Love & Money: How To Talk To Your Partner About Finances",
        "Travel Hacking: Fly Business Class For Economy Prices",
        "The Psychology Of Spendiing: Why We Buy Things We Don't Need",
        "Retirement Planning For Millennials",
        "How To Start A Side Hustle With $0",
        "Paying Off Student Loans Fast",
        "The Ultimate Guide To Credit Cards",
        "Cryptocurrency: Scam Or Future?",
        "Real Estate Investing For Beginners"
    ];

    return (
        <div className="events-page">

            {/* 1. HERO SECTION */}
            <section style={{
                height: '60vh',
                minHeight: '400px',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2600&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '4rem'
            }}>
                <div className="container">
                    <Reveal>
                        <h1 style={{
                            fontSize: 'clamp(4rem, 10vw, 8rem)',
                            color: 'white',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            lineHeight: 1,
                            textTransform: 'uppercase'
                        }}>
                            Events
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* 2. EVENTS LIST */}
            <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                        {events.map((evt, i) => (
                            <div key={i} className="event-row" style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(300px, 40%) 1fr',
                                gap: '4rem',
                                alignItems: 'center'
                            }}>
                                {/* Image Card */}
                                <div style={{
                                    backgroundColor: '#F3EFEA', // Beige bg from screenshot
                                    padding: '1.5rem',
                                    borderRadius: '4px'
                                }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
                                        <img
                                            src={evt.image}
                                            alt={evt.title}
                                            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                                        />
                                        {/* Overlay styled like the card in screenshot */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            backgroundColor: 'rgba(255,255,255,0.9)',
                                            padding: '1rem'
                                        }}>
                                            <p style={{
                                                fontSize: '0.8rem',
                                                fontWeight: 800,
                                                textTransform: 'uppercase',
                                                marginBottom: '0.2rem',
                                                fontFamily: 'sans-serif'
                                            }}>
                                                {evt.category}
                                            </p>
                                            <p style={{
                                                fontSize: '1rem',
                                                fontWeight: 900,
                                                color: 'var(--color-coral)',
                                                lineHeight: 1.2
                                            }}>
                                                {evt.title.split(':')[1] || evt.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div>
                                    <Reveal>
                                        <h2 style={{
                                            fontSize: '2.5rem',
                                            fontWeight: 900,
                                            textTransform: 'uppercase',
                                            marginBottom: '1.5rem',
                                            lineHeight: 1,
                                            color: 'black'
                                        }}>
                                            {evt.date} – {evt.title} <br />
                                            <span style={{ color: '#555' }}>{evt.guest}</span>
                                        </h2>
                                    </Reveal>
                                    <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '600px' }}>
                                        {evt.description}
                                    </p>
                                    <button className="btn-coral" style={{
                                        padding: '1rem 2.5rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        fontSize: '0.9rem',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {evt.btn}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. JOIN COACHING / PAST EVENTS */}
            <section style={{ padding: '6rem 0', backgroundColor: '#F9F9F9', borderTop: '1px solid #eee' }}>
                <div className="container">
                    <div className="join-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '5rem',
                        alignItems: 'start'
                    }}>
                        {/* Left: Content */}
                        <div>
                            <Reveal>
                                <h2 style={{
                                    fontSize: 'clamp(3rem, 5vw, 4rem)',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    marginBottom: '2rem',
                                    lineHeight: 0.95
                                }}>
                                    Join Money Coaching <br />
                                    And Get All Past <br />
                                    Events
                                </h2>
                            </Reveal>
                            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '2rem' }}>
                                Get instant access to 40+ on-demand trainings inside Money Coaching with Yagnesh Pandya, including:
                            </p>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '0.8rem',
                                marginBottom: '2.5rem'
                            }}>
                                {pastEvents.map((topic, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1rem', color: '#555' }}>
                                        <span style={{ color: 'var(--color-coral)', fontWeight: 900 }}>+</span>
                                        {topic}
                                    </li>
                                ))}
                            </ul>

                            <button className="btn-coral" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', width: '100%' }}>
                                Join Money Coaching Now
                            </button>
                        </div>

                        {/* Right: Image */}
                        <div style={{ height: '100%', minHeight: '600px', position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
                                alt="Yagnesh Working"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .event-row { grid-template-columns: 1fr !important; gap: 2rem !important; }
                    .join-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                }
            `}} />
        </div>
    );
};

export default EventsPage;
