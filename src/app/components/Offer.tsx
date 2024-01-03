'use client';
import styles from '../styles/Offer.module.css';
import Image from 'next/image';
import React from 'react';
import { Button, Progress, Row, Col } from "antd";
import Tab from "../Animations/Tab";
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';


const Offer: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={MediumAnimationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
        > 
            <div className={styles.offer_content}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                    <h5 className={styles.offer_heading}>WHAT WE OFFER</h5>
                        <Tab />
                    </Col>
                     <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                        <Image
                        unoptimized
                            src="/assets/Home/Offering_img.png"
                            alt="Service"
                            width={540}
                            height={546}
                            className={styles.Offer_img}
                        />
                    </Col> 
                </Row>
            </div>
        </motion.div>
    );
};

export default Offer;
