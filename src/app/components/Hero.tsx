"use client";
import styles from '../styles/Hero.module.css';
import { Button, Col, Row } from 'antd';
import Image from "next/image";
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import React from 'react';
import { motion } from 'framer-motion';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';

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
      <motion.div
      initial="hidden"
      animate="visible"
      variants={MediumAnimationVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
      variants={MediumAnimationVariants}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        <video autoPlay muted loop className={styles.video}>
          <source src='/assets/Home/video.mp4' type='video/mp4'></source>
        </video>
      </motion.div>
        <Row>
          <Col lg={12}>
        <motion.h1 
        className={styles.heading}
        variants={MediumAnimationVariants}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Eblingo is
        </motion.h1>
        <motion.h1
        variants={MediumAnimationVariants}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }} 
        className={styles.typing}>
          {text}
          </motion.h1>
        <motion.h1 
        variants={MediumAnimationVariants}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className={styles.service_agency}>Service Agency</motion.h1>
          
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
      </motion.div>
    </div>
  );
};

export default Hero;
