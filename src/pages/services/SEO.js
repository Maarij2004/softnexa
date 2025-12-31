import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';

const SEO = () => {
  const data = {
    title: 'Search Engine Optimization',
    description: 'Strategic SEO services to improve your website\'s visibility and drive organic traffic.',
    overview: 'Our SEO services help your website rank higher in search engine results, drive more organic traffic, and increase conversions. We use proven strategies and techniques to improve your search visibility and achieve sustainable, long-term results.',
    features: [
      {
        icon: 'fas fa-search',
        title: 'Keyword Research',
        description: 'Comprehensive keyword research to identify high-value opportunities that align with your business goals.'
      },
      {
        icon: 'fas fa-code',
        title: 'Technical SEO',
        description: 'Optimization of website structure, speed, mobile-friendliness, and technical elements for better crawling and indexing.'
      },
      {
        icon: 'fas fa-edit',
        title: 'On-Page SEO',
        description: 'Optimization of page titles, meta descriptions, headers, content, and internal linking structure.'
      },
      {
        icon: 'fas fa-link',
        title: 'Link Building',
        description: 'Strategic link building campaigns to earn high-quality backlinks that boost your domain authority.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Local SEO',
        description: 'Optimization for local search results to help businesses attract customers in their geographic area.'
      },
      {
        icon: 'fas fa-file-alt',
        title: 'Content Optimization',
        description: 'Content creation and optimization that targets relevant keywords while providing value to your audience.'
      }
    ],
    benefits: [
      'Increased organic traffic',
      'Higher search engine rankings',
      'Better brand visibility',
      'Improved user experience',
      'Long-term sustainable results',
      'Higher ROI compared to paid ads'
    ],
    process: [
      {
        title: 'SEO Audit',
        description: 'We conduct a comprehensive audit of your website to identify issues and opportunities for improvement.'
      },
      {
        title: 'Strategy Development',
        description: 'We develop a customized SEO strategy based on your goals, competition, and target audience.'
      },
      {
        title: 'Implementation',
        description: 'We implement on-page and technical optimizations to improve your website\'s search engine friendliness.'
      },
      {
        title: 'Content & Link Building',
        description: 'We create optimized content and build quality backlinks to improve your domain authority and rankings.'
      },
      {
        title: 'Monitoring & Reporting',
        description: 'We monitor performance, track rankings, and provide regular reports with actionable insights.'
      }
    ],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Schema Markup', 'Core Web Vitals']
  };

  return <ServiceDetailTemplate {...data} />;
};

export default SEO;

