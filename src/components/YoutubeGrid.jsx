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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ aspectRatio: '16/9', backgroundColor: '#111', borderRadius: '12px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                        ))}
                    </div>
                ) : error ? (
                    <p style={{ color: '#666', textAlign: 'center' }}>{error}</p>
                ) : (
                    <div className="grid-3" style={{ gap: '2rem' }}>
                        {videos.map((video, idx) => (
                            useEmbeds ? (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        backgroundColor: '#111',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: '1px solid #222',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                            allowFullScreen
                                            title={video.title}
                                        />
                                    </div>
                                    <div style={{ padding: '1.25rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', marginBottom: '8px', fontSize: '0.8rem' }}>
                                            <Calendar size={12} />
                                            {video.date}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.1rem',
                                            fontWeight: 700,
                                            lineHeight: 1.4,
                                            color: 'white'
                                        }}>
                                            {video.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.a
                                    key={video.id}
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        display: 'block',
                                        backgroundColor: '#111',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                        border: '1px solid #222'
                                    }}
                                >
                                    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(0,0,0,0.2)',
                                            opacity: 0,
                                            transition: '0.3s ease-in-out',
                                        }} className="play-overlay">
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: 'var(--color-coral)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 0 30px var(--color-coral)'
                                            }}>
                                                <Play fill="white" size={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', marginBottom: '10px', fontSize: '0.85rem' }}>
                                            <Calendar size={14} />
                                            {video.date}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 700,
                                            lineHeight: 1.4,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}>
                                            {video.title}
                                        </h3>
                                    </div>
                                </motion.a>
                            )
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
