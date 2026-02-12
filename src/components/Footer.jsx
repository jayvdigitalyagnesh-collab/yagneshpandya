import React from 'react';
import { Instagram, Youtube, Linkedin, Twitter, Music, Disc } from 'lucide-react'; // Added generic icons for Podcast/Spotify

const Footer = () => {
    const mediaLogos = [
        "THE TIM FERRISS SHOW",
        "NETFLIX",
        "FOX BUSINESS",
        "THE WALL STREET JOURNAL",
        "CNN",
        "CNBC",
        "PBS",
        "abc NEWS"
    ];

    const footerLinks = [
        "About Us",
        "Calculators", // Keeping generic or changing to relevant like "Resources"
        "Books",
        "Podcast",
        "Netflix", // Maybe "Press" for Yagnesh
        "Blog",
        "Programs",
        "Contact Us"
    ];

    return (
        <footer>
            {/* 1. TOP MEDIA BAR (White) */}
            <div style={{ backgroundColor: 'white', padding: '4rem 0', borderBottom: '1px solid #eee' }}>
                <div className="container">
                    <div className="media-grid" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        opacity: 0.4
                    }}>
                        {mediaLogos.map((logo, i) => (
                            <span key={i} style={{
                                fontSize: '1.2rem',
                                fontWeight: 900,
                                fontFamily: 'var(--font-primary)',
                                textTransform: 'uppercase',
                                color: '#000',
                                textAlign: 'center'
                            }}>
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. MAIN FOOTER (Black) */}
            <div style={{ backgroundColor: 'black', color: 'white', padding: '5rem 0 3rem' }}>
                <div className="container">
                    <div className="footer-main-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr 1fr', // Logo | Form | Links
                        gap: '4rem'
                    }}>

                        {/* COLUMN 1: LOGO */}
                        <div>
                            <span style={{
                                fontFamily: '"Satisfy", cursive',
                                fontSize: '3rem',
                                color: 'white',
                                lineHeight: 1
                            }}>
                                DY
                            </span>
                            <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '0.5rem' }}>Digital Yagnesh</p>
                        </div>

                        {/* COLUMN 2: NEWSLETTER FORM */}
                        <div style={{ maxWidth: '500px' }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Stay in the know</h3>
                            <p style={{ color: '#999', marginBottom: '2rem', lineHeight: 1.5 }}>
                                Be the first one to receive new releases, special offers, and more
                            </p>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'none' }}>First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem 0',
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            borderBottom: '1px solid #444',
                                            color: 'white',
                                            fontSize: '1rem',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'none' }}>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem 0',
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            borderBottom: '1px solid #444',
                                            color: 'white',
                                            fontSize: '1rem',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                                <button className="btn-coral" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '4px',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    marginTop: '1rem',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}>
                                    Join Now
                                </button>
                            </form>
                        </div>

                        {/* COLUMN 3: LINKS */}
                        <div style={{ paddingLeft: '2rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {footerLinks.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500 }}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 3. BOTTOM BAR */}
                    <div style={{
                        marginTop: '5rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid #222',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '2rem'
                    }} className="footer-bottom">

                        {/* Left: Copyright & Links */}
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <span style={{ color: '#666', fontSize: '0.85rem' }}>
                                Copyright Digital Yagnesh © {new Date().getFullYear()}
                            </span>
                            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '0.85rem' }}>Disclosure & Terms and Conditions</a>
                            <span style={{ color: '#666', fontSize: '0.85rem' }}>Built with ❤️ by AntiGravity</span>
                        </div>

                        {/* Right: Social & Login */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: '#666', fontSize: '0.9rem', marginRight: '0.5rem' }}>Find Us on Social Media:</span>
                                <a href="#" style={{ color: 'white' }}><Instagram size={20} /></a>
                                <a href="#" style={{ color: 'white' }}><Twitter size={20} /></a>
                                <a href="#" style={{ color: 'white' }}><Youtube size={20} /></a>
                                <a href="#" style={{ color: 'white' }}><Music size={20} /></a>
                            </div>
                            <button className="btn-coral" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                                Student Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .media-grid { justify-content: center !important; gap: 1.5rem !important; }
                    .footer-main-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                    .footer-bottom { flexDirection: column; align-items: flex-start; gap: 2rem; }
                    .footer-main-grid > div:last-child { padding-left: 0 !important; }
                }
            `}} />
        </footer>
    );
};

export default Footer;
