import React from 'react';
import { Reveal } from './Reveal';

const Contact = () => {
    return (
        <section id="contact" style={{ backgroundColor: '#181818', color: 'white', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 0' }}>

                    {/* Consistent Left-Aligned Header */}
                    <span style={{
                        display: 'block',
                        fontWeight: 800,
                        letterSpacing: '2px',
                        color: 'var(--color-coral)',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem'
                    }}>
                        Get Started
                    </span>
                    <Reveal>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 900,
                            color: 'white',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            lineHeight: 1
                        }}>
                            Ready To Build<br />
                            Your Rich Life?
                        </h2>
                    </Reveal>

                    <p style={{
                        fontSize: '1.2rem',
                        color: '#AAA',
                        marginBottom: '2.5rem',
                        lineHeight: '1.7',
                        maxWidth: '600px'
                    }}>
                        Join thousands of entrepreneurs who are building profitable, sustainable businesses. Get exclusive insights, strategies, and updates delivered straight to your inbox.
                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const email = e.target.email.value;
                            const whatsappMessage = `inquiry from website:%0A%0A*Email:* ${email}`;
                            window.open(`https://wa.me/919998584960?text=${whatsappMessage}`, '_blank');
                        }}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            maxWidth: '600px',
                            margin: '0',
                            flexWrap: 'wrap',
                            alignItems: 'center'
                        }}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            style={{
                                flex: 1,
                                minWidth: '300px',
                                padding: '1.25rem 1.5rem',
                                border: '1px solid #333',
                                borderRadius: '4px',
                                outline: 'none',
                                fontSize: '1rem',
                                fontFamily: 'var(--font-primary)',
                                backgroundColor: '#222',
                                color: 'white',
                                transition: 'border-color 0.2s',
                            }}
                        />
                        <button
                            type="submit"
                            className="btn-coral"
                            style={{
                                fontSize: '1.1rem',
                                padding: '1.25rem 3rem',
                                fontWeight: 700,
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Sign Up
                        </button>
                    </form>

                    <div style={{
                        marginTop: '4rem',
                        paddingTop: '3rem',
                        borderTop: '1px solid #333',
                        display: 'flex',
                        gap: '3rem',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <p style={{
                            fontSize: '0.95rem',
                            color: '#777',
                            marginBottom: '0',
                            fontWeight: 600,
                            textTransform: 'uppercase'
                        }}>
                            Get in touch:
                        </p>
                        <a
                            href="mailto:digitalyagnesh201@gmail.com"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '1.1rem'
                            }}
                        >
                            digitalyagnesh201@gmail.com
                        </a>
                        <a
                            href="https://www.instagram.com/yagneshpandyaofficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '1.1rem'
                            }}
                        >
                            @yagneshpandyaofficial
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
