import React from 'react';
import Projects from '../components/Projects';
import CTA from '../components/CTA';

const ProjectsPage = () => {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our portfolio of innovative digital solutions</p>
        </div>
      </section>
      <Projects showTitle={false} />
      <CTA />
    </main>
  );
};

export default ProjectsPage;

