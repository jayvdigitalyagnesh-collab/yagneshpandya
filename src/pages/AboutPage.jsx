import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Star, Mic, BookOpen, Sparkles, Target, Users, TrendingUp, Mail, User, Rocket, Settings, Brain, Handshake, GraduationCap } from 'lucide-react';
import About from '../components/About';
import Contact from '../components/Contact';
import { Reveal } from '../components/Reveal';

const AboutPage = () => {
    const [activeCard, setActiveCard] = useState(0);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const earlyLearnings = [
        { text: "Started with zero capital, scaling through pure organic strategies.", icon: Rocket },
        { text: "Learned that 'hustle' isn't sustainable—systems are.", icon: Settings },
        { text: "Discovered that psychology beats technology every time.", icon: Brain },
        { text: "Built a network of high-net-worth mentors early on.", icon: Handshake },
        { text: "Realized that teaching others is the fastest way to master a skill.", icon: GraduationCap }
    ];

    const richLifeCards = [
        { title: "Time Freedom", img: "/slider/26.webp", desc: "Wake up when you want.", color: "#FF6B6B" },
        { title: "Global Impact", img: "/slider/25.webp", desc: "Build a brand that matters.", color: "#4ECDC4" },
        { title: "Generational Wealth", img: "/slider/24.webp", desc: "Secure your family's future.", color: "#FFE66D" }
    ];

    return (
        <div className="about-page-redesign">
            {/* HERO SECTION */}
            <About />

            {/* EARLY LEARNINGS SECTION - Timeline Style */}
            <section className="early-learnings-section">
                <div className="floating-shapes">
                    <motion.div
                        className="shape shape-1"
                        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="shape shape-2"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div className="container">
                    <div className="learnings-wrapper">
                        <motion.div
                            className="learnings-header"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-tag">THE JOURNEY</span>
                            <h2 className="mega-title">
                                YAGNESH'S
                                <span className="gradient-text"> EARLY LEARNINGS</span>
                            </h2>
                        </motion.div>

                        <div className="learnings-content">
                            <div className="learnings-image-container">
                                <motion.div
                                    className="image-frame"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/p6.png" alt="Early Days" />
                                </motion.div>
                            </div>

                            <div className="learnings-timeline">
                                {earlyLearnings.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="timeline-item"
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 10, backgroundColor: 'rgba(255, 107, 107, 0.05)' }}
                                    >
                                        <div className="timeline-number">{String(i + 1).padStart(2, '0')}</div>
                                        <div className="timeline-icon">
                                            <item.icon size={24} />
                                        </div>
                                        <p className="timeline-text">{item.text}</p>
                                        <motion.div
                                            className="timeline-arrow"
                                            whileHover={{ x: 5 }}
                                        >
                                            <ArrowRight size={18} />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RICH LIFE GRID - Interactive Cards */}
            <section className="rich-life-section">
                <div className="section-bg-text">RICH LIFE</div>

                <div className="container">
                    <motion.div
                        className="rich-life-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="header-line" />
                        <h2 className="rich-life-title">
                            SO WHAT IS YOUR <span>RICH LIFE</span>?
                            <br />
                            <span className="highlight">YOU DECIDE.</span>
                        </h2>
                        <div className="header-line" />
                    </motion.div>

                    <div className="rich-life-grid">
                        {richLifeCards.map((card, i) => (
                            <motion.div
                                key={i}
                                className={`rich-life-card ${activeCard === i ? 'active' : ''}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                onHoverStart={() => setActiveCard(i)}
                                whileHover={{ y: -15 }}
                            >
                                <div className="card-image-wrapper">
                                    <img src={card.img} alt={card.title} />
                                    <div className="card-overlay" style={{ background: `linear-gradient(135deg, ${card.color}40, transparent)` }} />
                                </div>

                                <div className="card-content">
                                    <div className="card-index" style={{ color: 'white', opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</div>
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                    <motion.div
                                        className="card-cta"
                                        style={{ backgroundColor: card.color }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Sparkles size={16} />
                                        <span>Explore</span>
                                    </motion.div>
                                </div>

                                <div className="card-border" style={{ borderColor: card.color }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEWSLETTER SECTION - Split Design */}
            <section className="newsletter-section">
                <div className="newsletter-pattern" />

                <div className="container">
                    <div className="newsletter-wrapper">
                        <motion.div
                            className="newsletter-image-side"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="image-stack">
                                <div className="stack-layer layer-1" />
                                <div className="stack-layer layer-2" />
                                <img src="/slider/22.webp" alt="Yagnesh Meeting" />
                            </div>
                            <div className="floating-card">
                                <Mail size={24} />
                                <span>Join 10K+ Subscribers</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="newsletter-form-side"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="form-badge">
                                <Star size={14} fill="currentColor" />
                                <span>EXCLUSIVE ACCESS</span>
                            </div>

                            <h2>Stay In The Know</h2>
                            <p>Be the first to receive new releases, special offers, and more.</p>

                            <form className="newsletter-form">
                                <div className="input-group">
                                    <User size={20} className="input-icon" />
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div className="input-group">
                                    <Mail size={20} className="input-icon" />
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="submit-btn"
                                    whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(255, 107, 107, 0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Join Now</span>
                                    <ArrowRight size={20} />
                                </motion.button>
                            </form>


                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION - Bold & Dynamic */}
            <section className="stats-section">
                <div className="stats-bg-text">IMPACT</div>
                <div className="stats-bg-gradient" />

                <div className="container">
                    <div className="stats-wrapper">
                        <motion.div
                            className="stats-image-container"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="image-frame-stats">
                                <img src="/slider/20.webp" alt="Yagnesh Portrait" />
                            </div>
                            <motion.div
                                className="experience-badge"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", damping: 12, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="badge-icon-wrapper">
                                    <TrendingUp size={20} />
                                </div>
                                <span>Consistent Growth</span>
                            </motion.div>
                        </motion.div>

                        <div className="stats-content">
                            <motion.div
                                className="expertise-badge-new"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <span className="line" />
                                <span className="text">EXPERTISE</span>
                            </motion.div>

                            <motion.h2
                                className="stats-title-new"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Mastering Money &<br />
                                <strong>Building A Rich Life</strong>
                            </motion.h2>

                            <div className="stats-grid-new">
                                <motion.div
                                    className="stat-card-premium"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="card-inner">
                                        <div className="card-header">
                                            <div className="icon-box">
                                                <Users size={24} />
                                            </div>
                                            <span className="card-number">01</span>
                                        </div>
                                        <div className="card-body">
                                            <h3>50K+</h3>
                                            <p>YouTube<br />Subscribers</p>
                                        </div>
                                        <div className="card-decoration" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="stat-card-premium b"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="card-inner">
                                        <div className="card-header">
                                            <div className="icon-box">
                                                <Target size={24} />
                                            </div>
                                            <span className="card-number">02</span>
                                        </div>
                                        <div className="card-body">
                                            <h3>10M+</h3>
                                            <p>Views<br />Generated</p>
                                        </div>
                                        <div className="card-decoration" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />

            <style>{`
                /* ============================================
                   GLOBAL REDESIGN STYLES
                   ============================================ */
                
                .about-page-redesign {
                    --coral: #FF6B6B;
                    --coral-light: #FF8E8E;
                    --dark: #000000;
                    --gray: #000000;
                    overflow-x: hidden;
                }

                /* ============================================
                   EARLY LEARNINGS SECTION
                   ============================================ */
                
                .early-learnings-section {
                    padding: 120px 0;
                    background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
                    position: relative;
                    overflow: hidden;
                }

                .floating-shapes {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    overflow: hidden;
                }

                .shape {
                    position: absolute;
                    border-radius: 50%;
                    opacity: 0.03;
                }

                .shape-1 {
                    width: 600px;
                    height: 600px;
                    background: var(--coral);
                    top: -200px;
                    right: -200px;
                }

                .shape-2 {
                    width: 400px;
                    height: 400px;
                    background: #4ECDC4;
                    bottom: -100px;
                    left: -100px;
                }

                .learnings-wrapper {
                    position: relative;
                    z-index: 2;
                }

                .learnings-header {
                    text-align: center;
                    margin-bottom: 80px;
                }

                .section-tag {
                    display: inline-block;
                    padding: 8px 24px;
                    border: 1.5px solid black;
                    color: black;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 3px;
                    border-radius: 30px;
                    margin-bottom: 24px;
                }

                .mega-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 900;
                    color: black;
                    line-height: 1.1;
                }

                .gradient-text {
                    color: black;
                }

                .learnings-content {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 80px;
                    align-items: center;
                }

                .learnings-image-container {
                    position: relative;
                }

                .image-frame {
                    position: relative;
                    padding: 20px;
                }

                .image-frame img {
                    width: 100%;
                    border-radius: 20px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                }


                .learnings-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .timeline-item {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 24px 30px;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                }

                .timeline-item:hover {
                    border-color: rgba(255, 107, 107, 0.2);
                    box-shadow: 0 10px 40px rgba(255, 107, 107, 0.1);
                }

                .timeline-number {
                    font-size: 0.9rem;
                    font-weight: 800;
                    color: black;
                    opacity: 0.8;
                }

                .timeline-icon {
                    font-size: 1.5rem;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f8f9fa;
                    border-radius: 12px;
                }

                .timeline-text {
                    flex: 1;
                    font-size: 1.05rem;
                    color: black;
                    margin: 0;
                    line-height: 1.5;
                }

                .timeline-arrow {
                    color: black;
                    opacity: 0;
                    transition: all 0.3s ease;
                }

                .timeline-item:hover .timeline-arrow {
                    opacity: 1;
                }

                /* ============================================
                   RICH LIFE SECTION
                   ============================================ */
                
                .rich-life-section {
                    padding: 120px 0;
                    background: black;
                    position: relative;
                    overflow: hidden;
                }

                .section-bg-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 20vw;
                    font-weight: 900;
                    color: rgba(255,255,255,0.02);
                    white-space: nowrap;
                    pointer-events: none;
                }

                .rich-life-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 40px;
                    margin-bottom: 80px;
                }

                .header-line {
                    flex: 1;
                    max-width: 100px;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, var(--coral));
                }

                .header-line:last-child {
                    background: linear-gradient(90deg, var(--coral), transparent);
                }

                .rich-life-title {
                    font-size: clamp(1.8rem, 4vw, 3rem);
                    font-weight: 900;
                    color: white;
                    text-align: center;
                    line-height: 1.3;
                }

                .rich-life-title span {
                    color: white;
                }

                .rich-life-title .highlight {
                    position: relative;
                    display: inline-block;
                }

                .rich-life-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }

                .rich-life-card {
                    position: relative;
                    height: 500px;
                    border-radius: 24px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.4s ease;
                }

                .card-image-wrapper {
                    position: absolute;
                    inset: 0;
                }

                .card-image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .rich-life-card:hover .card-image-wrapper img {
                    transform: scale(1.1);
                }

                .card-overlay {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .rich-life-card:hover .card-overlay {
                    opacity: 1;
                }

                .card-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 40px;
                    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%);
                    transform: translateY(30px);
                    transition: transform 0.4s ease;
                }

                .rich-life-card:hover .card-content {
                    transform: translateY(0);
                }

                .card-index {
                    font-size: 3rem;
                    font-weight: 900;
                    opacity: 0.3;
                    line-height: 1;
                }

                .card-content h3 {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: white;
                    margin: 8px 0;
                    text-transform: uppercase;
                }

                .card-content p {
                    color: white;
                    font-size: 1rem;
                    margin: 0;
                }

                .card-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 24px;
                    border-radius: 30px;
                    color: black;
                    font-weight: 700;
                    font-size: 0.85rem;
                    margin-top: 20px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.4s ease 0.1s;
                }

                .rich-life-card:hover .card-cta {
                    opacity: 1;
                    transform: translateY(0);
                }

                .card-border {
                    position: absolute;
                    inset: 0;
                    border: 3px solid transparent;
                    border-radius: 24px;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .rich-life-card:hover .card-border {
                    opacity: 1;
                }

                /* ============================================
                   NEWSLETTER SECTION
                   ============================================ */
                
                .newsletter-section {
                    padding: 120px 0;
                    background: white;
                    position: relative;
                    overflow: hidden;
                }

                .newsletter-pattern {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle at 1px 1px, #eee 1px, transparent 0);
                    background-size: 40px 40px;
                    opacity: 0.5;
                }

                .newsletter-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }

                .newsletter-image-side {
                    position: relative;
                }

                .image-stack {
                    position: relative;
                }

                .stack-layer {
                    position: absolute;
                    inset: 0;
                    border-radius: 24px;
                }

                .stack-layer.layer-1 {
                    background: var(--coral);
                    transform: rotate(6deg);
                    opacity: 0.2;
                }

                .stack-layer.layer-2 {
                    background: #4ECDC4;
                    transform: rotate(-3deg);
                    opacity: 0.15;
                }

                .image-stack img {
                    position: relative;
                    width: 100%;
                    border-radius: 24px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                }

                .floating-card {
                    position: absolute;
                    bottom: -30px;
                    right: -30px;
                    background: white;
                    padding: 20px 30px;
                    border-radius: 16px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: black;
                }

                .floating-card span {
                    color: black;
                    font-weight: 700;
                }

                .newsletter-form-side {
                    padding: 40px;
                }

                .form-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border: 1px solid black;
                    color: black;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 2px;
                    border-radius: 30px;
                    margin-bottom: 24px;
                }

                .newsletter-form-side h2 {
                    font-size: 3rem;
                    font-weight: 900;
                    color: black;
                    margin-bottom: 16px;
                }

                .newsletter-form-side > p {
                    font-size: 1.1rem;
                    color: black;
                    margin-bottom: 32px;
                    line-height: 1.6;
                }

                .newsletter-form {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .input-group {
                    position: relative;
                }

                .input-icon {
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: black;
                }

                .input-group input {
                    width: 100%;
                    padding: 18px 20px 18px 55px;
                    font-size: 1rem;
                    border: 2px solid #eee;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    background: #f8f9fa;
                }

                .input-group input:focus {
                    outline: none;
                    border-color: black;
                    background: white;
                    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
                }

                .submit-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    padding: 18px 40px;
                    background: black;
                    color: white;
                    font-size: 1rem;
                    font-weight: 700;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    margin-top: 8px;
                }



                /* ============================================
                   STATS SECTION
                   ============================================ */
                
                .stats-section {
                    padding: 160px 0;
                    background: black;
                    position: relative;
                    overflow: hidden;
                }

                .stats-bg-text {
                    position: absolute;
                    top: 20%;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 25vw;
                    font-weight: 900;
                    color: rgba(255, 255, 255, 0.03);
                    letter-spacing: -0.05em;
                    line-height: 1;
                    pointer-events: none;
                    z-index: 1;
                }

                .stats-bg-gradient {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
                    z-index: 1;
                }

                .stats-wrapper {
                    display: grid;
                    grid-template-columns: 0.9fr 1.1fr;
                    gap: 100px;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }

                .image-frame-stats {
                    position: relative;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.5);
                }

                .image-frame-stats img {
                    width: 100%;
                    display: block;
                    transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1);
                }

                .stats-image-container:hover .image-frame-stats img {
                    transform: scale(1.05);
                }

                .experience-badge {
                    position: absolute;
                    bottom: 40px;
                    left: -30px;
                    background: white;
                    padding: 15px 25px;
                    border-radius: 100px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }

                .badge-icon-wrapper {
                    width: 40px;
                    height: 40px;
                    background: black;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .experience-badge span {
                    font-weight: 800;
                    color: black;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .expertise-badge-new {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 25px;
                }

                .expertise-badge-new .line {
                    width: 50px;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.3);
                }

                .expertise-badge-new .text {
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: 4px;
                    color: rgba(255, 255, 255, 0.6);
                }

                .stats-title-new {
                    font-size: clamp(2.5rem, 5vw, 4.2rem);
                    font-weight: 300;
                    color: white;
                    line-height: 1.1;
                    margin-bottom: 60px;
                }

                .stats-title-new strong {
                    font-weight: 900;
                    display: block;
                    color: white;
                }

                .stats-grid-new {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                }

                .stat-card-premium {
                    position: relative;
                }

                .card-inner {
                    padding: 40px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 30px;
                    backdrop-filter: blur(10px);
                    transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }

                .stat-card-premium:hover .card-inner {
                    background: rgba(255, 255, 255, 0.07);
                    border-color: rgba(255, 255, 255, 0.2);
                    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 40px;
                }

                .icon-box {
                    width: 56px;
                    height: 56px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    transition: all 0.5s ease;
                }

                .stat-card-premium:hover .icon-box {
                    background: white;
                    color: black;
                    transform: rotate(-10deg);
                }

                .card-number {
                    font-size: 14px;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.2);
                    font-family: monospace;
                }

                .card-body h3 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    color: white;
                    margin-bottom: 10px;
                    letter-spacing: -2px;
                }

                .card-body p {
                    font-size: 1.1rem;
                    color: rgba(255, 255, 255, 0.5);
                    line-height: 1.4;
                    margin: 0;
                }

                .card-decoration {
                    position: absolute;
                    bottom: -20px;
                    right: -20px;
                    width: 100px;
                    height: 100px;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }

                .stat-card-premium:hover .card-decoration {
                    opacity: 1;
                }

                /* ============================================
                   RESPONSIVE STYLES
                   ============================================ */
                
                @media (max-width: 1024px) {
                    .learnings-content,
                    .newsletter-wrapper,
                    .stats-wrapper {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }

                    .rich-life-grid {
                        grid-template-columns: 1fr;
                        max-width: 500px;
                        margin: 0 auto;
                    }

                    .rich-life-card {
                        height: 400px;
                    }

                    .floating-card {
                        right: 20px;
                        bottom: -20px;
                    }

                    .experience-badge {
                        right: 20px;
                        bottom: 20px;
                    }
                }

                @media (max-width: 768px) {
                    .early-learnings-section,
                    .rich-life-section,
                    .newsletter-section,
                    .stats-section {
                        padding: 80px 0;
                    }

                    .mega-title,
                    .newsletter-form-side h2 {
                        font-size: 2rem;
                    }

                    .timeline-item {
                        padding: 16px 20px;
                        flex-wrap: wrap;
                    }

                    .timeline-icon {
                        width: 40px;
                        height: 40px;
                        font-size: 1.2rem;
                    }

                    .timeline-text {
                        font-size: 0.95rem;
                        flex-basis: 100%;
                        margin-top: 12px;
                    }

                    .rich-life-header {
                        flex-direction: column;
                        gap: 20px;
                    }

                    .header-line {
                        display: none;
                    }

                    .newsletter-form-side {
                        padding: 20px 0;
                    }

                    .stats-grid {
                        flex-direction: column;
                    }

                    .stat-card {
                        padding: 30px;
                    }

                    .stat-number {
                        font-size: 2.5rem;
                    }

                    .stats-title {
                        font-size: 2rem;
                    }

                    .form-features {
                        flex-direction: column;
                        gap: 12px;
                    }
                }

                @media (max-width: 480px) {
                    .section-tag {
                        font-size: 10px;
                        padding: 6px 16px;
                    }

                    .card-content {
                        padding: 24px;
                    }

                    .card-content h3 {
                        font-size: 1.4rem;
                    }

                    .card-index {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;