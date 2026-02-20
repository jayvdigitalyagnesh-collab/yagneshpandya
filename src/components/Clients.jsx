import React from 'react';
import { Reveal } from './Reveal';

const Clients = () => {
    const clientLogos = [
        { id: 1, name: "reliace", logo: "/assets/clients/reliace.webp" },
        { id: 2, name: "martinoz", logo: "/assets/clients/martinoz.webp" },
        { id: 3, name: "bjp", logo: "/assets/clients/bjp.webp" },
        { id: 4, name: "gujarat police", logo: "/assets/clients/gujarat_police.webp" },
        { id: 5, name: "saregama", logo: "/assets/clients/saregama.webp" },
        { id: 6, name: "ahmedabad traffic", logo: "/assets/clients/ahmedabad_traffic.webp" },
        { id: 7, name: "k3", logo: "/assets/clients/k3.webp" },
        { id: 8, name: "aacore", logo: "/assets/clients/aacore.webp" },
        { id: 9, name: "mandli group", logo: "/assets/clients/mandli_group.webp" },
        { id: 10, name: "rk international", logo: "/assets/clients/rk_international.webp" },
        { id: 11, name: "pulsova global", logo: "/assets/clients/pulsova_global.webp" },
        { id: 12, name: "air tours", logo: "/assets/clients/air_tours.webp" },
        { id: 13, name: "sakhnapara publicity", logo: "/assets/clients/sakhnapara_publicity.webp" },
        { id: 14, name: "aj corporation", logo: "/assets/clients/aj_corporation.webp" },
        { id: 15, name: "gandhinagar university", logo: "/assets/clients/gandhinagar_university.webp" },
        { id: 16, name: "jagran", logo: "/assets/clients/jagran.webp" },
        { id: 17, name: "shanti juniors", logo: "/assets/clients/shanti_juniors.webp" },
        { id: 18, name: "credorbit", logo: "/assets/clients/credorbit.webp" },
        { id: 19, name: "quitchat", logo: "/assets/clients/quitchat.webp" },
        { id: 20, name: "chand's financial", logo: "/assets/clients/chands_financial.webp" },
        { id: 21, name: "kj barbour", logo: "/assets/clients/kj_barbour.webp" },
        { id: 22, name: "swaad ka safar", logo: "/assets/clients/swaad_ka_safar.webp" },
        { id: 23, name: "visat motors", logo: "/assets/clients/visat_motors.webp" },
        { id: 24, name: "trigno pizza", logo: "/assets/clients/trigno_pizza.webp" },
        { id: 25, name: "satkrupa group", logo: "/assets/clients/satkrupa_group.webp" },
        { id: 26, name: "memsaab", logo: "/assets/clients/memsaab.webp" },
        { id: 27, name: "ares cafe", logo: "/assets/clients/ares_cafe.webp" },
        { id: 28, name: "ample dreams", logo: "/assets/clients/ample_dreams.webp" },
        { id: 29, name: "haikoo", logo: "/assets/clients/haikoo.webp" },
        { id: 30, name: "podar jumbo", logo: "/assets/clients/podar_jumbo.webp" },
        { id: 31, name: "road saathi", logo: "/assets/clients/road_saathi.webp" },
        { id: 32, name: "moonlight", logo: "/assets/clients/moonlight.webp" },
        { id: 33, name: "krishna skin clinic", logo: "/assets/clients/krishna_skin_clinic.webp" },
        { id: 34, name: "prachin holistic care", logo: "/assets/clients/prachin_holistic_care.webp" },
        { id: 35, name: "leela club", logo: "/assets/clients/leela_club.webp" },
        { id: 36, name: "elegnati", logo: "/assets/clients/elegnati.webp" },
        { id: 37, name: "jay silver", logo: "/assets/clients/jay_silver.webp" },
    ];

    return (
        <section style={{ padding: 'var(--section-padding)', backgroundColor: '#fff' }}>
            <div className="container">
                {/* 1. Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Reveal width="100%">
                        <h2 className="section-title" style={{ color: 'black' }}>
                            OUR TRUSTED <span style={{ color: 'var(--color-coral)' }}>CLIENTS</span>
                        </h2>
                    </Reveal>
                    <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
                        We are proud to partner with amazing companies across various industries.<br />
                        Here are some of the brands that trust us with their digital presence.
                    </p>
                </div>

                {/* 2. Logo Grid with Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                    gap: '2rem',
                    marginBottom: '5rem'
                }}>
                    {clientLogos.map((client) => (
                        <div key={client.id} style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            padding: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            aspectRatio: '1/1',
                            transition: 'all 0.3s ease',
                            border: '1px solid #f5f5f5',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                            className="client-card"
                        >
                            <img
                                src={client.logo.replace('/assets', '')}
                                alt={client.name}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    opacity: 1
                                }}
                                className="client-img"
                            />
                        </div>
                    ))}
                </div>

                {/* 3. Stats Section */}
                <div style={{
                    backgroundColor: '#111',
                    borderRadius: '0px',
                    padding: '4rem 2rem',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '3rem',
                    marginBottom: '5rem',
                    position: 'relative'
                }}>
                    {/* Decorative top border */}
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', backgroundColor: 'var(--color-coral)' }}></div>

                    {[
                        { num: "100+", label: "Happy Clients" },
                        { num: "2000+", label: "Projects Completed" },
                        { num: "5+", label: "Years Experience" },
                        { num: "99%", label: "Client Satisfaction" }
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>{stat.num}</div>
                            <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-coral)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* 4. Bottom CTA */}
                <div style={{ textAlign: 'center' }}>
                    <Reveal>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#111', marginBottom: '2rem', textTransform: 'uppercase' }}>
                            Want to become our <span style={{ color: 'var(--color-coral)' }}>next success story?</span>
                        </h3>
                    </Reveal>
                    <a href="#contact" className="btn-coral">
                        Get In Touch
                    </a>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .client-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
                    border-color: var(--color-coral) !important;
                }
                @media (max-width: 768px) {
                    .client-card { aspectRatio: auto; height: 120px; }
                }
            `}} />
        </section>
    );
};

export default Clients;
