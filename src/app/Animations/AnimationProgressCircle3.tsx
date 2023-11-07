'use client';
import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';
import styles from '../styles/testimonial.module.css';

const AnimatedProgressCircle3: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useEffect(() => {
    const targetPercent = 75;

    const startAnimation = () => {
      if (percent < targetPercent) {
        setPercent((prevPercent) => prevPercent + 1);
      }
    };

    if (isAnimated && percent < targetPercent) {
      const animationInterval = setInterval(startAnimation, 75);

      return () => {
        clearInterval(animationInterval);
      };
    }
  }, [percent, isAnimated]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Change this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsAnimated(true);
      }
    }, options);

    // Observe the element when the component mounts
    const element = document.querySelector(`.${styles.AnimatedProgressCircle3}`);
    if (element) {
      observer.observe(element);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div>
      <Progress
        type="circle"
        percent={percent}
        strokeColor="#FBAC41"
        status="active"
        className={styles.AnimatedProgressCircle3}
      />
      <p className={styles.AnimatedProgressCircle3_paragraph3}>
        Results improved compared<br />
        to previous agencies
      </p>
    </div>
  );
};

export default AnimatedProgressCircle3;
