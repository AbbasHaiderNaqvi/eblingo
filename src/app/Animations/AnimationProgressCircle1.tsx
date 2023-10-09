"use client";
import { Progress } from "antd";
import React,{useState,useEffect} from 'react';
import styles from '../styles/AdvantageSection.module.css';

const AnimatedProgressCircle1: React.FC = () => {
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
    className={styles.AnimatedProgressCircle1}
    />;
  };
  
  export default AnimatedProgressCircle1;