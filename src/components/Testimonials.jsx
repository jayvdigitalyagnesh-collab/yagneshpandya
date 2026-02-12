import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "When we were dating, we almost always did low budget stuff because we were typical college broke students. Telling my wife to go out in our hometown without worrying about money was a truly special moment.",
            author: "Juan Pablo Beltran",
            label: "CLIENT",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
        },
        {
            quote: "I went from having 20k in debt with 0 savings to debt-free, 120k in savings, automated investing, and having the ability to invest in a female-owned company called Blender Bombs that I've long admired.",
            author: "Alex Vriesman",
            label: "CLIENT",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
        },
        {
            quote: "We stayed in a luxurious Airbnb estate in Cape Town with ocean AND mountain views, then stayed at a luxury resort for the safari... Best trip of our lives so far, and we're planning to go back in a few years!",
            author: "Katie Mild",
            label: "CLIENT",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
        }
    ];

    return (
        <section id="results" style={{ backgroundColor: 'white', padding: '100px 0' }}>
            <div className="container">
                {/* Centered Header Layout matching screenshot */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 900,
                        color: 'black',
                        lineHeight: 1,
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-1px'
                    }}>
                        TIME TESTED.<br />
                        PROVEN RESULTS.
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#444',
                        maxWidth: '750px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-primary)'
                    }}>
                        For nearly 2 decades, we've educated 42,000+ people on how to achieve their<br />
                        richest lives through their money, business, and careers.
                    </p>
                </div>

                {/* Grid Layout conforming to reference */}
                <div className="grid-3" style={{ alignItems: 'stretch', gap: '2rem' }}>
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                backgroundColor: '#F9F9F9', // Light gray card background
                                padding: '3rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                borderRadius: '2px',
                                minHeight: '400px'
                            }}
                        >
                            <div>
                                {/* Large Quote Icon */}
                                <div style={{
                                    fontSize: '4rem',
                                    lineHeight: 1,
                                    fontFamily: 'serif',
                                    color: 'black',
                                    marginBottom: '1rem',
                                    fontWeight: 900
                                }}>
                                    “
                                </div>

                                <p style={{
                                    fontSize: '1.05rem',
                                    lineHeight: '1.6',
                                    marginBottom: '2.5rem',
                                    color: '#111',
                                    fontWeight: 400
                                }}>
                                    {testimonial.quote}
                                </p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                }}>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div>
                                    <div style={{
                                        fontWeight: 800,
                                        fontSize: '0.95rem',
                                        color: 'black',
                                        marginBottom: '2px'
                                    }}>
                                        {testimonial.author}
                                    </div>
                                    <div style={{
                                        color: '#888',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        {testimonial.label}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
