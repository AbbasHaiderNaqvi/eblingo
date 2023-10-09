"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css'
import { Progress } from 'antd';

const AnimatedProgressBar: React.FC = () => {
  const [percent, setPercent] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percent < 75) {
        setPercent(percent + 1);
      }
    }, 75);

    return () => clearInterval(interval);
  }, [percent]);

  return <Progress 
  percent={percent} 
  status="active"
  className={styles.AnimatedProgressBar}
  />;
};

export default AnimatedProgressBar;


