import React, { memo } from 'react';
import Image from 'next/image';

import styles from '@/styles/ThemeInfo.module.css';

interface ThemeInfoProps {
  icon: string;
  name: string;
  publisher: string;
  theme: string;
}

// ✅ Named function component
const ThemeInfoComponent = ({ icon, name, publisher, theme }: ThemeInfoProps) => {
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={icon}
          alt={name}
          height={80}
          width={80}
          className={styles.themeImage}
        />
      </div>
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button onClick={() => setTheme(theme)}>Set Color Theme</button>
      </div>
    </div>
  );
};

// ✅ Assign display name for clarity (optional but ESLint-safe)
ThemeInfoComponent.displayName = 'ThemeInfo';

const ThemeInfo = memo(ThemeInfoComponent);

export default ThemeInfo;
