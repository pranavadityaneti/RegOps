import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { allServices } from '../../data/services';
import { toSlug } from '../../utils/slug';

type VerticalKey = keyof typeof allServices;

const titles: Record<string, string> = {
    pharma: 'Pharmaceutical Services',
    'medical-devices': 'Medical Device Services',
    consumer: 'Consumer & Nutraceutical Services'
};

const VerticalLanding: React.FC = () => {
    const { vertical } = useParams<{ vertical: string }>();

    if (!vertical || !allServices[vertical as VerticalKey]) {
        return <Navigate to="/services" replace />;
    }

    const services = allServices[vertical as VerticalKey];
    const title = titles[vertical] || 'Services';

    return (
        <div className="section bg-light">
            <div className="container">
                <div className="mb-8">
                    <Link to="/services" className="text-light text-sm">&larr; Back to Overview</Link>
                    <h1 className="mt-4 mb-4">{title}</h1>
                    <p className="text-light max-w-2xl">
                        Discover our specialized solutions tailored for the {title.toLowerCase()} sector.
                    </p>
                </div>

                <div className="card-grid">
                    {services.map((service) => (
                        <Link
                            key={service}
                            to={`/services/${vertical}/${toSlug(service)}`}
                            className="service-card"
                            style={{ display: 'block' }}
                        >
                            <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>
                                {service}
                            </h3>
                            <span className="text-light text-sm">Learn more &rarr;</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VerticalLanding;
