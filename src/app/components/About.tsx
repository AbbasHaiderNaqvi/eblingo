'use client';
import styles from '../styles/About.module.css';
import Image from "next/image";
import { Button, Col, Divider, Row } from "antd";
import React from 'react';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.main}>
            <div className={styles.content}>
                <Row >
                    <Col xs={24} sm={24} md={24} lg={11} xl={13}>
                        <Image
                            src="/assets/Home/About_Image.png"
                            alt="About"
                            width={497}
                            height={458}
                            className={styles.About_Image}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={13} xl={11}>
                        <div className={styles.about_heading}>ABOUT EBLINGO</div>
                        <div className={styles.about_sub_heading}>We’re Partner of your <br />Innovations</div>
                        <p className={styles.about_paragraph}>We are a language services company headquartered in the United States<br />
                            with established project management offices worldwide. Our team<br />
                            comprises skilled project managers and linguists with extensive experience<br />
                            handling complex projects. Leveraging our dedicated Project Management<br />
                            Office, we offer comprehensive end-to-end solutions to our partners.<br />
                            EBLINGO is dedicated to helping you communicate your message to the<br />
                            world. Connect with us today to explore how we can serve you in your<br />
                            journey across languages and cultures.</p>
                            <p>
                                
                            </p>
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}


export default About;