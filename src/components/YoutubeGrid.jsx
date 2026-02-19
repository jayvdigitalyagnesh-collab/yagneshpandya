import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Play, Calendar, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

// --- CONFIGURATION ---
// I'll use a demo channel ID for now. 
// You will need to replace the API_KEY with your own from Google Cloud Console.
// --- ⚠️ ACTION REQUIRED: REPLACE THESE WITH YOUR ACTUAL YOUTUBE API CREDENTIALS ⚠️ ---
// --- YouTube API Configuration ---
const API_KEY = 'AIzaSyB36ZIGtZtKlzayJzRO-RWnyfsK2l0ptCQ';
const CHANNEL_ID = 'UCvjj3UnvjzxJytHOmR82sDw';

// --- STATIC FALLBACK DATA (Used when API Quota is hit) ---
const STATIC_VIDEOS = [
    { id: 'UM0BDMwReHk', title: 'Talk With Yagnesh - Episode 1', date: 'Feb 2024' },
    { id: 'sURQUtze_z8', title: 'Talk With Yagnesh - Episode 2', date: 'Jan 2024' },
    { id: 'xFsmMfyMnoo', title: 'Talk With Yagnesh - Episode 3', date: 'Jan 2024' },
    { id: '2flgQ6F9Zcg', title: 'Talk With Yagnesh - Episode 4', date: 'Dec 2023' },
    { id: 'FVQVq-91594', title: 'Talk With Yagnesh - Episode 5', date: 'Dec 2023' },
    { id: 'gQVj5ghaPGY', title: 'Talk With Yagnesh - Episode 6', date: 'Nov 2023' },
    { id: 'j9MGFILl50k', title: 'Talk With Yagnesh - Episode 7', date: 'Nov 2023' },
    { id: '-6YNvquZwVQ', title: 'Talk With Yagnesh - Episode 8', date: 'Oct 2023' }
].map(v => ({
    ...v,
    thumbnail: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`
}));
// ---------------------------------------------------------

const YoutubeGrid = ({ title, maxResults = 6, showHeader = true, useEmbeds = false }) => {
    // Directly use static videos to avoids all API quota issues
    const videos = STATIC_VIDEOS.slice(0, maxResults);
    const loading = false;
    const error = null;

    return (
        <section style={{ backgroundColor: '#0a0a0a', padding: 'var(--section-padding)' }}>
            <div className="container">
                {showHeader && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: '4rem',
                        flexWrap: 'wrap',
                        gap: '2rem'
                    }}>
                        <div style={{ maxWidth: '600px' }}>
                            <span style={{
                                display: 'block',
                                fontWeight: 800,
                                letterSpacing: '2px',
                                color: 'var(--color-coral)',
                                marginBottom: '1rem',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem'
                            }}>
                                Latest Episodes
                            </span>
                            <Reveal>
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: 900,
                                    color: 'white',
                                    textTransform: 'uppercase',
                                    lineHeight: 1
                                }}>
                                    {title || <>Talk With Yagnesh <br /> On YouTube</>}
                                </h2>
                            </Reveal>
                        </div>

                        <a
                            href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '1.1rem',
                                borderBottom: '2px solid var(--color-coral)',
                                paddingBottom: '5px'
                            }}
                        >
                            View Channel <ExternalLink size={20} />
                        </a>
                    </div>
                )}

                {loading ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ aspectRatio: '16/9', backgroundColor: '#181818', borderRadius: '12px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                        ))}
                    </div>
                ) : error ? (
                    <p style={{ color: '#666', textAlign: 'center' }}>{error}</p>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                        gap: '3rem 2rem'
                    }}>
                        {videos.map((video, idx) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                            >
                                <div style={{
                                    position: 'relative',
                                    paddingBottom: '56.25%',
                                    height: 0,
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    backgroundColor: '#000',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                }}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        title={video.title}
                                    />
                                </div>
                                <div style={{ padding: '0 0.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.4, color: '#fff', marginBottom: '0.4rem' }}>{video.title}</h3>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-coral)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Talk With Yagnesh • {video.date}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pulse {
                    0% { opacity: 0.5; }
                    50% { opacity: 0.8; }
                    100% { opacity: 0.5; }
                }
                .grid-3 a:hover .play-overlay {
                    opacity: 1 !important;
                }
            `}} />
        </section>
    );
};

export default YoutubeGrid;
