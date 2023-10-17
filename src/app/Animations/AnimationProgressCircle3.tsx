"use client";
"use client";
import { Progress } from "antd";
import React,{useState,useEffect} from 'react';
import styles from '../styles/testimonial.module.css';

const AnimatedProgressCircle3: React.FC = () => {
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
    type="circle" 
    percent={percent} 
    status="active"
    className={styles.AnimatedProgressCircle3}
    />;
  };
  
  export default AnimatedProgressCircle3;