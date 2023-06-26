import React from 'react';
import { FiGithub } from 'react-icons/fi';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">Jungheeun 포트폴리오</h1>
        <a
          href="https://github.com/heeeun1207"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={20} /> GitHub 링크
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
