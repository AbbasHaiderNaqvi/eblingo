"use client";
import styles from '../styles/Hero.module.css';
import { Button, Col, Row } from 'antd';
import Image from "next/image";
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactDom from 'react-dom';

const Hero = () => {
  const [text] = useTypewriter({
    words:
      ['Document Translation',
        'Audio Localization',
        'Interpreter Solutions'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  return (
    <div>
      <div>
        <video autoPlay muted loop className={styles.video}>
          <source src='/assets/Home/video.mp4' type='video/mp4'></source>
        </video>
      </div>
      <div className={styles.hero}>
        <Row>
          <Col lg={12}>
        <h1 className={styles.heading}>
          Eblingo is
        </h1>
        <h1 className={styles.typing}>{text}</h1>
        <h1 className={styles.service_agency}>Service Agency</h1>
          
        <Button className={styles.readme_button}>Learn More</Button>
        <Button className={styles.allservices_button}>All Services</Button>
        </Col>
        <Col lg={12}>
        <Image
        src="/assets/Home/HeroSection.png" 
        alt="HeroSection"
        width={550} 
        height={444} 
      /> 
      </Col>
      </Row>
      </div>
      
    </div>
  );
};

export default Hero;
