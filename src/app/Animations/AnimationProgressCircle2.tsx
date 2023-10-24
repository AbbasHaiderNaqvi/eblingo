"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Progress } from "antd";
import styles from '../styles/testimonial.module.css';

const AnimatedProgressCircle2: React.FC = () => {
  const [percent, setPercent] = useState<number>(0); // Start at 0

  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in view, start the animation
          let currentPercent = 0;
          const interval = setInterval(() => {
            if (currentPercent < 75) {
              currentPercent += 1;
              setPercent(currentPercent);
            } else {
              clearInterval(interval);
            }
          }, 75);

          return () => clearInterval(interval);
        }
      });
    }, options);

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  return (
    <div ref={circleRef} >
      <Progress
        type="circle"
        percent={percent}
        status="active"
        strokeColor="#FBAC41"
        className={styles.AnimatedProgressCircle2}
      />
      <p className={styles.AnimatedProgressCircle2_paragraph2}>Google and Facebook-<br />certified team</p>

    </div>
  );
};

export default AnimatedProgressCircle2;
