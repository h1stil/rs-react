import React from 'react';

function About() {
  document.title = 'About Us';
  return (
    <div data-testid="about-page">
      <h2 style={{ textAlign: 'center' }}>about us</h2>;
    </div>
  );
}

export default About;
