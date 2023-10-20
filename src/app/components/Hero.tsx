"use client";
import styles from '../styles/Hero.module.css';
import {Button} from 'antd';
import Image from "next/image";
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import React from 'react';

const Hero = () => {
  //  const [text] =useTypewriter({
  //           words:
  //           ["Welcome to my Website"],
  //           loop:true,
  //           typeSpeed:30,
  //           deleteSpeed:50,
  //           delaySpeed:2000,
  //         });  
  return (
    <div className={styles.hero}>
       {/* <Image
        src="/assets/logo.png" 
        alt="Logo"
        width={150} 
        height={150} 
      /> */}
      <h1 className={styles.heading}>
        Eblingo is 
      </h1>
      {/* <h1 className={styles.typing}>{text}</h1> */}
      <h1 className={styles.service_agency}>Service Agency</h1>
      <p className={styles.paragraph}>We have completed many project with different language with<br />
need precise translation ptojects to connect</p>
      <Button className={styles.readme_button}>Learn More</Button>
      <Button className={styles.allservices_button}>All Services</Button>
    </div>
  );
};

export default Hero;
