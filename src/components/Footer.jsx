import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#000000',
            padding: '5rem 0 3rem',
            color: 'white',
            borderTop: '1px solid #222'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 3fr',
                    gap: '4rem',
                    alignItems: 'start'
                }} className="footer-grid">

                    {/* Logo Column */}
                    <div>
                        <span style={{
                            fontFamily: '"Satisfy", cursive',
                            fontSize: '2.5rem',
                            color: 'white',
                            lineHeight: 1
                        }}>
                            YP
                        </span>
                        <p style={{
                            color: '#666',
                            fontSize: '0.9rem',
                            marginTop: '1rem',
                            lineHeight: 1.6
                        }}>
                            Strategist. Speaker. Growth Architect.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <span style={{ color: '#444', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Menu</span>
                            <a href="#about" style={{ color: '#DDD', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>About</a>
                            <a href="#programs" style={{ color: '#DDD', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>Programs</a>
                            <a href="#podcast" style={{ color: '#DDD', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>Podcast</a>
                            <a href="#contact" style={{ color: '#DDD', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>Contact</a>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <span style={{ color: '#444', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Social</span>
                            <a href="https://www.instagram.com/yagneshpandyaofficial/" target="_blank" rel="noopener noreferrer" style={{ color: '#DDD', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>Instagram</a>
                            <a href="https://www.youtube.com/@talkwithyagnesh" target="_blank" rel="noopener noreferrer" style={{ color: '#DDD', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>YouTube</a>
                            <a href="https://www.linkedin.com/in/yagneshpandya/" target="_blank" rel="noopener noreferrer" style={{ color: '#DDD', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>LinkedIn</a>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <span style={{ color: '#444', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Legal</span>
                            <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
                            <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: '5rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid #1a1a1a',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{
                        color: '#444',
                        fontSize: '0.85rem'
                    }}>
                        © {new Date().getFullYear()} Yagnesh Pandya. All Rights Reserved.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', color: '#444' }}>
                        <Instagram size={18} />
                        <Youtube size={18} />
                        <Linkedin size={18} />
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
            @media (max-width: 768px) {
                .footer-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            }
        `}} />
            </div>
        </footer>
    );
};

export default Footer;
