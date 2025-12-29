import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/blogs', label: 'Blogs' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <header className="site-header">
                <div className="container header-inner">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="RegOps Logo" className="logo-img" />
                    </Link>

                    <div className="header-actions">
                        <Link to="/contact" className="btn btn-primary btn-sm">
                            Get Started
                        </Link>

                        <button
                            className="hamburger-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Floating Card Menu */}
            <div className={`floating-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="floating-menu-header">
                    <span className="menu-label">MENU</span>
                    <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                        <X size={24} />
                    </button>
                </div>
                <nav className="floating-menu-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`floating-menu-link ${isActive(item.path) ? 'active' : ''}`}
                        >
                            {item.label}
                            {isActive(item.path) && <span className="active-dot"></span>}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Backdrop for closing menu */}
            {isMenuOpen && <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)}></div>}
        </>
    );
};

export default Header;
