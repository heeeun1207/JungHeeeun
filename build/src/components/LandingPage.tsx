import React from 'react';
import { FiBook, FiGithub } from 'react-icons/fi';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">정희은 작업일지</h1>
        <a
          href="https://github.com/heeeun1207"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FiGithub size={20} className="icon" /> GitHub 링크
        </a>
        <a
          href="https://ginger-turn-ce0.notion.site/4e6d1c860648422b910c2363b25fde68?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FiBook size={20} className="icon" /> Notion 링크
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
