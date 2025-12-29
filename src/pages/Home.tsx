import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star, Pill, Stethoscope, Sparkles, Smartphone } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import missionImg from '../assets/mission.png';
import industriesImg from '../assets/industries.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';


const Home: React.FC = () => {
    return (
        <div>
            {/* 1. Hero Section - Left-Aligned Content */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content-left">
                        {/* Badge */}
                        <div className="hero-badge">
                            <span className="badge-new">New</span>
                            <span className="badge-text">Industry-Leading Regulatory Consulting</span>
                        </div>

                        {/* Heading */}
                        <h1 className="hero-heading">
                            Cut Costs and<br />
                            Ensure Reliable<br />
                            Regulatory Pathways
                        </h1>

                        {/* Subheading */}
                        <p className="hero-subheading">
                            Get consistent, high-quality regulatory support<br />
                            delivered on time, every time.
                        </p>

                        {/* CTA Button */}
                        <Link to="/contact" className="btn btn-primary hero-cta">
                            Start Subscription <ArrowRight size={16} />
                        </Link>

                        {/* Social Proof - Avatar Stack */}
                        <div className="hero-social-proof">
                            <div className="avatar-stack">
                                <img src={avatar1} alt="Client 1" className="avatar-img" />
                                <img src={avatar2} alt="Client 2" className="avatar-img" />
                                <img src={avatar3} alt="Client 3" className="avatar-img" />
                            </div>
                            <span className="social-proof-text">
                                <ArrowRight size={14} style={{ marginRight: '4px' }} /> <strong>250+</strong> Satisfied Clients
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-label">
                            <span className="section-label">
                                <span className="label-dot"></span> About RegOps
                            </span>
                        </div>
                        <div className="about-content">
                            <p className="about-text">
                                With over 15 years of experience, we specialize in delivering
                                tailored regulatory solutions that drive success across industries like
                                pharma, medical devices, and consumer products. Our dedicated team is
                                focused on accelerating approvals and helping your business thrive
                                in an ever-changing regulatory landscape.
                            </p>
                        </div>
                    </div>

                    <div className="about-stats">
                        <div className="about-stat">
                            <h3>98%</h3>
                            <p>Complete customer satisfaction</p>
                        </div>
                        <div className="about-stat">
                            <h3>15+</h3>
                            <p>Years of regulatory expertise</p>
                        </div>
                        <div className="about-stat">
                            <h3>500+</h3>
                            <p>Successful product approvals</p>
                        </div>
                        <div className="about-stat">
                            <h3>40+</h3>
                            <p>Countries served worldwide</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Ticker with Logoipsum Logos */}
            <section className="brand-ticker">
                <div className="ticker-wrapper">
                    {[245, 246, 247, 248, 249, 250, 245, 246, 247, 248, 249, 250].map((logoId, index) => (
                        <img
                            key={index}
                            src={`https://img.logoipsum.com/${logoId}.svg`}
                            alt="Partner Logo"
                            className="ticker-logo"
                        />
                    ))}
                </div>
            </section>

            {/* 2. Mission Section */}
            <section className="section">
                <div className="container">
                    <div className="mission-grid">
                        <div>
                            <span className="section-label">
                                <span className="label-dot"></span> Our Core Mission
                            </span>
                            <h2 className="mission-heading">
                                Empowering life sciences companies with reliable, high-quality regulatory solutions that ensure operations run smoothly.
                            </h2>
                            <div className="divider"></div>

                            <div className="mission-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <Shield size={24} />
                                    </div>
                                    <h3>Reliability</h3>
                                    <p className="text-light">Dependable submission management ensuring your business continuity.</p>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <Star size={24} />
                                    </div>
                                    <h3>Quality</h3>
                                    <p className="text-light">We adhere to the strictest global standards (ICH, FDA, EMA) for every document.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mission-image-wrapper">
                            <img src={missionImg} alt="Team Collaboration" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <section className="section process-section">
                <div className="container">
                    <span className="section-label" style={{ color: 'var(--primary)' }}>
                        <span className="label-dot" style={{ backgroundColor: 'var(--primary)' }}></span> 4 Simple Steps
                    </span>
                    <h2 className="process-heading">Effortless Process,<br />Continuous Compliance</h2>
                    <div className="divider" style={{ borderColor: 'rgba(255,255,255,0.2)' }}></div>

                    <div className="process-grid">
                        <div className="process-card">
                            <span className="process-number">01.</span>
                            <h3>Choose a Service</h3>
                            <p>Select the flexible or premium plan that suits your product portfolio.</p>
                        </div>
                        <div className="process-card">
                            <span className="process-number">02.</span>
                            <h3>Gap Analysis</h3>
                            <p>We audit your technical files to identify compliance risks instantly.</p>
                        </div>
                        <div className="process-card">
                            <span className="process-number">03.</span>
                            <h3>Strategy Design</h3>
                            <p>Receive a tailored submission roadmap and timeline.</p>
                        </div>
                        <div className="process-card">
                            <span className="process-number">04.</span>
                            <h3>Receive Approval</h3>
                            <p>Sit back as we manage health authority queries until approval.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Bento Grid Section - The Difference We Make */}
            <section className="section bento-section">
                <div className="container">
                    <div className="text-center mb-12">
                        <span className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="label-dot"></span> The Difference We Make
                        </span>
                        <h2>Leading the Way in Regulatory Intelligence</h2>
                        <p className="text-light">Explore the key benchmarks that make us your trusted partner.</p>
                    </div>

                    {/* New Bento Grid */}
                    <div className="bento-grid-new">
                        {/* Row 1: 2 Large Cards */}
                        <div className="bento-card bento-large">
                            <div className="bento-card-header">
                                <h3>Submission Tracking</h3>
                                <p>Real-time monitoring of all active regulatory submissions across global markets.</p>
                            </div>
                            <div className="bento-chart-container">
                                {/* Animated Line Chart */}
                                <div className="chart-badge">
                                    <span className="pulse-dot"></span> 12 Active
                                </div>
                                <svg className="animated-chart" viewBox="0 0 300 120">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path className="chart-area" d="M0,100 L30,80 L60,85 L90,60 L120,65 L150,40 L180,45 L210,25 L240,30 L270,15 L300,20 L300,120 L0,120 Z" fill="url(#chartGradient)" />
                                    <path className="chart-line" d="M0,100 L30,80 L60,85 L90,60 L120,65 L150,40 L180,45 L210,25 L240,30 L270,15 L300,20" fill="none" stroke="var(--primary)" strokeWidth="3" />
                                    <circle className="chart-dot" cx="270" cy="15" r="6" fill="var(--primary)" />
                                </svg>
                                <div className="chart-avatars">
                                    <img src={avatar1} alt="Team" className="chart-avatar" />
                                    <img src={avatar2} alt="Team" className="chart-avatar" />
                                    <img src={avatar3} alt="Team" className="chart-avatar" />
                                    <span className="avatar-label">Team Active</span>
                                </div>
                            </div>
                        </div>

                        <div className="bento-card bento-large bento-approval">
                            <div className="bento-card-header">
                                <h3>Approval Rate</h3>
                                <p>Industry-leading first-cycle approval rates across all regulatory pathways.</p>
                            </div>
                            <div className="bento-stats-container">
                                <div className="floating-stat stat-1">
                                    <span className="stat-label-sm">Success Rate</span>
                                    <span className="stat-value">98%</span>
                                </div>
                                <div className="floating-stat stat-2">
                                    <span className="stat-label-sm">First-Cycle</span>
                                    <span className="stat-value">99.8%</span>
                                </div>
                                <div className="floating-stat stat-3">
                                    <span className="stat-label-sm">On-Time</span>
                                    <span className="stat-value">100%</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: 3 Smaller Cards */}
                        <div className="bento-card bento-small">
                            <div className="bento-visual">
                                <div className="magnifier-icon">
                                    <svg viewBox="0 0 60 60" className="magnifier-svg">
                                        <circle cx="25" cy="25" r="18" fill="none" stroke="var(--primary)" strokeWidth="3" />
                                        <line x1="38" y1="38" x2="55" y2="55" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="checklist-items">
                                    <div className="check-item checked"><span className="checkmark">✓</span> Compliance Review</div>
                                    <div className="check-item checked"><span className="checkmark">✓</span> Risk Assessment</div>
                                    <div className="check-item"><span className="checkmark">○</span> Final Validation</div>
                                </div>
                            </div>
                            <h4>Gap Analysis</h4>
                            <p>Comprehensive audits to identify and address compliance risks before submission.</p>
                        </div>

                        <div className="bento-card bento-small">
                            <div className="bento-visual">
                                <div className="doc-stack">
                                    <div className="doc doc-1"></div>
                                    <div className="doc doc-2"></div>
                                    <div className="doc doc-3"></div>
                                </div>
                                <div className="progress-bar-container">
                                    <div className="progress-bar-fill"></div>
                                </div>
                            </div>
                            <h4>Document Management</h4>
                            <p>Streamlined eCTD compilation and submission-ready documentation.</p>
                        </div>

                        <div className="bento-card bento-small">
                            <div className="bento-visual">
                                <div className="region-tags">
                                    <span className="region-tag tag-1">FDA</span>
                                    <span className="region-tag tag-2">EMA</span>
                                    <span className="region-tag tag-3">TGA</span>
                                    <span className="region-tag tag-4">PMDA</span>
                                </div>
                                <div className="globe-indicator">
                                    <span className="globe-count">40+</span>
                                    <span className="globe-label">Countries</span>
                                </div>
                            </div>
                            <h4>Global Coverage</h4>
                            <p>Expert regulatory support across major markets worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Industries Section */}
            <section className="section" style={{ padding: 0 }}>
                <div className="industries-layout">
                    <div className="industries-img" style={{ backgroundImage: `url(${industriesImg})` }}></div>
                    <div className="industries-list">
                        <span className="section-label">
                            <span className="label-dot"></span> Industries We Support
                        </span>

                        <Link to="/services/pharma" className="industry-item">
                            <div className="industry-icon"><Pill size={24} /></div>
                            <div>
                                <h3>Pharma</h3>
                                <p className="text-light">Essential for drug development success</p>
                            </div>
                        </Link>

                        <Link to="/services/medical-devices" className="industry-item">
                            <div className="industry-icon"><Stethoscope size={24} /></div>
                            <div>
                                <h3>Medical Devices</h3>
                                <p className="text-light">Compliance for hardware & software</p>
                            </div>
                        </Link>

                        <Link to="/services/consumer" className="industry-item">
                            <div className="industry-icon"><Sparkles size={24} /></div>
                            <div>
                                <h3>Consumer</h3>
                                <p className="text-light">Cosmetics, Food & Nutraceuticals</p>
                            </div>
                        </Link>

                        <div className="industry-item">
                            <div className="industry-icon"><Smartphone size={24} /></div>
                            <div>
                                <h3>Digital Health</h3>
                                <p className="text-light">SaMD & AI Regulation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
