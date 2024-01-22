"use client";
import styles from '../styles/Hero.module.css';
import { Button, Col, Row } from 'antd';
import React from 'react';

const Hero = () => {  
  return (
    <div> 
      <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <div>
        <video autoPlay muted loop className={styles.video} playsInline>
          <source src='/assets/Home/video.mp4' type='video/mp4'></source>
        </video>
      </div>
      </Col>
      </Row>
    </div>
  );
};

export default Hero;
