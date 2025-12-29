import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { allServices } from '../../data/services';
import { fromSlug } from '../../utils/slug';

const ServiceDetail: React.FC = () => {
    const { vertical, slug } = useParams<{ vertical: string; slug: string }>();

    if (!vertical || !slug || !allServices[vertical as keyof typeof allServices]) {
        return <Navigate to="/services" replace />;
    }

    const serviceList = allServices[vertical as keyof typeof allServices];
    const serviceName = fromSlug(slug, serviceList);

    if (!serviceName) {
        return <div className="section text-center">Service Not Found</div>;
    }

    return (
        <div className="section">
            <div className="container">
                <div className="mb-8">
                    <Link to={`/services/${vertical}`} className="text-light text-sm inline-block mb-4">
                        &larr; Back to {vertical?.replace('-', ' ')} Services
                    </Link>
                    <h1 className="mb-6">{serviceName}</h1>
                </div>

                <div className="footer-grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
                    <div>
                        <div className="service-card" style={{ border: 'none', padding: '0', boxShadow: 'none' }}>
                            <h3 className="text-primary mb-4">Service Overview</h3>
                            <p className="text-light mb-6">
                                RegOps provides comprehensive {serviceName} services designed to ensure compliance, efficiency, and speed to market.
                                Our team of experts navigates the complex regulatory landscape so you can focus on your product.
                            </p>
                            <div style={{ background: '#F9FAFB', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                                <h4 className="mb-4">Why Choose RegOps for {serviceName}?</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li className="mb-2">✓ Thorough Gap Analysis & Risk Assessment</li>
                                    <li className="mb-2">✓ Strategic Submission Planning</li>
                                    <li className="mb-2">✓ Post-market Compliance Monitoring</li>
                                </ul>
                            </div>

                            <h3 className="mb-4">Key Deliverables</h3>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                                <li>Regulatory Strategy & Planning Documents</li>
                                <li>Compliant eCTD Submissions (Module 1-5 as applicable)</li>
                                <li>Health Authority Query Responses</li>
                                <li>Lifecycle Maintenance Plans</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '2rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
                            <h3 className="mb-4" style={{ color: 'white' }}>Ready to get started?</h3>
                            <p className="mb-6" style={{ opacity: 0.9 }}>
                                Contact our team today to discuss your {serviceName} needs.
                            </p>
                            <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary)', width: '100%' }}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
