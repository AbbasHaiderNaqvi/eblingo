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
                            unoptimized
                            src="/assets/Home/About_Image.png"
                            alt="About"
                            width={497}
                            height={458}
                            className={styles.About_Image}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={13} xl={11}>
                        <div className={styles.about_content}>
                        <div className={styles.about_heading}>ABOUT US</div>
                        <div className={styles.about_sub_heading}>EBLINGO</div>
                        <p className={styles.about_paragraph}>Connecting Cultures, Crafting Communication - Your Global Partner in Language Solutions</p>
                            </div>
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}


export default About;