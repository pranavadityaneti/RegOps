import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/blog4.png';

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  role: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Navigating eCTD 4.0 Compliance",
    date: "October 10, 2024",
    category: "Regulatory Affairs",
    excerpt: "In this detailed guide, we explore the evolving landscape of eCTD submissions and what the 4.0 update means for your product strategy.",
    image: blog1,
    author: "Dr. Sarah Mitchell",
    role: "Senior Regulatory Consultant",
    content: `
            <h2>What is eCTD 4.0?</h2>
            <p>The Electronic Common Technical Document (eCTD) 4.0 represents the latest evolution in regulatory submission standards. This comprehensive guide will walk you through the key changes and how to prepare your organization.</p>
            
            <h3>Key Changes in Version 4.0</h3>
            <p>Understanding the transition from eCTD 3.2.2 to 4.0 is critical for regulatory teams. The new format introduces significant architectural changes that affect how submissions are structured and validated.</p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <h3>Implementation Timeline</h3>
            <p>Regulatory agencies worldwide are adopting eCTD 4.0 on different timelines. We recommend starting your transition planning now to ensure seamless compliance.</p>
            
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <h3>Conclusion</h3>
            <p>Staying ahead of regulatory changes requires proactive monitoring and agile adaptation. Partnering with experts can ensure your journey to market is smooth and compliant.</p>
        `
  },
  {
    id: 2,
    title: "MDR vs IVDR: Key Differences Explained",
    date: "October 12, 2024",
    category: "Medical Devices",
    excerpt: "A comprehensive comparison of the Medical Device Regulation and In Vitro Diagnostic Regulation in the European Union.",
    image: blog2,
    author: "Dr. James Chen",
    role: "Medical Device Specialist",
    content: `
            <h2>Understanding EU Medical Device Regulations</h2>
            <p>The European Union's regulatory framework for medical devices underwent significant changes with the introduction of MDR and IVDR. This article breaks down the key differences.</p>
            
            <h3>Scope and Classification</h3>
            <p>While both regulations aim to enhance patient safety, they cover different product categories and have distinct classification systems.</p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <h3>Clinical Evidence Requirements</h3>
            <p>Both MDR and IVDR have strengthened requirements for clinical evidence, but the specifics differ based on device risk classification.</p>
            
            <h3>Conclusion</h3>
            <p>Understanding these regulations is essential for any company looking to enter or maintain presence in the European market.</p>
        `
  },
  {
    id: 3,
    title: "Cosmetic Labeling: Avoiding Common Pitfalls",
    date: "October 15, 2024",
    category: "Consumer Products",
    excerpt: "Expert insights on cosmetic product labeling requirements and how to avoid regulatory non-compliance.",
    image: blog3,
    author: "Maria Rodriguez",
    role: "Consumer Products Lead",
    content: `
            <h2>Cosmetic Labeling Best Practices</h2>
            <p>Proper labeling is one of the most overlooked aspects of cosmetic product compliance. Get it wrong, and you risk market access delays and costly recalls.</p>
            
            <h3>Ingredient Listing Requirements</h3>
            <p>INCI naming conventions and proper ordering of ingredients are fundamental to compliant cosmetic labels.</p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <h3>Claims and Marketing</h3>
            <p>What you say about your product matters. Unsubstantiated claims can lead to regulatory action and consumer trust issues.</p>
            
            <h3>Conclusion</h3>
            <p>Investing in proper labeling from the start saves time, money, and protects your brand reputation.</p>
        `
  },
  {
    id: 4,
    title: "FDA's New Guidance on Digital Health",
    date: "October 18, 2024",
    category: "Digital Health",
    excerpt: "Breaking down the FDA's latest guidance documents on software as a medical device (SaMD) and digital therapeutics.",
    image: blog4,
    author: "Dr. Sarah Mitchell",
    role: "Senior Regulatory Consultant",
    content: `
            <h2>Digital Health Regulatory Landscape</h2>
            <p>The FDA continues to evolve its approach to digital health products. This article summarizes the latest guidance and what it means for innovators.</p>
            
            <h3>Software as a Medical Device</h3>
            <p>Understanding when your software qualifies as a medical device is the first step in determining your regulatory pathway.</p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <h3>Pre-Cert Program Updates</h3>
            <p>The FDA's Software Pre-Certification Program continues to develop, offering potentially streamlined pathways for qualifying companies.</p>
            
            <h3>Conclusion</h3>
            <p>Digital health innovators should stay engaged with FDA guidance development to prepare for upcoming requirements.</p>
        `
  }
];
