import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <img src={logo} alt="RegOps Logo" className="footer-logo" />
                        <p className="text-light" style={{ color: '#9CA3AF', marginTop: '1rem' }}>
                            Your trusted partner in regulatory compliance for Pharma, Medical Devices, and Consumer products.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/pharma">Pharma</Link></li>
                            <li><Link to="/services/medical-devices">Medical Devices</Link></li>
                            <li><Link to="/services/consumer">Consumer</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul className="footer-links">
                            <li>123 Regulatory Way</li>
                            <li>Tech Park</li>
                            <li>contact@regops.com</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} RegOps Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
