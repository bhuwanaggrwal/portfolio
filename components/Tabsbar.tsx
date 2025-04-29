import React, { memo } from 'react';
import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

// ✅ Define named component
const TabsbarComponent = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab
        icon="/logos/json_icon.svg"
        filename="articles.json"
        path="/articles"
      />
      <Tab
        icon="/logos/markdown_icon.svg"
        filename="github.md"
        path="/github"
      />
    </div>
  );
};

// ✅ Add display name for ESLint
TabsbarComponent.displayName = 'Tabsbar';

const Tabsbar = memo(TabsbarComponent);

export default Tabsbar;
