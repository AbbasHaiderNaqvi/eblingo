"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';
import { Progress } from 'antd';

const AnimatedProgressBar: React.FC = () => {
  const [percent, setPercent] = useState<number>(1);
  const [visited, setVisited] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!visited) {
        setVisited(true);

        const interval = setInterval(() => {
          if (percent < 75) {
            setPercent((prevPercent) => prevPercent + 1);
          }
        }, 75);

        return () => clearInterval(interval);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visited, percent]);

  return <Progress percent={percent} status="active" className={styles.AnimatedProgressBar} />;
};

export default AnimatedProgressBar;
