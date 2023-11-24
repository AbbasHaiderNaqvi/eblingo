"use client";
import styles from '../styles/Hero.module.css';
import { Button, Col, Row } from 'antd';
import Image from "next/image";
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import React from 'react';
import { motion } from 'framer-motion';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';

const Hero = () => {  
  return (
    <div> 
      <motion.div
      initial="hidden"
      animate="visible"
      variants={MediumAnimationVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <motion.div
      variants={MediumAnimationVariants}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        <video autoPlay muted loop className={styles.video}>
          <source src='/assets/Home/video.mp4' type='video/mp4'></source>
        </video>
      </motion.div>
      </Col>
      </Row>
      </motion.div>
    </div>
  );
};

export default Hero;
