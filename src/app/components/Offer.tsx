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
                <h5 className={styles.offer_heading}>WHAT WE OFFER</h5>
                <h4 className={styles.offer_heading2}>Offers</h4>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={14}>

                        <Tab />
                        
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                        <Image
                            src="/assets/Home/Offering_img.png"
                            alt="Service"
                          width={540}
                            height={620}
                            className={styles.Offer_img}
                        />
                    </Col>
                </Row>
            </div>
            <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className={styles.rectangle_subscribe}>
                    <Col span={17}>
                        <div className={styles.rectangle_subscribe_text}>Professional Translation Enhanced by Human</div>
                    </Col>
                    <Col>
                        <Button className={styles.rectangle_readmore_button}>Read More</Button>
                    </Col>
                </div>
            </Col>
            </Row>
        </motion.div>
    );
};

export default Offer;
