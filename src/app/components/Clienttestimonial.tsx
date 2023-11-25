'use client';
import styles from '../styles/testimonial.module.css';
import { Row, Col } from 'antd';
import Image from 'next/image';
import React from 'react';
import { MediumAnimationVariants } from '../Animations/ScrollingAnimation';
import { motion } from 'framer-motion';

const Clienttestimonial: React.FC = () => { 
    return (
         <motion.div
        initial="hidden"
        animate="visible"
        variants={MediumAnimationVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
         
        <Row justify={'center'}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className={styles.Testimonial_Section}>
            <h5 className={styles.testimonials_heading}>Clients Testimonials</h5>
            <h4 className={styles.testimonials_heading2}>what clients has to say about us?</h4>
            <Image 
                src="/assets/Home/testimonial_img.png"
                alt="Testimonial"
                width={1216}
                height={426}
                className={styles.testimonial_img}
            />
            </div>
            </Col>
        </Row>
        </motion.div>
    );
};

export default Clienttestimonial;