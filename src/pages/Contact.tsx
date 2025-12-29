import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="grid-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                    {/* Info Column */}
                    <div>
                        <h1 className="mb-6">Let's Discuss Your Regulatory Needs</h1>
                        <p className="text-light mb-8" style={{ fontSize: '1.1rem' }}>
                            Whether you are looking for strategic advice, submission support, or a complete compliance audit, our team is here to help you navigate the complexities of the global market.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 className="mb-2">Headquarters</h4>
                            <p className="text-light">
                                123 Regulatory Way, Tech Park<br />
                                Innovation City, CA 94000<br />
                                United States
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 className="mb-2">Direct Contact</h4>
                            <p className="text-light">
                                Email: <a href="mailto:contact@regops.com" className="text-primary">contact@regops.com</a><br />
                                Phone: +1 (555) 123-4567
                            </p>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-light p-8 rounded-xl">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-input" placeholder="John Doe" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Work Email</label>
                                <input type="email" className="form-input" placeholder="john@company.com" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Service Area</label>
                                <select className="form-input">
                                    <option>Choose a service...</option>
                                    <option>Pharma</option>
                                    <option>Medical Devices</option>
                                    <option>Consumer / Cosmetics</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" rows={5} placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
