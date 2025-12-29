import React, { useState } from 'react';
import { blogPosts } from '../data/blogs';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Blogs: React.FC = () => {
    const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

    // Blog Detail View
    if (selectedBlog !== null) {
        const post = blogPosts.find((b) => b.id === selectedBlog)!;
        const otherPosts = blogPosts.filter((b) => b.id !== selectedBlog);

        return (
            <div className="blog-detail-page">
                <div className="container blog-detail-container">
                    {/* Back Button */}
                    <button
                        onClick={() => setSelectedBlog(null)}
                        className="blog-back-btn"
                    >
                        <ArrowLeft size={18} /> Back to Blogs
                    </button>

                    {/* Category Badge */}
                    <span className="blog-category">{post.category}</span>

                    {/* Date */}
                    <p className="blog-date">{post.date}</p>

                    {/* Title */}
                    <h1 className="blog-title">{post.title}</h1>

                    {/* Featured Image */}
                    <div className="blog-featured-image">
                        <img src={post.image} alt={post.title} />
                    </div>

                    {/* Summary / Lead */}
                    <h2 className="blog-lead">{post.excerpt}</h2>

                    {/* Content */}
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Author */}
                    <div className="blog-author">
                        <span>Written by <strong>{post.author}</strong></span>
                        <span className="author-role">{post.role}</span>
                    </div>
                </div>

                {/* Read Next Section */}
                <section className="read-next-section">
                    <div className="container">
                        <div className="read-next-header">
                            <h2>Read Our Next Article</h2>
                            <div className="read-next-nav">
                                <button className="nav-arrow"><ChevronLeft size={20} /></button>
                                <button className="nav-arrow"><ChevronRight size={20} /></button>
                            </div>
                        </div>
                        <div className="read-next-grid">
                            {otherPosts.slice(0, 3).map((p) => (
                                <div
                                    key={p.id}
                                    className="read-next-card"
                                    onClick={() => setSelectedBlog(p.id)}
                                >
                                    <div className="read-next-img">
                                        <img src={p.image} alt={p.title} />
                                        <span className="read-next-category">{p.category}</span>
                                    </div>
                                    <h4>{p.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // Blog List View
    return (
        <div className="section bg-light">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="mb-4">Regulatory Insights</h1>
                    <p className="text-light max-w-2xl mx-auto">
                        Stay updated with the latest trends, guidelines, and expert perspectives in the pharmaceutical, medical device, and consumer sectors.
                    </p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="blog-card"
                            onClick={() => setSelectedBlog(post.id)}
                        >
                            <div className="blog-card-image">
                                <img src={post.image} alt={post.title} />
                                <span className="blog-card-category">{post.category}</span>
                            </div>
                            <div className="blog-card-content">
                                <span className="blog-card-date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <span className="blog-card-link">
                                    Read Article <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
