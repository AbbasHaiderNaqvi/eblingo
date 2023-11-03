"use client";
import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';
import styles from '../styles/testimonial.module.css';

const AnimatedProgressCircle1: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    // Define the total percentage you want to reach (e.g., 75%)
    const targetPercent = 74;

    const startAnimation = () => {
      if (percent < targetPercent) {
        setTimeout(() => {
          setPercent((prevPercent) => prevPercent + 1);
        }, 75);
      }
    };

    // Start the animation when the component is mounted
    if (percent < targetPercent) {
      const animationInterval = setInterval(startAnimation, 75);

      // Stop the animation when the target percent is reached
      return () => {
        clearInterval(animationInterval);
      };
    }
  }, [percent]);

  return (
    <div>
      <Progress
        type="circle"
        percent={percent}
        strokeColor="#FBAC41"
        status='active' // Change status based on completion
        className={styles.AnimatedProgressCircle1}
      />
      <p className={styles.AnimatedProgressCircle1_paragraph1}>
        Average increase in sales<br />
        for our clients
      </p>
    </div>
  );
};

export default AnimatedProgressCircle1;
// strokeColor="#FBAC41"
