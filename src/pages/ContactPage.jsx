import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Youtube, Linkedin, Send } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('userName');
        const email = formData.get('userEmail');
        const subject = formData.get('userSubject');
        const message = formData.get('userMessage');

        const whatsappMessage = `inquiry from website:%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
        window.open(`https://wa.me/919998584960?text=${whatsappMessage}`, '_blank');
    };

    return (
        <div className="contact-page" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            {/* 1. HERO SECTION */}
            <section style={{ padding: '12rem 0 8rem', backgroundColor: '#000', color: 'white' }}>
                <div className="container">
                    <Reveal>
                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                            fontWeight: 900,
                            lineHeight: 0.9,
                            textTransform: 'uppercase',
                            letterSpacing: '-2px',
                            marginBottom: '2rem'
                        }}>
                            Get In <br />
                            <span style={{ color: 'var(--color-coral)' }}>Touch</span>
                        </h1>
                    </Reveal>
                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '600px',
                        lineHeight: 1.6,
                        opacity: 0.8
                    }}>
                        Have a question? Interested in working together? Or just want to say hello? Drop a message below and I'll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            {/* 2. CONTACT CONTENT */}
            <section style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
                        gap: '6rem'
                    }} className="contact-grid">

                        {/* LEFT: FORM */}
                        <div>
                            <Reveal>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '3rem', textTransform: 'uppercase' }}>
                                    Send A Message
                                </h2>
                            </Reveal>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                        <label style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', color: '#666' }}>Full Name</label>
                                        <input
                                            type="text"
                                            name="userName"
                                            placeholder="Your Name"
                                            required
                                            style={{
                                                padding: '1.2rem',
                                                border: 'none',
                                                backgroundColor: '#F3F3F3',
                                                borderRadius: '4px',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                borderBottom: '2px solid transparent',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onFocus={(e) => e.target.style.borderBottom = '2px solid var(--color-coral)'}
                                            onBlur={(e) => e.target.style.borderBottom = '2px solid transparent'}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                        <label style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', color: '#666' }}>Email Address</label>
                                        <input
                                            type="email"
                                            name="userEmail"
                                            placeholder="Your Email"
                                            required
                                            style={{
                                                padding: '1.2rem',
                                                border: 'none',
                                                backgroundColor: '#F3F3F3',
                                                borderRadius: '4px',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                borderBottom: '2px solid transparent',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onFocus={(e) => e.target.style.borderBottom = '2px solid var(--color-coral)'}
                                            onBlur={(e) => e.target.style.borderBottom = '2px solid transparent'}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', color: '#666' }}>Subject</label>
                                    <input
                                        type="text"
                                        name="userSubject"
                                        placeholder="What are you interested in?"
                                        style={{
                                            padding: '1.2rem',
                                            border: 'none',
                                            backgroundColor: '#F3F3F3',
                                            borderRadius: '4px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            borderBottom: '2px solid transparent',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onFocus={(e) => e.target.style.borderBottom = '2px solid var(--color-coral)'}
                                        onBlur={(e) => e.target.style.borderBottom = '2px solid transparent'}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', color: '#666' }}>Message</label>
                                    <textarea
                                        rows="6"
                                        name="userMessage"
                                        placeholder="How can I help you?"
                                        required
                                        style={{
                                            padding: '1.2rem',
                                            border: 'none',
                                            backgroundColor: '#F3F3F3',
                                            borderRadius: '4px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            resize: 'none',
                                            borderBottom: '2px solid transparent',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onFocus={(e) => e.target.style.borderBottom = '2px solid var(--color-coral)'}
                                        onBlur={(e) => e.target.style.borderBottom = '2px solid transparent'}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-coral" style={{
                                    padding: '1.25rem',
                                    borderRadius: '4px',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}>
                                    Submit Message <Send size={20} />
                                </button>
                            </form>
                        </div>

                        {/* RIGHT: CONTACT INFO */}
                        <div style={{
                            backgroundColor: '#000',
                            color: 'white',
                            padding: '4rem',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3rem'
                        }} className="info-card">
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--color-coral)' }}>CONTACT INFO</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '50%' }}>
                                            <Mail size={24} color="var(--color-coral)" />
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', fontWeight: 700 }}>Email Us</p>
                                            <a href="mailto:digitalyagnesh201@gmail.com" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}>digitalyagnesh201@gmail.com</a>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '50%' }}>
                                            <Phone size={24} color="var(--color-coral)" />
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', fontWeight: 700 }}>WhatsApp</p>
                                            <a href="https://wa.me/919998584960" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}>+91 99985 84960</a>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '50%' }}>
                                            <MapPin size={24} color="var(--color-coral)" />
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', fontWeight: 700 }}>Location</p>
                                            <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>Ahmedabad, Gujarat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--color-coral)' }}>FOLLOW US</h3>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {[
                                        { Icon: Instagram, link: "https://instagram.com/yagneshpandyaofficial" },
                                        { Icon: Youtube, link: "https://youtube.com/@talkwithyagnesh" },
                                        { Icon: Linkedin, link: "https://linkedin.com/in/yagneshpandya" }
                                    ].map(({ Icon, link }, i) => (
                                        <a
                                            key={i}
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                padding: '1.2rem',
                                                borderRadius: '50%',
                                                color: 'white',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-coral)'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
                                        >
                                            <Icon size={24} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .contact-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
                    .info-card { padding: 2.5rem !important; }
                    .contact-grid > div:first-child { order: 2; }
                    .contact-grid > div:last-child { order: 1; }
                }
            `}} />
        </div>
    );
};

export default ContactPage;
