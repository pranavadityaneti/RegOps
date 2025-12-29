import React from 'react';
import { Link } from 'react-router-dom';

const verticals = [
    {
        id: 'pharma',
        title: 'Pharma',
        description: 'Comprehensive regulatory services for the pharmaceutical industry, from development to market access.',
        colorStyle: 'border-left: 4px solid var(--primary);'
    },
    {
        id: 'medical-devices',
        title: 'Medical Devices',
        description: 'Expert guidance on MDR/IVDR, 510(k), and global conformity for medical devices.',
        colorStyle: 'border-left: 4px solid var(--primary);'
    },
    {
        id: 'consumer',
        title: 'Consumer',
        description: 'Regulatory support for cosmetics, nutraceuticals, and food supplements ensuring compliance and safety.',
        colorStyle: 'border-left: 4px solid var(--primary);'
    }
];

const ServicesLanding: React.FC = () => {
    return (
        <div className="section">
            <div className="container">
                <h1 className="text-center mb-8">Our Expertise</h1>
                <div className="card-grid">
                    {verticals.map((v) => (
                        <div key={v.id} className="service-card" style={v.colorStyle as React.CSSProperties}>
                            <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>{v.title}</h2>
                            <p className="text-light mb-8">{v.description}</p>
                            <Link to={`/services/${v.id}`} className="text-primary" style={{ fontWeight: 600 }}>
                                Explore Services &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesLanding;
