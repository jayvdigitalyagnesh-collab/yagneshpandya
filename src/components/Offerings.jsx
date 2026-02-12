import React from 'react';
import { Youtube, Globe, TrendingUp, Mic2, Briefcase, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Offerings = () => {
    const offerings = [
        {
            title: 'Talk With Yagnesh',
            tagline: 'The Media Wing',
            description: 'Insights from the brightest minds in business and tech. Decoding success stories one episode at a time.',
            icon: <Mic2 size={40} />,
            link: 'https://www.youtube.com/@talkwithyagnesh',
            action: 'Watch on YouTube',
            color: '#FF0000'
        },
        {
            title: 'Digital Yagnesh',
            tagline: 'The Solutions Wing',
            description: 'Premium digital marketing, branding, and web systems for high-growth companies.',
            icon: <Briefcase size={40} />,
            link: 'https://www.digitalyagnesh.com/',
            action: 'Explore Agency',
            color: 'var(--color-gold)'
        }
    ];

    return (
        <section id="offerings" className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <span className="section-tag">A Diverse Ecosystem</span>
                <h2 className="section-title">One Vision, <span className="text-gold">Multiple Pillars.</span></h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="offerings-grid">
                {offerings.map((offering, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -10 }}
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '4rem',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Background Icon */}
                        <div style={{
                            position: 'absolute',
                            right: '-2rem',
                            top: '-2rem',
                            opacity: 0.05,
                            transform: 'scale(4)',
                            color: offering.color
                        }}>
                            {offering.icon}
                        </div>

                        <div>
                            <div style={{ color: offering.color, marginBottom: '1.5rem' }}>{offering.icon}</div>
                            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--text-muted)' }}>{offering.tagline}</span>
                            <h3 style={{ fontSize: '2.5rem', margin: '1rem 0', fontFamily: 'var(--font-serif)' }}>{offering.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>{offering.description}</p>
                        </div>

                        <a href={offering.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ alignSelf: 'flex-start' }}>
                            {offering.action}
                        </a>
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {[
                    { icon: <TrendingUp className="text-gold" />, title: 'Market Strategy', desc: 'Customized blueprints for dominance.' },
                    { icon: <Globe className="text-gold" />, title: 'Global Branding', desc: 'Crafting identities that resonate.' },
                    { icon: <Zap className="text-gold" />, title: 'AI Implementation', desc: 'Future-proofing through technology.' }
                ].map((item, idx) => (
                    <div key={idx} style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
                        <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 900px) {
          .offerings-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
        </section>
    );
};

export default Offerings;
